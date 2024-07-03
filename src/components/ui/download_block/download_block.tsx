import React, { useState } from "react";
import "./download_block.css";

const DownloadBlock: React.FC = () => {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (type: any) => {
    setFeedback(type);
    // Optionally, send this feedback to the server here
    console.log(`User feedback: ${type}`); // Just for demonstration
  };
  return (
    <div className="download_block">
      <div className="docs_title">
        <h3>Docs</h3>
      </div>
      <div className="tell_block">
        <div className="copyordown_block">
          <p className="copyordown_text">
            Copy Code munually or
            <br />
            Download Documents
          </p>
          <a className="button_strg" download>
            <span className="button__text">Download</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </a>
          <div className="underdown_line"></div>
        </div>
        <div className="share_block">
          <p className="share_text">
            we will be glad if
            <br />
            you share it!
          </p>
          <a className="button_strg" download>
            <span className="button__text">Share</span>
            <span className="button__icon">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="icon_share"
              >
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path>
              </svg>
            </span>
          </a>
          <div className="underdown_line"></div>
        </div>
        <div className="feedback">
          <p>Was it helpful?</p>
          <div className="buttons">
            <button
              className={`like-button ${
                feedback === "like" ? "active_feedback" : ""
              }`}
              onClick={() => handleFeedback("like")}
            >
              👍 Like
            </button>
            <button
              className={`dislike-button ${
                feedback === "dislike" ? "active_feedback" : ""
              }`}
              onClick={() => handleFeedback("dislike")}
            >
              👎 Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBlock;
