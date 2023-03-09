export const RenderHistory = ({ clocks, clockDelete }) => {
  console.log(clocks);
  const localTime = new Date();
  const timeDifference = localTime.getTimezoneOffset();
  let Grinvich;
  if (timeDifference < 0) {
    Grinvich = new Date(localTime.getTime() + timeDifference * 60 * 1000);
  } else {
    Grinvich = new Date(localTime.getTime() - timeDifference * 60 * 1000);
  }

  return clocks.map((el) => {
    const targetTime = new Date(
      Grinvich.getTime() + el.timeZone * 60 * 60 * 1000
    );
    console.log(targetTime);
    const hours = targetTime.getHours();
    const minutes = targetTime.getMinutes();
    const seconds = targetTime.getSeconds();
    return (
      <div className="clock-item" key={el.city}>
        <p>{el.city}</p>
        <div className="close" onClick={clockDelete}>X</div>
        <div className="watch">
          <div className="watch-screen">
            <div className="container">
              <div
                className="hour-arrow"
                style={{ transform: `rotate(${(360 / 12) * hours}deg)` }}
              ></div>
            </div>
            <div className="container">
              <div
                className="minute-arrow"
                style={{ transform: `rotate(${(360 / 60) * minutes}deg)` }}
              ></div>
            </div>
            <div className="container">
              <div
                className="secund-arrow"
                style={{ transform: `rotate(${(360 / 60) * seconds}deg)` }}
              ></div>
            </div>
            {/* <div className="close" onClick={clockDelete}>X</div> */}
          </div>
        </div>
      </div>
    );
  });
};
