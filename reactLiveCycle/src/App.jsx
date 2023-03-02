import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { RenderHistory } from "./components/RenderClocks";

const ClockRange = () => {
  const date = new Date();
  const [clock, setClock] = useState([]);
  const [second, setSecund] = useState(date.getSeconds);
  const [minute, setMinute] = useState(15);
  const [hour, setHour] = useState(2);

  const submit = (event) => {
    event.preventDefault();
    const obj = {
      city: event.target[0].value,
      timeZone: event.target[1].value,
    };
    setClock([...clock, obj]);
    event.target.reset();
  };

  return (
    <div className="wrapper">
      <Form submit={submit} />
      <RenderHistory clocks={clock} second={second} minute={minute} hour={hour}/>
    </div>
  )
};

function App() {
  return <ClockRange />;
}

export default App;
