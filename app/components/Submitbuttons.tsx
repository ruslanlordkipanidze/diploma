'use client';

import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Почекайте
        </>
      ) : (
        "ОК"
      )}
    </Button>
  );
}

export function StripeSubscriptionCreationButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Почекайте
        </>
      ) : (
        "Створити підписку"
      )}
    </Button>
  );
}

export function StripePortal() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </>
      ) : (
        "Передивитися деталі підписки"
      )}
    </Button>
  );
}

export function TrashDelete() {
  const { pending } = useFormStatus();

  return (
    <Button variant={"destructive"} size="icon" type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
}
