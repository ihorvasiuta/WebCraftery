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
};
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
            <p>
              In this element were used icons from boxicons so please don’t
              forget to add this link to your html head.
            </p>
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
      <div className="mit_l_bl">
        <div className="ttl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mit_b_ic"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M12 2v1.75M16 21h-4m-4 0h4m9-16a4.821 4.821 0 0 1-4.055.12l-1.583-.68A8.532 8.532 0 0 0 12 3.75M3 5a4.821 4.821 0 0 0 4.055.12l1.583-.68A8.532 8.532 0 0 1 12 3.75M12 21V3.75m7 1.75-2.892 6.145a3.196 3.196 0 1 0 5.784 0L19 5.5Zm-14 0-2.892 6.145a3.196 3.196 0 1 0 5.784 0L5 5.5Z"></path>
          </svg>
          <p className="mit_tt_tx">MIT License</p>
        </div>
        <textarea
          name=""
          id=""
          className="mit_tx_ara custom_scrollbar"
          readOnly
        >
          Copyright - 2024 Rodrypaladin (David Rodríguez) Permission is hereby
          granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the “Software”), to deal
          in the Software without restriction, including without limitation the
          rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          <br />
          &nbsp The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software. THE
          SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </textarea>
      </div>
    </div>
  );
};

export default DetailsBlock;
