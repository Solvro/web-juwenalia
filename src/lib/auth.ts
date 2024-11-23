import NextAuth, { User, Account, Profile } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import Facebook from "next-auth/providers/facebook";
import fs from "fs/promises";

const USER_DETAILS_FILE_NAME = "user_details.json";
// UTF-8 doesn't work when saving characters like 'ó'
const USER_DETAILS_FILE_ENCODING = "utf16le";

let user: FacebookUser | null = null;

// Custom user details which would be useful to store
export interface FacebookUser {
  id: string;
  accessToken: string;
  name: string;
  profilePicture: string;
}

// From next-auth
interface JwtCallbackArguments {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: null;
}

export default NextAuth({
  providers: [
    Facebook({
      authorization: { params: { scope: "email user_posts user_photos" } },
    }),
  ],
  callbacks: {
    async jwt({ user, account, token }: JwtCallbackArguments) {
      setFacebookUser(user, account);
      return token;
    },
  },
});

/** Check if the saved user is complete with valid details and access token. Optionally pass in a `FacebookUser`-like object to test. */
const isUserValid = (
  test: null | {
    id?: string | null;
    name?: string | null;
    profilePicture?: string | null;
    accessToken?: string | null;
  } = user
): test is FacebookUser =>
  !!(test?.id && test?.accessToken && test.name && test.profilePicture);

export async function getUser() {
  if (isUserValid()) return user;
  try {
    const data = await fs.readFile(
      USER_DETAILS_FILE_NAME,
      USER_DETAILS_FILE_ENCODING
    );
    const parsed = JSON.parse(data.toString());
    if (!isUserValid(parsed)) return null;
    user = parsed;
    return user;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

async function setFacebookUser(user: User, account: Account | null) {
  const userObj = {
    id: account?.providerAccountId,
    name: user.name,
    profilePicture: user.image,
    accessToken: account?.access_token,
  };
  if (!isUserValid(userObj)) {
    console.warn("Incomplete Facebook user details", userObj);
    return;
  }
  user = userObj;
  try {
    await fs.writeFile(
      USER_DETAILS_FILE_NAME,
      JSON.stringify(user),
      USER_DETAILS_FILE_ENCODING
    );
  } catch (error) {
    console.error(error);
    return;
  }
}
