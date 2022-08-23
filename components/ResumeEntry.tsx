import React from "react";

interface ResumeEntryProps {
  details: [];
  onToggle: Function;
}

export default function ResumeEntry({ details, onToggle }: ResumeEntryProps) {
  return (
    <li className="relative cursor-pointer">
      <button
        className={`${
          sumaryVisible ? "js-expanded" : ""
        } relative border-grey border text-left`}
        onClick={onToggle}
      >
        <div className="resume__details">
          <h4 className="text-secondary font-semi text-xl resume__text">
            {details.abbr && <abbr title={details.abbr}></abbr>}
            {details.course}
          </h4>
          <span className="relative z-10 text-white">{details.date}</span>
          <p className="resume__text">{details.location}</p>
          <p className="">
            <span className="">Grade attained: {details.grade}</span>
          </p>
        </div>
      </button>
    </li>
  );
}
