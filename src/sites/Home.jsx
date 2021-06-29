import card1 from "../assets/img/card-1.jpg";
import card2 from "../assets/img/card-2.jpg";
import card3 from "../assets/img/card-3.jpg";
import card4 from "../assets/img/card-4.jpg";
import card5 from "../assets/img/card-5.jpg";
import card6 from "../assets/img/card-6.jpg";
import card7 from "../assets/img/card-7.jpg";
import card8 from "../assets/img/card-8.jpg";
import "./about.css";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export default function Home(){
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
    {/* rest */}
    {/* Banner */}
    <div className="banner flex-even">
      <div className="banner-top flex-even">
        <div className="banner-top-text flex-even">
          <div className="wrapper">
            <div className="h1">Expand your possibilities.</div>
            <div className="h3">
              Take a look into the lives of american students, while learning
              important skills.
            </div>
            <div className="wrapper">
              <button className="button-pink">Start Exploring</button>{" "}
              <span className="contact">Contact us</span>
            </div>
          </div>
        </div>
        <div className="banner-top-image">
          <div className="wrapper flex-even">
            <img
              src={process.env.PUBLIC_URL + "assets/img/banner-top-img.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* destinations */}
      <div className="destinations">
        <div className="cali-text">
          Discover California Today <img src="" alt="" />
        </div>
        <div className="destinations-flex flex-even">
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">Beverly Hills</div>
            </div>
            <img src={card1} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even"> Venice Beach</div>
            </div>
            <img src={card2} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">Golden Gate</div>
            </div>
            <img src={card3} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">Santa Monica</div>
            </div>
            <img src={card4} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even"> Davis</div>
            </div>
            <img src={card5} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">Lombard St</div>
            </div>
            <img src={card6} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">Yosemite</div>
            </div>
            <img src={card7} alt="" />
          </div>
          <div className="cali-card">
            <div className="cali-location">
              <div className="flex-even">San Francisco</div>
            </div>
            <img src={card8} alt="" />
          </div>
        </div>
      </div>
    </div>
    {/* Host a student */}
    <div className="host">
      <div className="host-flex flex-start">
        <div className="host-text flex-even">
          <div className="wrapper">
            <div className="h1">Host a Student</div>
            <div className="h3">
              Earn extra income while appreciating the intricacies of a
              different culture
            </div>
            <button className="button-white">Learn more</button>{" "}
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "assets/img/host-img.jpg"}
          alt=""
          className="host-image"
        />
      </div>
    </div>
    <div className="separator"> </div>
    {/* Schools */}
    <div className="schools">
      <div className="schools-text">Live at one of these schools</div>
      <div className="schools-wrapper">
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCLA.jpg"} alt="" />
          <div className="school-name flex-even">UCLA</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCI.jpg"} alt="" />
          <div className="school-name flex-even">UCI</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCSD.jpg"} alt="" />
          <div className="school-name flex-even">UCSD</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCB.jpg"} alt="" />
          <div className="school-name flex-even">UCB</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCB.jpg"} alt="" />
          <div className="school-name flex-even">UCSB</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCB.jpg"} alt="" />
          <div className="school-name flex-even">UCD</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCB.jpg"} alt="" />
          <div className="school-name flex-even">UCSC</div>
        </div>
        <div className="schools-card">
          <img src={process.env.PUBLIC_URL + "assets/img/UCB.jpg"} alt="" />
          <div className="school-name flex-even">UCM</div>
        </div>
      </div>
    </div>
    <div className="separator"></div>
    {/* Contact us */}
    <div className="contact-us">
      <div className="contact-flex flex-even">
        <div className="contact-title">Contact us</div>
        <div className="flex-even">
          <div className="contact-item">Phone: (123)-123-1234 </div>
          <div className="contact-item">Email: abcdefgg@email.com </div>
          <div className="contact-item">Fax: (123)-123-1234 </div>
        </div>
      </div>
    </div>
  </>
  )
};