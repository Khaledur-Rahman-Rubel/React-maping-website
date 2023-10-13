/* import react from "react"; */

import "./App.css";
import Card from "./card";
import Data from "./assets/data.json";

function App() {
  return (
    <div>
      <h1 className="heading">BD Store</h1>
      {Data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          alt={item.alt}
          product={item.product}
          price={item.price}
          rating={item.rating}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
