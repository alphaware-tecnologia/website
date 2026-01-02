import contacts from "@/config/contacts";
import { Button, type ButtonProps } from "./button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CTAButton({ className, ...props }: ButtonProps) {
  return (
    <a href={contacts.whatsappLink} target="_blank" rel="noreferrer noopener">
      <Button
        className={cn(
          "w-full bg-emerald-600 hover:bg-emerald-700 md:whitespace-nowrap cursor-pointer",
          className,
        )}
        {...props}
      >
        Converse com um especialista
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  );
}
