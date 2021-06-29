import "../App.css";
import "./about.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import banner from "../assets/about/banner.jpg";
import Mission from "../assets/about/Mission.jpg";
import Safety from "../assets/about/Safety.jpg";
export default function About(){
  return (
  <>
    {/* nav bar */}
    <header>
    <div className="au-top">
      <div className="about-banner">
        <img src={banner}></img>
        <div className="about-us">About us</div>
      </div>
        <div className="wrapper">
          <div className="au-nav flex-between">
            <div className="wrapper flex-even">
              <div className="au-nav-item logo">
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
    </div>
    </header>
    <div className="mission flex-between">
      <div className="text-wrapper">
        <div className="section-title">Our Mission</div>
        <div className="section-body">
        In the growing interconnectedness of the world, we believe in the values of learning and living together to foster impactful and purposeful experiences across students from various cultural backgrounds. In efforts to provide more affordable and genuine foreign exchange programs, we cultivate a learning environment with native English speakers, access to cultural scenes within the area as only a local would know, and a more flexible program itinerary—all entirely up to you.
        </div>
        <div class="au-section-button"><button className="button-pink">Read More</button></div>
      </div>
      <div class="au-section-image">
        <img src={Mission} alt="family :)" />
      </div>
    </div>
    <div className="safety flex-between">
      <div class="au-section-image">
        <img src={Safety} alt="family :)" />
      </div>
      <div className="text-wrapper">
        <div className="section-title">Your Safety is Our Priority</div>
        <div className="section-body">
        In the growing interconnectedness of the world, we believe in the values of learning and living together to foster impactful and purposeful experiences across students from various cultural backgrounds. In efforts to provide more affordable and genuine foreign exchange programs, we cultivate a learning environment with native English speakers, access to cultural scenes within the area as only a local would know, and a more flexible program itinerary—all entirely up to you.        </div>
        <div class="au-section-button"><button className="button-underline">Learn More</button></div>
      </div>
    </div>
    <div className="us">
      <div className="section-title">Who are We?</div>
      <div className="us-cards flex-even">
        <div className="us-card">
          <div className="us-text"></div>
          <div className="us-image"><img src="" alt="" srcset="" /></div>
        </div>
        <div className="us-card">
          <div className="us-text"></div>
          <div className="us-image"><img src="" alt="" srcset="" /></div>
        </div>
        <div className="us-card">
          <div className="us-text"></div>
          <div className="us-image"><img src="" alt="" srcset="" /></div>
        </div>
        <div className="us-card">
          <div className="us-text"></div>
          <div className="us-image"><img src="" alt="" srcset="" /></div>
        </div>
        <div className="us-card">
          <div className="us-text"></div>
          <div className="us-image"><img src="" alt="" srcset="" /></div>
        </div>
      </div>
      <div className="us-footer"> We are a company established to connect students around the world.... blah blah</div>
    </div>
    <footer className="au-footer">Contact us</footer>
  </>
  )
};