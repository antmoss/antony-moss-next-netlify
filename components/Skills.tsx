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

const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0
        && bounding.left >= 0
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export default function Skills() {
    const [completed, setCompleted] = useState(0);
    const ulRef = useRef<HTMLUListElement>(null);
    // const lis: HTMLLIElement[] = [...ulRef.current.querySelectorAll('li')];

    const barChart = () => {
        if (isInViewport(ulRef.current)) {
            // lis.forEach((li, index) => {
            //     setTimeout(() => {
            //         const eachBar: HTMLLIElement = li;
            //         console.log(eachBar)
            //         // eachBar.style.width = li.dataset.percent;
            //     }, index * 400);
            // });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', barChart);
        return () => {
            window.removeEventListener('scroll', barChart);
        }
    }, [])

    return (
        <Section grey id="skills">
            <div className="flex -m-8">
                <div className="w-7/12 p-8">
                    <ul ref={ulRef}>
                        {data.map((item, idx) => {
                            console.log(idx);
                            console.log(data[idx].completed);
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
