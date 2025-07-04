import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFormStore from "@/store/useFormStore";

const NameForm = () => {
  const name = useFormStore(state => state.name);

  return (
    <div className="space-y-4 border p-4 rounded-md">
      <div className="space-y-2">
        <Label htmlFor="first-name">First name</Label>
        <Input
          id="first-name"
          type="text"
          value={name.firstName}
          onChange={e => useFormStore.setState({ name: { ...name, firstName: e.target.value } })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="first-name">Last name</Label>
        <Input
          id="last-name"
          type="text"
          value={name.lastName}
          onChange={e => useFormStore.getState().setName({ ...name, lastName: e.target.value })}
        />
      </div>
    </div>
  )
}

export default NameForm;