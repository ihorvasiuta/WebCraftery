import React from "react";
import "./quickguide.css";

const QuickGuideBlock: React.FC = () => {
  return (
    <div className="quickguide_block">
      <h1 className="quickguide_title">
        Quick Guide: Start Using Your Downloaded Project
      </h1>
      <ol className="quickguide_steps">
        <li className="quickguide_step">
          <h2 className="steps_title">1. Download the Project</h2>
          <p className="understeps_txt">
            Click the 'Download' button to save the zipped project file to your
            computer.
          </p>
        </li>
        <li className="quickguide_step">
          <h2 className="steps_title">2. Unzip the Folder</h2>
          <p className="understeps_txt">
            Navigate to your downloaded file and right-click on the zip file.
            Select "Extract All..." to unzip the contents.
          </p>

          <img
          className="extractall_img"
            src="https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/02/extract-all.jpg"
            alt=""
          />
        </li>
        <li className="quickguide_step">
          <h2 className="steps_title">3. Start Using the Project</h2>
          <p className="understeps_txt">
            Open the extracted folder and access the project files. For specific
            setup instructions, refer to the provided documentation.
          </p>
        </li>
      </ol>
      <div className="issuesofdownload_block">
        <h3>Troubleshooting Common Issues</h3>
        <p>
          If your download does not complete or the file is corrupt, try
          downloading again or contact support.
        </p>
        <a href="mailto:support@example.com">Contact Support</a>
      </div>
    </div>
  );
};

export default QuickGuideBlock;
