import React, {useState} from "react";
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
          <div className="underdown_line"></div>
        </div>
      </div>
      <div className="rahit">
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
        <div className="centralize">
          <div>
            <button className="copylink_btn">
              <span>
                <svg
                  viewBox="0 0 467 512.22"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  image-rendering="optimizeQuality"
                  text-rendering="geometricPrecision"
                  shape-rendering="geometricPrecision"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0E418F"
                  height="12"
                  width="12"
                >
                  <path
                    d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z"
                    fill-rule="nonzero"
                  ></path>
                </svg>{" "}
                Copy link
              </span>
              <span>Copied</span>
            </button>
          </div>
        </div>
        <div className="feedback">
          <p>Was it helpful?</p>
          <div className="buttons">
            <button
              className={`like-button ${feedback === "like" ? "active_feedback" : ""}`}
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
