
import {useParams} from "react-router-dom";
import {useState} from "react";
import data from "../data.js"


export default function Stock (props){
   const params = useParams()
  const symbol = params.symbol;
  console.log(symbol);

  const [stock, setStock] = useState(null);

  if (stock === null) {
    data.map((each) => {
    if(each.symbol = symbol){
      setStock(each);
  
    }
  })
  }

  if (stock !== null)
  return (
    <div>
      <h1>{stock.name} </h1>
      <p> <span className="bold">Last Price:</span> {stock.lastPrice} </p>
      <p> <span className="bold">Change:</span> {stock.change} </p>
      <p> <span className="bold">High:</span> {stock.high} </p>
      <p> <span className="bold">Low:</span> {stock.low} </p>
      <p> <span className="bold">Open:</span> {stock.open} </p>
    </div>
    ) 
    else 
    return ( <div> </div>) 
};