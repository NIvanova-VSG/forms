import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UncontrolledForm from "./uncontrolled-form";
import ControlledForm from "./controlled-form";
import FinalForm from "./final-form";
import ReactHookForm from "./react-hook-form";
import NameForm from "@/pages/main-page/name-form";
import FormPreview from "@/pages/main-page/form-preview";
import EmailForm from "@/pages/main-page/email-form";

const tabs = [
  {
    name: "Uncontrolled form",
    value: "uncontrolled"
  },
  {
    name: "Controlled form",
    value: "controlled"
  },
  {
    name: "React Hook Form",
    value: "react-hook-form"
  },
  {
    name: "Final Form",
    value: "final-form"
  },
  {
    name: "Store Example",
    value: "store-example"
  }
];

const MainPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold">
        Main Page
      </h2>
      <div className="w-full border rounded-sm p-4">
        <Tabs defaultValue="store-example" className='flex flex-row'>
          <TabsList className='flex flex-col items-start h-full p-2'>
            {tabs.map((tab) =>
              <TabsTrigger key={tab.value} value={tab.value} >
                {tab.name}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="uncontrolled"><UncontrolledForm /></TabsContent>
          <TabsContent value="controlled"><ControlledForm /></TabsContent>
          <TabsContent value="react-hook-form"><ReactHookForm /></TabsContent>
          <TabsContent value="final-form"><FinalForm /></TabsContent>
          <TabsContent value="store-example" className="space-y-4">
            <NameForm />
            <EmailForm />
            <FormPreview />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default MainPage