import CursorSVG from "./CursorSVG";

type CursorProps = {
  colour: string;
  x: number;
  y: number;
  message: string;
};

const Cursor = ({ colour, x, y, message }: CursorProps) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG colour={colour} />

      {/* MESSAGE */}
    </div>
  );
};

export default Cursor;
