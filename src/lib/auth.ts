import NextAuth, { User, Account, Profile } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import Facebook from "next-auth/providers/facebook";

// Set when the user signs in
let accessToken: string | null = null;

// From next-auth
type JwtCallbackArguments = {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: null;
};

export default NextAuth({
  providers: [Facebook],
  callbacks: {
    async jwt({ profile, account, token }: JwtCallbackArguments) {
      console.log({ profile });
      accessToken = account?.access_token ?? null;
      return token;
    },
  },
});

export function getAccessToken() {
  return accessToken;
}

export function isSignedIn() {
  return accessToken != null;
}
