import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFormStore from "@/store/useFormStore";

const NameForm = () => {
  const email = useFormStore(state => state.email);
  return (
    <div className="space-y-4 border p-4 rounded-md">
      <div className="space-y-2">
        <Label htmlFor="first-name">Email</Label>
        <Input
          id="first-name"
          type="text"
          value={email}
          onChange={e => useFormStore.setState({ email: e.target.value })}
        />
      </div>
    </div>
  )
}

export default NameForm;