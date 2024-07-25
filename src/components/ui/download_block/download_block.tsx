import React, { useState } from "react";
import "./download_block.css";

type DownloadExamples = {
  projectpath?: string;
  imagespath?: string;
  images?: boolean;
}
type DownloadProps = {
  downloadexamples: DownloadExamples;
};
const DownloadBlock: React.FC<DownloadProps> = ({ downloadexamples }) => {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleFeedback = (type: string) => {
    setFeedback(type);
    console.log(`User feedback: ${type}`);
  };

  const handleDownload = (type: string) => {
      let filePath = "";
      switch (type) {
        case "project":
          filePath = `${downloadexamples.projectpath}`;
          break;
        case "imgs&icons" || "images":
          if (downloadexamples.images) {
            filePath = `${downloadexamples.imagespath}`;
          }
          break;
        default:
          console.log("No file type specified");
          return;
      }

      if (filePath) {
        const link = document.createElement("a");
        link.href = filePath;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  };

  return (
    <div className="download_block">
      <div className="docs_title">
        <h3>Docs & Downloads</h3>
      </div>
      <div className="gbrtc_blbl">
        <div className="copyordown_block">
          <p className="fr_instr_text">
            You can copy code manually, download icons/images separately, or
            download the entire project:
          </p>
          <div className="download_options">
            <button
              className="dwnld_btn"
              type="button"
              onClick={() => handleDownload("project")}
            >
              <span className="dwnld_txt">Project</span>
              <span className="dwnld_ic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="dwnld_svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
            <button
              className="dwnld_btn"
              type="button"
              onClick={() => handleDownload("imgs&icons")}
            >
              <span className="dwnld_txt">Img&Icons</span>
              <span className="dwnld_ic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="dwnld_svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </div>
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
              <svg
                className="dlk_ic lk_ic"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#999999"
              >
                <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
              </svg>{" "}
              Like
            </button>
            <button
              className={`dislike-button ${
                feedback === "dislike" ? "active_feedback" : ""
              }`}
              onClick={() => handleFeedback("dislike")}
            >
              <svg
                className="dlk_ic"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#999999"
              >
                <path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
              </svg>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBlock;
