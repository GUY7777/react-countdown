import "./App.css";
import CountdownTimer from "../components/CountdownTimer";

function App() {
  return (
    <>
      <div>
        טיימר :
        <CountdownTimer
          targetTime={new Date("06/26/2023 20:14")}
          borderRadius="1.5rem"
          borderStyle="solid"
          borderThickness="1rem"
          backgroundColor="aqua"
          textColor="black"
        />
      </div>
    </>
  );
}

export default App;
