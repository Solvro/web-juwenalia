"use client";

/*  eslint jsx-a11y/no-noninteractive-element-interactions: off */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Bug, Check, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FEEDBACK_FORM_URL, MUTATION_KEYS } from "@/config/api";
import { useBugReport } from "@/hooks/use-bug-report";
import type { FeedbackFormSchema } from "@/lib/schemas";
import { feedbackFormSchema } from "@/lib/schemas";

export function BugReportForm() {
  const { isDialogOpen, setIsDialogOpen } = useBugReport();
  const { isPending, isSuccess, mutateAsync, reset } = useMutation({
    mutationKey: [MUTATION_KEYS.SEND_FEEDBACK_FORM],
    mutationFn: async (values: FeedbackFormSchema) => {
      const body = {
        "entry.383411634": values.email,
        "entry.1557371849": values.title,
        "entry.2068246667": values.description,
      };
      return fetch(FEEDBACK_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Google Forms doesn't allow CORS
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      });
    },
    onError: (error) => {
      console.error("Error while sending feedback form", error);
    },
  });
  const form = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      email: "",
      title: "",
      description: "",
    },
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Twój feedback</DialogTitle>
          <DialogDescription className="text-balance">
            Jeśli znalazłeś błąd na naszej stronie lub masz jakąś sugestię,
            jesteśmy otwarci na zgłoszenia.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="grid place-items-center gap-1 py-4">
            <Check className="size-56 text-green-500" />
            <h1 className="mt-4 text-center text-lg font-semibold">
              Przyjęliśmy Twoje zgłoszenie
            </h1>
            <p className="text-balance text-center text-sm">
              Odpowiemy na nie tak szybko, jak tylko będziemy mogli.
            </p>
            <Button
              className="mt-4"
              onClick={() => {
                reset();
                form.resetField("title");
                form.resetField("description");
              }}
            >
              <div className="flex items-center gap-2">
                <ArrowRight />
                Zgłaszaj dalej
              </div>
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) => {
                toast.promise(mutateAsync(values), {
                  loading: "Trwa wysyłanie zgłoszenia...",
                  error: "Nastąpił błąd podczas wysyłania zgłoszenia",
                  success: "Zgłoszenie wysłane pomyślnie!",
                });
              })}
              className="grid w-full gap-4 py-4 sm:max-w-[425px]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adres email</FormLabel>
                    <FormControl>
                      <Input placeholder="jan.kowalski@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tytuł</FormLabel>
                    <FormControl>
                      <Input placeholder="Coś jest nie tak" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treść</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Opis problemu..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full justify-center">
                <Button type="submit" disabled={isPending}>
                  <div className="flex w-full items-center gap-2">
                    {isPending ? (
                      <Loader className="size-4 animate-spin" />
                    ) : (
                      <Bug className="size-4" />
                    )}
                    Prześlij zgłoszenie
                  </div>
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
