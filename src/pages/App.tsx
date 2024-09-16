import "./App.css";
import CountdownTimer from "../components/CountdownTimer";
import ToggleDarkMode from "../components/ToggleDarkMode";

function App() {
  return (
    <>
      <div>
        טיימר :
        <CountdownTimer
          targetTime={new Date("04/22/2024 00:48")}
          containerStyle={{ borderRadius: "20px" }}
          mainColor="orange"
          containerStyle={{ width: "500px", textAlign: "center" }}
        />
        {/* <ToggleDarkMode /> */}
      </div>
    </>
  );
}

export default App;
