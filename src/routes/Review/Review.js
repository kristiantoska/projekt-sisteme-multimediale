import React, { Component } from "react";
import "./index.css";

import navBttn from "../../images/burger.png";

class Review extends Component {
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

        <h1 className="text"> MOONLIGHT </h1>
        <div className="card">
          <img className="poster" src={require("../../images/list/film7.png")} />
          <div className="cardContent">
            <h3> Rate</h3>
            <form>
              <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                  <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4and a half" />
                  <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                  <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3and a half" />
                  <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                  <label class = "full" for="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2and a half" />
                  <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                  <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1and a half" />
                  <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                  <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" />
                  <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
              </fieldset>
              <br />
              <br />
              <br />
              <h3> Review </h3>
              <textarea className="reviewBox" />
            </form>
            <button className="submitContainer">
              ➤
            </button>
          </div>
        </div>
        <div className="card1">
          <div className="bord1">
            <form action="">
              <h3 className="labels first">Name</h3>
              <input
                className="inp"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <h3 className="labels">Email</h3>
              <input
                className="inp"
                type="email"
                id="fname"
                name="firstname"
                placeholder="Your email.."
              />
              <h3 className="labels">Date of birth</h3>
              <input className="inp" type="date" name="bday" min="2000-01-17" />
            </form>
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

export default Review;
