import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import image1 from "./assets/vinyl-record.png";
function videoFooter({chanel, description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{chanel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src={image1} alt="" />
    </div>
  );
}

export default videoFooter;
