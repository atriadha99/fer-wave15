const Svg = ({ isOpen, d, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Path untuk icon hamburger */}
      <path
        className={!isOpen ? "block" : "hidden"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={d}
      />
    </svg>
  );
};

export default Svg;
