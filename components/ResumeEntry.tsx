import React from "react";

interface ResumeEntryProps {
  details: {
    abbr?: string;
    date: string;
    grade?: string;
    course?: string;
    role?: string;
    company?: string;
    location: string;
    summary?: string;
  };
  experience?: boolean;
  open: boolean;
  id: number;
  toggle: (key: number) => void;
}

export default function ResumeEntry({
  toggle,
  open,
  details,
  id,
  experience,
}: ResumeEntryProps) {
  return (
    <li className="relative cursor-pointer">
      <button
        className={`relative border-greyMid border text-left w-full resume__item-inner ${
          id === 1 || id === 4 ? "" : "mt-4"
        }`}
        onClick={() => toggle(id)}
      >
        <div className="resume__details">
          <h4 className="text-secondary font-semi text-xl resume__text">
            {details.abbr && <abbr title={details.abbr}></abbr>}
            {experience ? details.role : details.course}
          </h4>

          <span className="relative z-10 text-white">{details.date}</span>
          <p className="resume__text">{details.location}</p>
          <p className={`${open ? "" : "hidden"} resume__text`}>
            <span>
              {experience ? details.summary : `Grade attained ${details.grade}`}
            </span>
          </p>
        </div>
      </button>
    </li>
  );
}
