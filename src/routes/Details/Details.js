import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import "./index.css";

class MainPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const item = this.props.selectedMovie;
    console.log(item);
    return (
      <div>
        <button
          id="topBtn"
          title="Go to top"
          className="arrow"
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </button>
        <div className="header">
          <img
            className="btn-nav"
            src={require("../../images/burger.png")}
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

        <div className="thor">
          <img
            id="backgroundimage"
            src={`http://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
            border="0"
            alt=""
          />
          <div className="info">
            <button className="button buttonTitle">
              {item.original_title}
            </button>
            <div style={{ display: "block", marginLeft: 120 }}>
              <button className="button buttonDefault">Comic</button>
              <button className="button buttonDefault">Action</button>
            </div>
            <div style={{ display: "block", marginLeft: 70 }}>
              <button className="button buttonDefault">Comedy</button>
              <button className="button buttonDefault">SuperHero</button>
            </div>
            <div style={{ display: "block", marginLeft: 120 }}>
              <button className="button button1">7.5 Imdb</button>
              <button className="button button2">65% RT</button>
            </div>
          </div>
        </div>

        <div>
          <div className="list">
            <div className="films">
              <h2 className="tag"> Sumary </h2>
              <div className="summary">
                <p>{item.overview}</p>
              </div>
              <br />
              <h2 className="tag" style={{ paddingTop: 50 }}>
                {" "}
                Tags{" "}
              </h2>
              <div className="tagBlock">
                <div className="circle" style={{ backgroundColor: "#00CC66" }}>
                  <p className="text_shape">Action </p>{" "}
                </div>{" "}
                <br />
                <div
                  className="circle"
                  style={{ backgroundColor: "#00CC99", marginLeft: 40 }}
                >
                  <p className="text_shape"> Comics </p>{" "}
                </div>{" "}
                <br />
                <div className="circle" style={{ backgroundColor: "#00CCCC" }}>
                  <p className="text_shape">Fantasy </p>{" "}
                </div>{" "}
                <br />
                <div
                  className="circle"
                  style={{ backgroundColor: "#00CCFF", marginLeft: 40 }}
                >
                  <p className="text_shape"> Adventure </p>{" "}
                </div>
              </div>
              <br />

              <h2 className="tag" style={{ paddingTop: 50 }}>
                {" "}
                Trailer{" "}
              </h2>
              <iframe
                className="video"
                width="1024"
                height="640"
                src="https://www.youtube.com/embed/xU47nhruN-Q"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              <br />
              <h2 className="tag" style={{ paddingTop: 50 }}>
                {" "}
                Similar{" "}
              </h2>

              <div className="movies">
                <img src={require("../../images/list/film12.png")} />
                <img src={require("../../images/list/film13.png")} />
                <img src={require("../../images/list/film14.png")} />
              </div>
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

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

export default connect(mapStateToProps)(MainPage);
