import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

const UncontrolledForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('onSubmit', {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value
    })
  };

  console.log('render UncontrolledForm');

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <Label htmlFor="first-name">First name</Label>
      <Input id="first-name" type="text" ref={firstNameRef} />

      <Label htmlFor="last-name">Last name</Label>
      <Input id="last-name" type="text" ref={lastNameRef} />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default UncontrolledForm;