import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class MainPage extends Component {
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

          <form action="" id="search">
            <input
              className="inp"
              type="text"
              size="80"
              name="search"
              placeholder="Search"
            />
          </form>
        </header>

        <div className="martian">
          <div className="block-on-right">
            <p className="type">
              <h3> TYPE</h3>
              [1080p] [Bluray] [x265] [HEVC] [10bit] [AAC 5.1 Tigole]
            </p>
            <p className="cate">
              <h3>CATEGORIES </h3>
              [1080p] [Bluray] [x265] [HEVC] [10bit] [AAC 5.1 Tigole] [Drama]
              [Romance] [Based on Book] [Comedy] [Sci-Fi]
            </p>
          </div>
          <div className="text">
            <h1>
              The Martian
              <span className="rt-imdb">
                <img
                  src="../../images/imdb.jpg"
                  width="60px"
                  height="45px"
                  alt=""
                />
                <img
                  src="../../images/rt.jpg"
                  id="rt"
                  width="65px"
                  height="45px"
                  alt=""
                />
              </span>
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in mollis lacus. Pellentesque consequat eros dapibus eros pulvinar
              pharetra. Praesent tristique a quam eu posuere. Nam facilisis
              cursus placerat. Nullam augue ex, sollicitudin ut quam sit amet,
              sodales hendrerit justo. Maecenas non efficitur
            </p>
            <div className="ratings">
              <button className="button button1">7.5 Imdb</button>
              <button className="button button2">65% RT</button>
            </div>
          </div>
        </div>
        <div>
          <div className="list">
            <div className="top-list">
              <b id="all-categories">Category :All</b>
              <ul className="menus">
                <li className="list-items active">
                  <a href="">Latest</a>
                </li>
                <li className="list-items">
                  <a href="">Popular</a>
                </li>
                <li className="list-items">
                  <a href="">Top</a>
                </li>

                <li>
                  <img id="arrbot" src="../../images/arr-down.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="films">
              <img src="../../images/list/film1.png" alt="" />
              <img src="../../images/list/film2.png" alt="" />
              <img src="../../images/list/film3.png" alt="" />
              <img src="../../images/list/film4.png" alt="" />
              <img src="../../images/list/film5.png" alt="" />
              <img src="../../images/list/film6.png" alt="" />
              <img src="../../images/list/film7.png" alt="" />
              <img src="../../images/list/film8.png" alt="" />
              <img src="../../images/list/film9.png" alt="" />
              <img src="../../images/list/film10.png" alt="" />
              <img src="../../images/list/film11.png" alt="" />
              <img src="../../images/list/film12.png" alt="" />
              <img src="../../images/list/film13.png" alt="" />
              <img src="../../images/list/film14.png" alt="" />
              <img src="../../images/list/film15.png" alt="" />
              <img src="../../images/list/film16.png" alt="" />
              <img src="../../images/list/alpha.jpg" alt="" />
              <img src="../../images/list/her.jpg" alt="" />
              <img src="../../images/list/batman.jpg" alt="" />
              <img src="../../images/list/justice league.jpg" alt="" />
              <div className="rect" />
            </div>
          </div>
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
          <a title="Go top" href="#search">
            <img src="../../images/download.png" id="btn-top" alt="" />
          </a>
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

export default MainPage;
