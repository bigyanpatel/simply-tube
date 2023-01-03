import "./App.css";
import { Approute, Navbar } from "./frontend/components/componentExport";
import { Loader } from "./frontend/components/loader/Loader";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Approute />
      <Toaster />
    </div>
  );
}

export default App;