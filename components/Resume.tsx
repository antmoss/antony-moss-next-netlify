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
    id: 4,
  },
  {
    role: "Software Developer",
    date: "2022",
    company: "Evoluted",
    companyUrl: "https://www.evoluted.net/",
    location: "Sheffield",
    summary:
      "Leading projects which involves scoping, building and supporting web applications. Using an atomic design methodology to create a modular Frontend.",
    id: 5,
  },
  {
    role: "Software Engineer II (Front End)",
    date: "2019",
    company: "Inviqa",
    companyUrl: "https://inviqa.com/",
    location: "Sheffield",
    summary:
      "As part of a team – I create responsive front-end web solutions using semantic HTML, CSS & JavaScript. Progressive enhancement, accessibility, usability and search engine optimization are my priorities.",
    id: 6,
  },
];

export default function Resume() {
  const [educationVisible, setEducationVisible] = useState<number>(0);
  const [sumaryVisible, setSumaryVisible] = useState<number>(0);

  const handleEducationToggle = (key: number) => {
    setSumaryVisible(sumaryVisible !== key ? key : 0);
  };

  const handleExperienceToggle = (key: number) => {
    setEducationVisible(educationVisible !== key ? key : 0);
  };

  return (
    <Section id="resume">
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl font-semi heading heading--full-line">
          Resume
        </h2>
      </div>

      <div className="flex -m-8">
        <div className="w-1/2 p-8 resume resume--left">
          <h3 className="text-xl font-display">
            <span>Education</span>
          </h3>
          <ul className="py-10 relative z-10">
            {EDUCATION.map(({ id, ...rest }) => (
              <ResumeEntry
                key={id}
                details={rest}
                id={id}
                toggle={handleEducationToggle}
                open={sumaryVisible === id}
              />
            ))}
          </ul>
        </div>

        <div className="w-1/2 p-8 resume resume--right">
          <h3 className="text-xl font-display">
            <span>EXPERIENCES</span>
          </h3>
          <ul className="py-10 relative z-10">
            {EXPERIENCES.map(({ id, ...rest }) => (
              <ResumeEntry
                experience
                key={id}
                details={rest}
                id={id}
                toggle={handleExperienceToggle}
                open={educationVisible === id}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
