import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="@container text-4xl p-15 bg-emerald-200 text-center">
        <h1 className="bg-amber-300 mb-5">Vite React Shadcn Tailwind css v4</h1>
        <Button variant="default">Button</Button>
      </div>
    </>
  );
}

export default App;