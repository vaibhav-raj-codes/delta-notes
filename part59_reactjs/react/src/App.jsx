import "./App.css";
import SayHello from "./hello.jsx";

function App() {
  return (
    <>
      <SayHello userName="dharmendar" textColor="pink" />
      <SayHello userName="devendar" textColor="lime" />
      <SayHello textColor="lime" userName="babuRao"/>
      <SayHello userName="pushpa" textColor="orange" />
      <SayHello userName="ravi"/>
    </>
  );
}

export default App;
