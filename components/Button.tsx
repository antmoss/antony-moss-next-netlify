import {
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
  FaArrowRight,
  FaMailchimp,
} from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  url?: string;
  classes?: string;
  className?: string;
  outline?: boolean;
}

function Icon(name: string) {
  if (name === "Twitter") {
    return <FaTwitter size={25} />;
  }
  if (name === "Linkedin") {
    return <FaLinkedinIn size={25} />;
  }
  if (name === "Contact") {
    return <FaEnvelope size={25} />;
  }
  if (name === "Find out more") {
    return <FaArrowRight size={25} />;
  }
  if (name === "Send message") {
    return <FaMailchimp size={25} />;
  }
}

export default function Button({
  name,
  url,
  classes,
  className,
  outline,
}: ButtonProps) {
  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <Link href={url} passHref={true}>
      <a className={`${classNames} ${classes}`}>
        <span>{name}</span>
        <span>{Icon(name)}</span>
      </a>
    </Link>
  );
}
