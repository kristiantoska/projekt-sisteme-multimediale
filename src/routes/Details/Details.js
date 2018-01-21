import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Details extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#">
            <img
              className="btn-nav"
              src="../../images/nav but.png"
              alt="nav image"
            />
          </a>

          <form action="" className="search" id="search">
            <input type="text" size="80" name="search" placeholder="Search" />
          </form>
        </header>

        <div>
          <div className="children">
            <image id="photo" src="../../images/thor.jpg" alt="Thor Ragnarok" />
            <div className="categories">
              <h1>Categories</h1>
              <ul>
                <a href="">
                  <li>Adventure</li>
                </a>
                <a href="">
                  <li>Animation</li>
                </a>
                <a href="">
                  <li>Action</li>
                </a>
              </ul>
              <ul>
                <a href="">
                  <li>SuperHero</li>
                </a>
                <a href="">
                  <li>Sci-Fi</li>
                </a>
                <a href="">
                  <li>Thriller</li>
                </a>
                <a href="">
                  <li>Drama</li>
                </a>
              </ul>
              <ul>
                <a href="">
                  <li>Romance</li>
                </a>
                <a href="">
                  <li>Fantasy</li>
                </a>
                <a href="">
                  <li>Horror</li>
                </a>
                <a href="">
                  <li>Comedy</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="shape">
            <p className="text_shape">7.5 IMDb </p>{" "}
          </div>
          <div className="shape1">
            <p className="text_shape">Action </p>{" "}
          </div>
          <div className="shape2">
            <p className="text_shape">Comics </p>{" "}
          </div>
          <div className="shape3">
            <p className="text_shape">Thor Raganark </p>{" "}
          </div>
          <div className="shape4">
            <p className="text_shape">Comic </p>{" "}
          </div>
          <div className="shape5">
            <p className="text_shape">65% RT </p>{" "}
          </div>
        </div>
        <div className="bord">
          <h2 className="tag"> Sumary </h2>
          <div className="text">
            <p>
              Filmi flet per kohen kur Thor perndia e vetetimes kishte shkuar ne
              Asgard(Pantheoni i perendive Nordike) ketu ai gjent <br /> dhe
              ketu ai fillon mision e tije per te gjetur infini stones. Por ai e
              gjen veten te burgosur te demonit Skovia ku ai i thote te vertete
              per <br /> Odini dhe Ragnarokun pas kesaj Thor fillon mision e tij
              te ndaloj Ragnarokun. Ne mission e tij per te shpetuar Asgardin
              nga <br /> Raganark bashkohen dhe si disa miqe te vjeter te tij po
              ashtu dhe vellai i tij Loki.
            </p>
          </div>
          <br />
          <h2 className="tag"> Tags </h2>
          <div>
            <div className="circle">
              <p className="text_shape">Action </p>{" "}
            </div>{" "}
            <br />
            <div className="circle_second">
              <p className="text_shape"> Comics </p>{" "}
            </div>{" "}
            <br />
            <div className="circle">
              <p className="text_shape">Fantasy </p>{" "}
            </div>{" "}
            <br />
            <div className="circle_second">
              <p className="text_shape"> Adventure </p>{" "}
            </div>
          </div>
          <br />
          <h2 className="tag"> Trailer </h2>
          <video width="1024" height="640" controls className="vide">
            <source
              src="C:\Users\user\Desktop\Thor Ragnarok Official Trailer.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          <br />
          <h2 className="tag"> Similar </h2>
          <div className="img">
            <image
              className="pamje"
              src="../../images/download.jpg"
              hspace="10"
            />
            <image className="pamje" src="../../images/dead.jpg" hspace="10" />
            <image
              className="pamje"
              src="../../images/league.jpg"
              hspace="10"
            />
          </div>
          <image src="../../images/download.png" width="50" className="arrow" />
        </div>
        <footer>
          <div className="info1">
            <p>
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            </p>
          </div>
          <div className="info2">
            <p>
              Nam facilisis cursus placerat. Nullam augue ex, sollicitudin ut
              quam sit amet, sodales hendrerit justo. Maecenas non efficitur
              lacus. Cras pulvinar cursus augue eu dignissim. Maecenas porttitor
              magna quis ex lobortis lobortis. Vestibulum id turpis vitae nisl
              fermentum semper. Sed pulvinar maximus felis non porttito
            </p>
          </div>

          <div id="bookmark2" className="logos">
            <h2>Lorem ipsum dolor sit </h2>
            <a href="#">
              <img src="../../images/fb.png" alt="" />
            </a>
            <a href="#">
              {" "}
              <img src="../../images/twiter.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../../images/insta.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../../images/pintrest.jpg" alt="" />
            </a>
            <a href="#">
              {" "}
              <img src="../../images/youtube.png" alt="" />
            </a>
            <a href="#">
              <img src="../../images/linkedin.png" alt="" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Details;
