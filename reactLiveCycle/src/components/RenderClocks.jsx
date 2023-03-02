export const RenderHistory = ({clocks, second, minute, hour}) => {
//   const close = (event) => {
//     event.preventDefault();
//     console.log(event.target.parentElement.parentElement);
//   };

  return (
    <div className="clock-wrapper">
      {clocks.map((item) => {
        return (
          <div className="clock-item" key={item.city}>
            <p>{item.city}</p>
            <div className="watch">
              <div className="watch-screen">
                <div className="container">
                    <div className="hour-arrow" style={{transform: `rotate(${360 / 12 * hour}deg)`}}></div>
                </div>
                <div className="container">
                    <div className="minute-arrow"style={{transform: `rotate(${360 / 60 * minute}deg)`}} ></div>
                </div>
                <div className="container">
                     <div className="secund-arrow" style={{transform: `rotate(${360 / 60 * second}deg)`}}></div>
                </div>
                <div className="close">X</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
