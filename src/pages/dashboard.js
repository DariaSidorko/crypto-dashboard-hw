import data from "../data.js"
import { Link } from "react-router-dom";



export default function Dashboard (props){
  //console.log(data)
  return  (
  // <div></div>
    <table className="stocks">
      <tr class="eachStock">
        <th className="name">Company Name</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
      {data.map((stock) => {
        //console.log(stock)
        const { name, lastPrice, change, symbol } = stock;
        console.log(symbol)
        return (
          <tr class="eachStock">
          <Link to={`/stocks/${symbol}`}>
            <td className="name">{name}</td>
          </Link>
            <td className="price">{lastPrice}</td>
            {
              change > 0 ?  <td className="green">{change}</td> :
              <td className="red">{change}</td>
            }
           
          </tr>
        );
      })}
    </table>
  )
};




