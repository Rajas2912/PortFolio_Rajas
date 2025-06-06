import React from "react";
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./MailboxButton.css";

const MailboxButton = () => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full flex items-center justify-center">      <div className="main">
        <button 
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} 
          className="center-icon"
        >
          <FiMail className="text-3xl" />
        </button>
        <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
          <defs>
            <path
              id="circle"
              d="M 100, 100
                 m -75, 0
                 a 75, 75 0 1, 0 150, 0
                 a 75, 75 0 1, 0 -150, 0"
            />
          </defs>
          <text width="400">
            <textPath
              alignmentBaseline="top"
              xlinkHref="#circle"
              className="text dark:fill-white"
            >
              • CONTACT ME • GET IN TOUCH • CONTACT • GET IN TOUCH •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default MailboxButton; 