import { create } from 'zustand'

type FormStore = {
  name: {
    firstName: string;
    lastName: string;
  }
  email: string;
  setName: (name: { firstName: string, lastName: string }) => void;
  getFullName: () => string;
}

const useFormStore = create<FormStore>((set, get) => ({
  name: {
    firstName: '',
    lastName: '',
  },
  email: '',
  setName: (name: { firstName: string, lastName: string }) => { set({ name }); },
  getFullName: () => [get().name.firstName, get().name.lastName].join(' '),
}))

export default useFormStore