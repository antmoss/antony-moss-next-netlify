import { FaTwitter, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

interface ButtonProps {
  name: string;
  url: string;
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
}

export default function Button({ name, url }: ButtonProps) {
  return (
    <Link href={url} passHref={true}>
      <button className="btn">
        <span>{name}</span>
        <span>{Icon(name)}</span>
      </button>
    </Link>
  );
}
