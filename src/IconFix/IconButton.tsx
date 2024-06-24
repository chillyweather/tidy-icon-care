import { h } from "preact";

interface IconButtonProps {
  emoji: string;
}

const handleClick = () => {
  console.log("Button clicked");
};

const IconButton = ({ emoji }: IconButtonProps) => {
  return (
    <button
      onClick={handleClick}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      {emoji}
    </button>
  );
};

export default IconButton;
