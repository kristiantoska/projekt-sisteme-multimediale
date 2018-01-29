import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";
import "./index.css";

const API_KEY = "5b2f814559ec90adfd0e8c740aa0c2b8";

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      top: [],
      popular: [],
      latest: [],
      selected: 2,
      loading: true
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
        )
      ])
      .then(
        axios.spread((top, popular, latest) => {
          this.setState({
            top: top.data.results,
            popular: popular.data.results,
            latest: latest.data.results,
            loading: false
          });
        })
      );
  }

  selectCategory(type) {
    this.setState({ selected: type });
  }

  renderMovies() {
    let data = [];

    switch (this.state.selected) {
      case 0:
        data = this.state.top;
        break;
      case 1:
        data = this.state.popular;
        break;
      case 2:
        data = this.state.latest;
        break;
      default:
    }

    return data.map(item => (
      <Link
        key={item.id}
        to="/about"
        onClick={() => this.props.selectMovie(item)}
      >
        <img src={`http://image.tmdb.org/t/p/w342${item.poster_path}`} alt="" />
      </Link>
    ));
  }

  renderBannerMovie() {
    const selected = this.state.selected;
    const bannerMovie =
      selected === 0
        ? this.state.top[0]
        : selected === 1 ? this.state.popular[0] : this.state.latest[0];

    return (
      <div className="martian">
        <img
          id="backgroundimage"
          src={`http://image.tmdb.org/t/p/w185${bannerMovie.poster_path}`}
          border="0"
          alt=""
        />
        <div className="textBlock">
          <h1 className="title">
            {bannerMovie.original_title}
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
          <p className="description">{bannerMovie.overview}</p>
          <div className="ratings">
            <button className="button button1">7.5 Imdb</button>
            <button className="button button2">65% RT</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const selected = this.state.selected;
    const currentCategory =
      selected === 0 ? "Top" : selected === 1 ? "Popular" : "Latest";

    if (this.state.loading) {
      return <div />;
    }

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

        {this.renderBannerMovie()}

        <div>
          <div className="list">
            <div className="top-list">
              <b id="all-categories">{`Category: ${currentCategory}`}</b>
              <ul className="menus">
                <li className={`list-items${selected === 2 ? " active" : ""}`}>
                  <span
                    onClick={() => this.selectCategory(2)}
                    className="menuItem"
                  >
                    Latest
                  </span>
                </li>
                <li className={`list-items${selected === 1 ? " active" : ""}`}>
                  <span
                    onClick={() => this.selectCategory(1)}
                    className="menuItem"
                  >
                    Popular
                  </span>
                </li>
                <li className={`list-items${selected === 0 ? " active" : ""}`}>
                  <span
                    onClick={() => this.selectCategory(0)}
                    className="menuItem"
                  >
                    Top
                  </span>
                </li>

                {/* <li>
                  <img
                    id="arrbot"
                    src={require("../../images/arr-down.png")}
                    alt=""
                  />
                </li> */}
              </ul>
            </div>
            <div className="films">{this.renderMovies()}</div>
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

export default connect(null, actions)(MainPage);
