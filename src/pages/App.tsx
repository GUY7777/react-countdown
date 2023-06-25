import "./App.css";
import CountdownTimer from "../components/CountdownTimer";

function App() {
  return (
    <>
      <div>
        טיימר :
        <CountdownTimer targetTime={new Date("06/25/2023 17:40")} />
      </div>
    </>
  );
}

export default App;
