import "./App.css";
import { Room } from "@/liveblocks/Room";
import Homepage from "@/pages/Homepage";

function App() {
  return (
    <>
      <Room>
        <Homepage />
      </Room>
    </>
  );
}

export default App;
