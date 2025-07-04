import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const ControlledForm = () => {
  const [form, setForm] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showErrors, setShowErrors] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowErrors(true);

    console.log('onSubmit', form);
  };


  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <Label htmlFor="first-name">First name</Label>
      <Input
        id="first-name"
        type="text"
        value={form.firstName}
        onChange={e => setForm({ ...form, firstName: e.target.value })}
      />
      {(showErrors && !form.firstName) && (
        <div className="text-destructive">First name is required</div>
      )}

      <Label htmlFor="last-name">Last name</Label>
      <Input
        id="last-name"
        type="text"
        value={form.lastName}
        onChange={e => setForm({ ...form, lastName: e.target.value })}
      />
      {(showErrors && !form.lastName) && (
        <div className="text-destructive">Last name is required</div>
      )}

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        value={form.email || ''}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      {(showErrors && !/\S+@\S+\.\S+/.test(form.email)) && (
        <div className="text-destructive">Email is invalid</div>
      )}

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      {(showErrors && !form.password) && (
        <div className="text-destructive">Password is required</div>
      )}
      {(showErrors && form.password.length > 0 && form.password.length < 6) && (
        <div className="text-destructive">Password must be at least 6 characters</div>
      )}

      <Label htmlFor="confirm-password">Confirm password</Label>
      <Input
        id="confirm-password"
        type="password"
        value={form.confirmPassword}
        onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
      />
      {(showErrors && form.password !== form.confirmPassword) && (
        <div className="text-destructive">Passwords do not match</div>
      )}

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default ControlledForm;