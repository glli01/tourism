import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export default function Hosts(){
  return (
    <>
    {/* nav bar */}
    <header>
      <div className="wrapper">
        <div className="nav flex-between">
          <div className="wrapper flex-even">
            <div className="nav-item logo">
              <Link to="/">Sniip{" "}</Link>
              <img
                src={process.env.PUBLIC_URL + "/assets/icns/paper-plane.png"}
                alt="icn"
              />
            </div>
            <div className="directory flex-even">
              <div className="nav-item h3">
                <a href="#"><Link to="/about">About</Link></a>
              </div>
              <div className="nav-item h3">
                <a href="#"><Link to="/services">Services</Link></a>
              </div>
              <div className="nav-item h3">
                <a href="#"><Link to="/school">School</Link></a>
              </div>
              <div className="nav-item h3">
                <a href="#"><Link to="/hosts">Hosts</Link></a>
              </div>
              <div className="nav-item h3">
                <a href="#"><Link to="/visitors">Visitors</Link></a>
              </div>
            </div>
          </div>
          <div className="sign-in">
            <button className="button-yellow">Sign in</button>
          </div>
        </div>
      </div>
    </header>
    <div className="todo">
      <img width="1280" src={process.env.PUBLIC_URL + "./assets/img/workinprogress.gif"} alt="" />
    </div>
  </>
  )
};