import React from "react";

import sendicon from "../styles/images/send.svg";
import attachicon from "../styles/images/attachicon.svg";

import "../styles/chatwindow.css";

export default function Chatwin({ channelName }) {
  return (
    <div id="cw-cnt">
      <div id="cn-cnt" className="fs-6 text-start py-3 px-3 align-middle">
        {channelName}
      </div>
      <div id="msg-cnt"></div>
      <div id="type-area-cnt" className="p-1 m-3">
        <textarea
          className="p-1"
          name="msg-textarea"
          id="msg-textarea"
          placeholder="Type here"
          rows="3"
        ></textarea>
        <div id="msg-option-cnt">
          <button className="btn py-0 px-1 mx-1">
            <img src={`${sendicon}`} alt="" />
          </button>
          <button className="btn py-0 px-1 mx-1">
            <img src={`${attachicon}`} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
