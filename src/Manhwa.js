import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
            {likes}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Manhwa;
