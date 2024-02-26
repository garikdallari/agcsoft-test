import Homepage from "./pages/Homepage/Homepage";
import { useWindowHeight } from "./utils";

function App() {
  const height = useWindowHeight();
  return (
    <div className="App">
      <div className="container" style={{ height }}>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
