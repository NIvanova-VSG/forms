import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const ReactHookForm = () => {
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm<FormValues>({
    defaultValues:
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("onSubmit", data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Label htmlFor="first-name">First name</Label>
      <Input
        id="first-name"
        type="text"
        {...register("firstName", { required: "First name is required" })}
      />
      <div className="text-destructive">{errors.firstName?.message}</div>

      <Label htmlFor="last-name">Last name</Label>
      <Input
        id="last-name"
        type="text"
        {...register("lastName", { required: "Last name is required" })}
      />
      {errors.lastName && <div className="text-destructive">{errors.lastName.message?.toString()}</div>}

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email is invalid"
          }
        })}
      />
      {errors.email && <div className="text-destructive">{errors.email.message?.toString()}</div>}

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        {...register("password", {
           required: "Password is required", 
           minLength: { value: 6, message: "Password must be at least 6 characters" } })}
      />
      {errors.password && <div className="text-destructive">{errors.password.message?.toString()}</div>}

      <Label htmlFor="confirm-password">Confirm password</Label>
      <Input
        id="confirm-password"
        type="password"
        {...register("confirmPassword", {
          validate: (value) => value === watch('password') || "Passwords do not match"
        })}
      />
      {errors.confirmPassword && <div className="text-destructive">{errors.confirmPassword.message?.toString()}</div>}

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default ReactHookForm;