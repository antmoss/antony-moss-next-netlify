import React from "react";
import { CSSProperties } from "styled-components";

interface ProgressBarProps {
  bgcolor: string;
  completed: number;
  skill: string;
}

export default function ProgressBar({
  bgcolor,
  completed,
  skill,
}: ProgressBarProps) {
  const containerStyles = {
    height: 28,
    width: "100%",
    backgroundColor: "#ddd",
    overflow: "hidden",
    marginTop: 15,
  };

  const fillerStyles: CSSProperties = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    textAlign: "right",
    transition: "width 1s ease-in-out",
    position: "relative",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const textStyles: CSSProperties = {
    fontWeight: 600,
    fontSize: 14,
    position: "absolute",
    backgroundColor: "#6cbd86",
    padding: 10,
    color: "#fff",
    left: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <li style={containerStyles}>
      <div style={fillerStyles}>
        <span style={textStyles}>{skill}</span>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </li>
  );
}
