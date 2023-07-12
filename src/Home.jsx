import React, { useEffect, useState } from "react";
import "./Home.css";

const AlertMessage = () => {
  console.log("comonente reanderizado Alert message");

  //componentDidMount

  useEffect(() => {

    return () => {
      //componentWillUnMount
      console.log("componente renderizado sera eliminado (AlertMessage)");
    };
  }, []);
  //solo se ejecuta la primera vez que se ejecuta el componente
  return (
    <div className=" alert alert-danger" role="alert">
      Esto es una alerta
    </div>
  );
};

const Home = () => {
  //const [value, function] = useState(initialValue)
  const [saludo, setSaludo] = useState("hola desde usestate");
  const [edad, setEdad] = useState(10);
  const [persona, setPersona] = useState({
    name: "John",
    lastname: "Doe",
  });
  const [notas, setNotas] = useState(10, 20, 30, 40, 30);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const [counter, setCounter] = useState(0);

  const handleCounter = () => setCounter((counter) => counter + 1);
  const handleCounterRestar = () => setCounter((counter) => counter - 1);
  useEffect(() => {}, []);
  // const handleChange = (e) => {
  //     setEmail(e.target.value)
  // }
  const handleChange = (e) => setEmail(e.target.value);

  const cambiarSaludo = (e) => {
    setSaludo("saludo camiado desde onclick");
    console.log(e.target);
    e.target.disabled = true;
    e.target.classList.remove("btn-dark");
    e.target.classList.add("btn-info");
  };
  const cambiarFondo1 = (e) => {
    e.target.style.backgroundColor = "blueviolet";
  };
  const cambiarFondo2 = (e) => {
    e.target.style.backgroundColor = "black";
  };

  useEffect(() => {
    //componentDidUpde
    console.log("componente renderizado");
  }, []);

  useEffect(() => {
    console.log("ocurrio un cambio en la variable show")
  },[show])


  useEffect(() => {
    console.log("valor" + counter)
  },[counter])

  return (
    <>
      <h1>{saludo}</h1>
      <button className="btn btn-dark" onClick={cambiarSaludo}>
        Cambiar estado
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>

      {/* <button className="btn btn-primary" onClick={() =>{setCounter(counter => counter + 1)} }>{counter}Contador</button>  */}
      <button className="btn btn-primary" onClick={handleCounter}>
        Sumar
      </button>
      <button className="btn btn-dark">{counter}</button>
      <button className="btn btn-warning" onClick={handleCounterRestar}>
        Restar
      </button>
      <input type="email" onChange={handleChange} value={email} />
      <div
        className="box"
        onMouseOver={cambiarFondo1}
        onMouseOut={cambiarFondo2}
      ></div>
      {show ? <AlertMessage /> : null}
    </>
  );
};

export default Home;

//para los eventos, puedo usar tres formas de escribir las las funciones de llamada
/*<div onClick={functionName}></div>*/

/*<div onClick={() => {
  functionName()}
}></div>*/

/*<div onClick={()=> functionName()}></div>*/
