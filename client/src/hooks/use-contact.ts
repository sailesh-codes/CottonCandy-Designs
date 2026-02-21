import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema, type InsertMessage } from "@shared";
import { useToast } from "./use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Pure client-side validation and "fake" submit – no backend call.
      insertMessageSchema.parse(data);

      // simulate async work so loading states still behave naturally
      await new Promise((resolve) => setTimeout(resolve, 500));

      return { success: true } as const;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent! ✨",
        description: "Thanks for reaching out! I'll get back to you soon.",
        className: "bg-white border-2 border-secondary text-foreground rounded-2xl",
      });
    },
    onError: (error) => {
      toast({
        title: "Oops!",
        description: error.message,
        variant: "destructive",
        className: "rounded-2xl",
      });
    },
  });
}
