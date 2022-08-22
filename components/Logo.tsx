import React from "react";
import Image from "next/image";
import logo from "../asset/antmoss.svg";

export default function Logo() {
  return <Image src={logo} height={70} width={70} alt="Antony Moss logo" />;
}
