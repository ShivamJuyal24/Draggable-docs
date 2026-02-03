import { FaFileAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { MdDownloadForOffline } from "react-icons/md";

function Card({ desc , size, dragConstraints }) { 
  return (
    <motion.div 
        drag
  dragConstraints={dragConstraints}
  dragElastic={0.2}
  dragMomentum={false}
  whileTap={{ scale: 1.05 }}
      className=" cursor-grab active:cursor-grabbing relative bg-zinc-900/90 w-60 h-72 rounded-[50px] p-5 text-white overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold">
        {desc}
      </p>

      <div className="absolute bottom-0 left-0 w-full px-8 py-3">
        <div className="flex justify-between items-center mb-5">
          <h3>{size}</h3>
          <MdDownloadForOffline />
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
