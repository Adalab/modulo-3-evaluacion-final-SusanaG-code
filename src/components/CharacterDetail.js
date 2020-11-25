import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faPastafarianism,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class CharacterDetail extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <section className="detail-box">
        <article className={`cardDetail ${this.props.id}`}>
          <div className="description">
            <h2>
              {this.props.titledetail}
              {this.props.namedetail}
            </h2>
            <p>
              <span className="definition">Status: </span>
              {this.props.statusdetail}
              <FontAwesomeIcon
                icon={this.props.statusdetail === "Dead" ? faSkull : null}
                className="icon"
              />
            </p>
            <p>
              <span className="definition">Species:</span>{" "}
              {this.props.speciesdetail}
              <FontAwesomeIcon
                icon={
                  this.props.speciesdetail === "Alien"
                    ? faPastafarianism
                    : faUser
                }
                className="icon"
              />
            </p>
            <p>
              <span className="definition">Origin:</span>{" "}
              {this.props.origindetail.name}
            </p>
            <p>
              <span className="definition">Episodes: </span>
              {this.props.episodesdetail}
            </p>
            <Link to="/">
              <div>
                <button className="bton">Go back </button>
              </div>
            </Link>
          </div>

          <img
            className="imageDetail"
            src={this.props.imagedetail}
            alt={this.props.imagedetail}
          ></img>
        </article>
      </section>
    );
  }
}

CharacterDetail.propTypes = {
  episodesdetail: PropTypes.number,
  origindetail: PropTypes.string,
  statusdetail: PropTypes.string,
  speciesdetail: PropTypes.string,
};
export default CharacterDetail;
