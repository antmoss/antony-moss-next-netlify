import React from "react";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  grey?: boolean;
  id: string;
}

export default function Section({ children, grey, id }: SectionProps) {
  return (
    <div className={`py-24 ${grey ? "bg-grey" : ""}`} id={id}>
      <div className="container">{children}</div>
    </div>
  );
}
