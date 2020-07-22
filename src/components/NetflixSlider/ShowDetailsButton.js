import React from "react";
import IconArrowDown from "./../Icons/IconArrowDown";
import "./ShowDetailsButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span style={{ paddingBottom: "20px" }}>
      <a href="https://matchboxvirtual.com/">
        <FontAwesomeIcon style={{ paddingLeft: "140px" }} icon={faPhone} />
      </a>
      <a href="https://matchboxvirtual.com/">
        <FontAwesomeIcon style={{ paddingLeft: "140px" }} icon={faGift} />
      </a>
      <a href="https://matchboxvirtual.com/">
        <FontAwesomeIcon
          style={{ paddingLeft: "140px" }}
          icon={faAddressCard}
        />
      </a>
      <a href="https://matchboxvirtual.com/">
        <FontAwesomeIcon style={{ paddingLeft: "140px" }} icon={faCalendar} />
      </a>
      <a href="https://matchboxvirtual.com/">
        <FontAwesomeIcon style={{ paddingLeft: "140px" }} icon={faComment} />
      </a>

      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
