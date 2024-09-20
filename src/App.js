import logo from "./logo.svg";
import "./App.css";
import { Alert } from "@lemonsqueezy/wedges";
import { Button } from "@lemonsqueezy/wedges";

function App() {
  return (
    <div className="p-4">
      <Alert>You're awesome!</Alert>
      <Button>Button</Button>
    </div>
  );
}

export default App;
