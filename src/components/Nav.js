import { Link } from "react-router-dom";


export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
        </Link> 
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard</div>
      </Link>
    </div>
  );
};