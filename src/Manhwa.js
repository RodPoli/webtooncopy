import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
function Manhwa(props) {
  const { photoName, name, author, likes } = props.manhwaObj;

  const backgroundImageStyle = {
    backgroundImage: `url(${photoName})`,
  };

  return (
    <div className="manhwa" style={backgroundImageStyle}>
      <div className="manhwa-details">
        <h3>{name}</h3>
        <p>{author}</p>
        <div className="likes-container">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#01cc62" }} />
          <h3
            style={{ color: "#01cc62", marginLeft: "5px", marginBottom: "0" }}
          >
            {likes} M
          </h3>
        </div>
      </div>
      <div className="condition">
        {likes > 30 ? (
          <h3 className="golden">
            <FontAwesomeIcon icon={faCrown} style={{ color: "#ffd700" }} />
            Golden Award!
          </h3>
        ) : (
          ""
        )}
        {likes > 10 ? (
          <h3 className="best">
            {" "}
            <FontAwesomeIcon icon={faTrophy} style={{ color: "#f11a25" }} />
            Best of the best!
          </h3>
        ) : (
          ""
        )}
        {likes > 5 ? (
          <h3 className="choice">
            <FontAwesomeIcon icon={faCheck} style={{ color: "#01cc62" }} />
            Reader's Choice!
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Manhwa;
