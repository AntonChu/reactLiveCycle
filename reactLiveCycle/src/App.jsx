import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { RenderHistory } from "./components/RenderClocks";

const ClockRange = () => {
  const date = new Date();
  const [clock, setClock] = useState([]);
  let timeoutId;

  const submit = (event) => {
    event.preventDefault();
    const obj = {
      city: event.target[0].value,
      timeZone: event.target[1].value,
    };
    setClock([...clock, obj]);
    event.target.reset();
  };

  const clockDelete = (event) => {
    event.preventDefault();
    const target = event.target.parentElement.children[0].textContent;
    setClock([...clock].filter((el) => el.city !== target));
  };

  useEffect(() => {
    //componentDidMount
    return () => {
      console.log("Hello!");
    };
  }, []);

  useEffect(() => {
    //componentDidUpdate
    if (clock.length > 0) {
      timeoutId = setTimeout(() => {
        setClock([...clock]);
      }, 1000);
    }
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [clock]);

  return (
    <div className="wrapper">
      <Form submit={submit} />
      <div className="clock-wrapper">
        <RenderHistory clocks={clock} clockDelete={clockDelete} />
      </div>
    </div>
  );
};

function App() {
  return <ClockRange />;
}

export default App;
