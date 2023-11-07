"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../components/ui/use-toast";
import { useState } from "react";
import query from "@api/summarize";

const formSchema = z.object({
  textInput: z
    .string({ required_error: "This field can't be empty" })
    .min(1, { message: "This field can't be empty" }),
});

const SummarizeForm = ({ setResult, isSending, setIsSending }) => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      textInput: "",
    },
  });

  function onSubmit(values) {
    setIsSending(true);
    console.log(values);
    query({ inputs: values.textInput })
      .then((response) => {
        setResult(response[0].summary_text);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsSending(false));
  }
  return (
    <div className="px-[5%]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={() => {
            setResult((prev) => (form.watch().textInput.length ? prev : ""));
          }}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="textInput"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Original text</FormLabel>
                <FormControl>
                  <Textarea rows="5" placeholder="Your text ...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end">
            <Button
              disabled={isSending || !form.watch().textInput}
              type="submit"
            >
              Summarize
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SummarizeForm;
