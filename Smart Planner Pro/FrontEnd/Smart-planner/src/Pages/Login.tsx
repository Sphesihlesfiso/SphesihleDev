'use client';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const formSchema = z.object({
  email: z.string().min(5, {
    message: "Email must be between 5 to 30 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "sphesihlemabaso25@gmail.com",
    },
  });
  function onSubmit(values:z.infer<typeof formSchema>){
    return values
  };

  return (
    <Card className="max-w-md mx-auto p-6">

        <CardHeader >
        <CardTitle>Welcome Back</CardTitle>
        </CardHeader>
        
      <Form {...form}>
        <form onSubmit={form.handleSubmit((onSubmit))}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="sphesihlemabaso25@gmail.com" {...field} />
                </FormControl>
                <FormDescription>This is the Login Page</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
}
