import Card from "./Card";
import { useRef } from "react";

function Foreground() {
  const data = [
    { desc: "Sample document 1", size: ".5mb" },
    { desc: "Sample document 2", size: ".4mb" },
    { desc: "Sample document 3", size: ".8mb" },
    { desc: "Sample document 4", size: "4mb" },
  ];

  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full px-5 py-5 flex gap-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card
          key={index}
          desc={item.desc}
          size={item.size}
          dragConstraints={containerRef}
        />
      ))}
    </div>
  );
}

export default Foreground;
