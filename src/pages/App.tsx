import "./App.css";
import CountdownTimer from "../components/CountdownTimer";

function App() {
  return (
    <>
      <div>
        טיימר :
        <CountdownTimer targetTime={new Date("06/26/2023 03:52")} />
      </div>
    </>
  );
}

export default App;
