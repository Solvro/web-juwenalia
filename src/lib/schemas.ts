import { z } from "zod";

import { conjugateNumeric } from "./polish";

const customErrorMap: z.ZodErrorMap = (issue, context) => {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type: {
      if (issue.received === "undefined") {
        return { message: "To pole jest wymagane" };
      }
      break;
    }
    case z.ZodIssueCode.too_small: {
      let minimum = issue.minimum;
      if (typeof minimum !== "number") {
        console.warn("Unexpected unmet bigint minimum:", issue.minimum);
        minimum = 1;
      }
      return {
        message: `To pole musi zawierać co najmniej ${conjugateNumeric(minimum, "znak", "", "i", "ów")}`,
      };
    }
    default: {
      break;
    }
  }
  return { message: context.defaultError };
};

z.setErrorMap(customErrorMap);

export const feedbackFormSchema = z.object({
  email: z.string().email({ message: "Podany adres email nie jest poprawny." }),
  title: z.string().min(3),
  description: z.string().min(10),
});

export type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;
