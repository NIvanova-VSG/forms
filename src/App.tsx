import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/toggle-mode";
import MainPage from "./pages/main-page/main-page";

const App = () => {
  return (
    <ThemeProvider>
      <div className="mx-96 my-8 space-y-6">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <MainPage />
      </div>
    </ThemeProvider>
  )
}

export default App