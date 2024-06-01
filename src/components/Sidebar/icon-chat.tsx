import React from "react";

interface IconChatProps {}

const IconChat = ({}: IconChatProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="16px"
      width="16px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 58 58"
      xmlSpace="preserve">
      <g>
        <path
          style={{ fill: "#88C057" }}
          d="M53,7H5c-2.722,0-5,2.277-5,5v31c0,2.723,2.278,5,5,5h15l9,10l9-10h15c2.722,0,5-2.277,5-5V12   C58,9.277,55.722,7,53,7z"
        />
        <path
          style={{ fill: "#659C35" }}
          d="M51,7V3.793C51,1.728,49.272,0,47.207,0H10.793C8.728,0,7,1.728,7,3.793V7H51z"
        />
        <circle style={{ fill: "#FFFFFF" }} cx={16} cy="27.985" r={3} />
        <circle style={{ fill: "#FFFFFF" }} cx={29} cy="27.985" r={3} />
        <circle style={{ fill: "#FFFFFF" }} cx={42} cy="27.985" r={3} />
      </g>
    </svg>
  );
};

export default IconChat;
