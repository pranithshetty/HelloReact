export const Planets = (props) => {
  let planets = props.planets;
  const checkGas = (planets) => {
    return planets.isGas === true;
  };
  return (
    <>
      {planets.filter(checkGas).map((planet, key) => {
        return <div key={key}>{planet.name}</div>;
      })}
    </>
  );
};

export default Planets;
