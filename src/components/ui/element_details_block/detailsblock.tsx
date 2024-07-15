import React, { useState } from "react";
import "./detailsblock.css";
import { Input } from "@material-tailwind/react";

type DetailsData = {
  title: string;
  description: string;
  url: string;
};
type DetailsProps = {
    details_data: DetailsData;
}
const DetailsBlock: React.FC<DetailsProps> = ({ details_data }) => {
  return (
    <div className="details_block">
      <div className="important_part">
        <div className="title_important">
          <h1 className="important_text">Important</h1>
          <img
            className="important_icon"
            src="/w_icons/error_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
          />
        </div>
        <div className="action_toadd_block">
          <div className="fr_action_block">
            <p>Add this to the head of html: </p>
            <input
            className="value_imput"
              type="text"
              value="<link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>"
              readOnly
            />
          </div>
          <div className="sec_action_block">
            <p>In this element were used icons from boxicons so please don’t forget to add this link to your html head.</p>
          </div>
        </div>
      </div>
      <h1 className="details_title">{details_data.title}</h1>
      <p className="description_block">{details_data.description}</p>
      <div className="exampleofusage_block">
        <p className="exampleofusage_text">Example of usage this element:</p>
        <a
          className="demo_url"
          href={details_data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://example.com/classic-menu
        </a>
      </div>
    </div>
  );
};

export default DetailsBlock;
