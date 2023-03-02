export const Form = ({submit}) => {
  
    
  return (
    <form className="form" onSubmit={submit}>
      <label>
        <p>Название</p>
        <input className="city" placeholder="..." required></input>
      </label>
      <label>
        <p>Временная зона</p>
        <input className="zone" placeholder="..." required></input>
      </label>
      <button className="button">ОК</button>
    </form>
  );
};
