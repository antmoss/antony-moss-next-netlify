import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import ProgressBar from "./ProgressBar";

const data = [
  { bgcolor: "#4ca96b", completed: 90, skill: "HTML" },
  { bgcolor: "#4ca96b", completed: 85, skill: "CSS" },
  { bgcolor: "#4ca96b", completed: 75, skill: "JAVASCRIPT" },
  { bgcolor: "#4ca96b", completed: 65, skill: "REACT" },
  { bgcolor: "#4ca96b", completed: 30, skill: "REACT NATIVE" },
  { bgcolor: "#4ca96b", completed: 95, skill: "A11Y" },
];

export default function Skills() {
  return (
    <Section grey id="skills">
      <div className="flex -m-8">
        <div className="w-7/12 p-8">
          <ul>
            {data.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
                skill={item.skill}
              />
            ))}
          </ul>
        </div>

        <div className="w-5/12 p-8 space-y-6">
          <h2 className="heading font-semi">My Skills</h2>

          <div>
            <p>
              I have been able to develop a range of skills that allows me to
              deliver high quality, professional and unique web solutions.
            </p>
            <p>
              Specialties: Craft CMS | React | React Native | JavaScript |
              Semantic markup | A11y | Atomic Design Methodology
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
