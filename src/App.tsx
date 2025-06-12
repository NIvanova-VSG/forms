import { ThemeProvider } from "./components/ui/theme-provider"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ModeToggle } from "./components/ui/toggle-mode";
import UncontrolledForm from "./pages/UncontrolledForm";
import ControlledForm from "./pages/ControlledForm";
import WithReactHookForm from "./pages/WithReactHookForm";
import FinalForm from "./pages/FinalForm";

function App() {
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
    }
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="m-24 space-y-6">
        <ModeToggle />

        <div className="w-full border rounded-sm p-4">
          <Tabs defaultValue={tabs[0].value} className='flex flex-row'>
            <TabsList className='flex flex-col items-start h-full p-2'>
              {tabs.map((tab) =>
                <TabsTrigger key={tab.value} value={tab.value} >
                  {tab.name}
                </TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="uncontrolled"><UncontrolledForm /></TabsContent>
            <TabsContent value="controlled"><ControlledForm /></TabsContent>
            <TabsContent value="react-hook-form"><WithReactHookForm /></TabsContent>
            <TabsContent value="final-form"><FinalForm /></TabsContent>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App