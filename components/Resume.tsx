import React, { useState } from "react";
import Section from "./Section";
import ResumeEntry from "./ResumeEntry";

const EDUCATION = [
  {
    course: "FdA Web Design",
    abbr: "Foundation degree of arts",
    date: "2018",
    location: "Teesside University",
    grade: "Distinction",
    id: 1,
  },
  {
    course: "IT User Skills (ITQ)",
    abbr: "IT User Skills",
    date: "2018",
    location: "Wakefield College",
    grade: "Level 2",
    id: 2,
  },
  {
    course: "Art & Design",
    date: "2002",
    location: "Cleveland College of Art & Design",
    grade: "BC",
    id: 3,
  },
];

const EXPERIENCES = [
  {
    role: "React Developer",
    date: "Present",
    company: "Deeper Than Blue",
    companyUrl: "https://www.deeperthanblue.co.uk/",
    location: "Sheffield",
    summary: "Developing a React Native App for an eCommerce client",
  },
  {
    role: "Software Developer",
    date: "2022",
    company: "Evoluted",
    companyUrl: "https://www.evoluted.net/",
    location: "Sheffield",
    summary:
      "Leading projects which involves scoping, building and supporting web applications. Using an atomic design methodology to create a modular Frontend.",
  },
  {
    role: "Software Engineer II (Front End)",
    date: "2019",
    company: "Inviqa",
    companyUrl: "https://inviqa.com/",
    location: "Sheffield",
    summary:
      "As part of a team – I create responsive front-end web solutions using semantic HTML, CSS & JavaScript. Progressive enhancement, accessibility, usability and search engine optimization are my priorities.",
  },
];

export default function Resume() {
  const [sumaryVisible, setSumaryVisible] = useState(false);

  function handleButtonPress() {
    setSumaryVisible(!sumaryVisible);
  }

  return (
    <Section id="resume">
      <div className="flex justify-center mb-10">
        <h2 className="font-semibold text-2xl heading heading--full-line">
          Resume
        </h2>
      </div>

      <div className="flex">
        <div className="w-1/2 resume">
          <h3>
            <span>Education</span>
          </h3>
          <ul className="py-10 relative z-10">
            {EDUCATION.map((each, index) => (
              <ResumeEntry
                key={each.id}
                details={each}
                onToggle={handleButtonPress}
              />
            ))}
          </ul>
        </div>
        <div className="w-1/2"></div>
      </div>
    </Section>
  );
}
