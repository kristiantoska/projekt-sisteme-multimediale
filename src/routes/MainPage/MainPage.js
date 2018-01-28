import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        <button id="topBtn" title="Go to top" className="arrow">▲</button>
        <div className="header">
          <img
            className="btn-nav"
            src={require('../../images/burger.png')}
            alt="navImage"
          />

          <form action="" id="search" style={{ width: 400 }}>
            <input
              className="inp"
              type="text"
              size="50"
              name="search"
              placeholder="Search"
            />
          </form>

        </div>

        <div className="martian">

          <div className="textBlock">
            <h1 className="title">
              The Martian
              <span className="rt-imdb">
                <img
                  src={require("../../images/imdb.jpg")}
                  width="60px"
                  height="60px"
                  alt=""
                />
                <img
                  src={require("../../images/rt.jpg")}
                  id="rt"
                  width="70px"
                  height="60px"
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
              <b id="all-categories">Category: All</b>
              <ul className="menus">
                <li className="list-items active">
                  <a href="" className="menuItem">Latest</a>
                </li>
                <li className="list-items">
                  <a href="" className="menuItem">Popular</a>
                </li>
                <li className="list-items">
                  <a href="" className="menuItem">Top</a>
                </li>

                <li>
                  <img id="arrbot" src={require("../../images/arr-down.png" )}alt="" />
                </li>
              </ul>
            </div>
            <div className="films">
              <img src={require("../../images/list/film7.png")} alt="" />
              <img src={require("../../images/list/film9.png")} alt="" />
              <img src={require("../../images/list/film1.png")} alt="" />
              <img src={require("../../images/list/film2.png")} alt="" />
              <img src={require("../../images/list/film3.png")} alt="" />
              <img src={require("../../images/list/film4.png")} alt="" />
              <img src={require("../../images/list/film5.png")} alt="" />
              <img src={require("../../images/list/film6.png")} alt="" />
              <img src={require("../../images/list/film10.png")} alt="" />
              <img src={require("../../images/list/film8.png")} alt="" />
              <img src={require("../../images/list/film11.png")} alt="" />
              <img src={require("../../images/list/film12.png")} alt="" />
              <img src={require("../../images/list/film9.png")} alt="" />
              <img src={require("../../images/list/film1.png")} alt="" />
              <img src={require("../../images/list/film2.png")} alt="" />
              <img src={require("../../images/list/film3.png")} alt="" />
              <img src={require("../../images/list/film4.png")} alt="" />
              <img src={require("../../images/list/film13.png")} alt="" />
              <img src={require("../../images/list/film14.png")} alt="" />
              <img src={require("../../images/list/film15.png")} alt="" />
              <img src={require("../../images/list/film16.png")} alt="" />
              <img src={require("../../images/list/film3.png")} alt="" />
              <img src={require("../../images/list/film4.png")} alt="" />
              <img src={require("../../images/list/film5.png")} alt="" />
              <img src={require("../../images/list/film6.png")} alt="" />
              <img src={require("../../images/list/film10.png")} alt="" />
              <img src={require("../../images/list/film8.png")} alt="" />
              <img src={require("../../images/list/film11.png")} alt="" />
              <img src={require("../../images/list/film11.png")} alt="" />
              <img src={require("../../images/list/film1.png")} alt="" />
              <img src={require("../../images/list/film3.png")} alt="" />
              <img src={require("../../images/list/film4.png")} alt="" />
              <img src={require("../../images/list/film5.png")} alt="" />
              <img src={require("../../images/list/film6.png")} alt="" />
              <img src={require("../../images/list/film2.png")} alt="" />
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
              <img src={require("../../images/fb.png")} alt="" />
            </a>
            <a href="#">
              {" "}
              <img src={require("../../images/twiter.jpg")} alt="" />
            </a>
            <a href="#">
              <img src={require("../../images/insta.jpg")} alt="" />
            </a>
            <a href="#">
              <img src={require("../../images/pintrest.jpg")} alt="" />
            </a>
            <a href="#">
              {" "}
              <img src={require("../../images/youtube.png")} alt="" />
            </a>
            <a href="#">
              <img src={require("../../images/linkedin.png")} alt="" />
            </a>
          </div>

        </footer>

      </div>
    );
  }
}

export default MainPage;
