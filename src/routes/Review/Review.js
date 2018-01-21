import React, { Component } from "react";
import "./index.css";

import navBttn from "../../images/nav_but.png";

class Review extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#">
            <img className="btn-nav" src={navBttn} alt="nav image" />
          </a>

          <form action="" id="search">
            <input
              type="text"
              className="search"
              size="80"
              name="search"
              placeholder="Search"
            />
          </form>
        </header>
        <h1 className="text"> Thor Raganark </h1>
        <div className="card">
          <image
            className="img23"
            src="../../images/thor.jpg"
            width="250px"
            height="400"
          />
          <div className="bord1">
            <h3> Rate</h3>
            <form>
              <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  value="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" value="4" />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  value="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" value="3" />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  value="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" value="2" />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  value="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" value="1" />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input type="radio" id="starhalf" name="rating" value="half" />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
              <br />
              <h3> Review </h3>
              <textarea />
            </form>
            <image className="img" src="../../images/arrleft.png" width="50" />
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

export default Review;
