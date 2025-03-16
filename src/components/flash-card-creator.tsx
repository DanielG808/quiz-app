import { motion } from "framer-motion";

type FlashCardCreatorProps = {
  flipped: boolean;
};

export default function FlashCardCreator({ flipped }: FlashCardCreatorProps) {
  return (
    <motion.figure
      className="border-1 border-black/45 bg-white p-4 w-[600px] h-[325px] shadow-md relative flex items-center justify-center"
      initial={false}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <form className="absolute w-full h-full flex justify-center items-center backface-hidden">
        <input
          type="text"
          className="border-b border-black text-center focus:outline-none"
        />
      </form>
      <form className="absolute w-full h-full flex justify-center items-center backface-hidden rotate-y-180">
        <textarea className="border-b border-black text-center focus:outline-none " />
      </form>
    </motion.figure>
  );
}
