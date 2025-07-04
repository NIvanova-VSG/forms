import useFormStore from "@/store/useFormStore";

const FormPreview = () => {
  const fullName = useFormStore((state) => state.getFullName());
  const email = useFormStore((state) => state.email);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Form Preview</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <small className="text-sm leading-none font-medium">Full name</small>
          <p className="text-muted-foreground text-sm">{fullName}</p>
        </div>
        <div className="flex items-center space-x-2">
          <small className="text-sm leading-none font-medium">Email</small>
          <p className="text-muted-foreground text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default FormPreview;