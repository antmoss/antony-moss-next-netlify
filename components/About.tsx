import React from "react";
import Image from "next/image";
import profilePic from "../asset/profile.jpg";
import Section from "./Section";
import Button from "./Button";

export default function About() {
  return (
    <Section id="about">
      <div className="flex -m-4">
        <div className="md:w-1/3 p-4">
          <Image
            src={profilePic}
            alt="Antony Moss drinking tea"
            layout="responsive"
          />
        </div>
        <div className="md:w-2/3 p-4 space-y-6">
          <h2 className="heading font-semi">About Me</h2>

          <div>
            <p>
              I'm a Web Designer and Developer living and working in Sheffield.
              I have a degree in Web Design and have been working professionally
              as a Front-end Developer for over 5 years.
            </p>
            <p>
              As you’d expect an
              <abbr title="Front end">FE</abbr>
              <abbr title="Developer">Dev</abbr>
              to be, I'm experienced with
              <abbr title="Hypertext Markup Language">HTML</abbr>,
              <abbr title="Cascading Style Sheet">CSS</abbr> (using Sass) and
              JavaScript, including React and Typescript. They make up my core
              skill set, but I'm also comfortable with version control such as
              Git.
            </p>
          </div>

          <div className="flex -m-4">
            <div className="p-4 flex-1">
              <Button url="https://twitter.com/antonymoss_web" name="Twitter" />
            </div>
            <div className="p-4 flex-1">
              <Button
                url="https://www.linkedin.com/in/antony-moss/"
                name="Linkedin"
              />
            </div>
            <div className="p-4 flex-1">
              <Button url="mailto:antonymoss.web@gmail.com" name="Contact" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
