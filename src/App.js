import './App.css';
import Moto from "./components/moto"

function App() {
  const moto= [
    {
      id: Math.random(),
      brand: "DUCATI",
      praice: "4000",
    },
    {
      id: Math.random(),
      brand: "GSXR",
      praice: "3500",
    },
    {
      id: Math.random(),
      brand: "BMW",
      praice: "4000",
    },
    {
      id: Math.random(),
      brand: "Z1000",
      praice: "2500",
    },
  ];
     

       const str = "hello props"
       const handlePrice = (name, price) => {
       alert("this ${name} moto costs ${price}")
       }
  return (
    <div className="App">
      <Moto mikanike={moto} chaine={str} handlePrice = {handlePrice } />
    </div>
  );
}

export default App;
