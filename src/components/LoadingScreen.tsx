import { motion } from 'framer-motion';
import logoIcon from '../assets/icons/icon.svg';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background-default flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          className="w-10 h-10 mx-auto mb-6 rounded-2xl  flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
         <img src={logoIcon} alt="Saral" className="w-10 h-10" />
        </motion.div>

        <motion.h2
          className="text-2xl font-syne font-bold tracking-wider text-purple-400 uppercase mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Saral
        </motion.h2>

        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

