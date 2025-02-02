import Card from "./ui/Card";
import SubTitle from "./ui/SubTitle";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const StoryHero = () => {
  const variants = {
    init: {},
    animate: {
      transition: { staggerChildren: 0.5, delayChidren: 0.3 },
    },
  };

  const boxVariant = {
    init: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className="w-screen p-10"
      variants={variants}
      initial="init"
      whileInView={"animate"}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="w-full max-w-screen-lg m-auto ">
        <motion.div className="w-full" variants={boxVariant}>
          <Card />
        </motion.div>
        <motion.div className="w-full" variants={boxVariant}>
          <Title />
        </motion.div>
        <motion.div className="w-full" variants={boxVariant}>
          <SubTitle />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StoryHero;
