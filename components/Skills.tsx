import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import ProgressBar from "./ProgressBar";

const data = [
    { bgcolor: "#4ca96b", completed: 80, skill: "React" },
    { bgcolor: "#4ca96b", completed: 60, skill: "React Native" },
    { bgcolor: "#4ca96b", completed: 85, skill: "Next" },
    { bgcolor: "#4ca96b", completed: 75, skill: "TypeScript" },
    { bgcolor: "#4ca96b", completed: 65, skill: "GraphQL" },
    { bgcolor: "#4ca96b", completed: 95, skill: "A11Y" },
];

export default function Skills() {
    return (
        <Section grey id="skills">
            <div className="flex -m-8">
                <div className="w-7/12 p-8">
                    <ul>
                        {data.map((item, idx) => {
                            return (
                                <ProgressBar
                                    key={idx}
                                    bgcolor={item.bgcolor}
                                    completed={0}
                                    skill={item.skill}
                                />
                            )
                        }
                        )}
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
                            Specialties: React | React Native | JavaScript | TypeScript | Next.js
                            Semantic markup | A11y | Atomic Design Methodology
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
