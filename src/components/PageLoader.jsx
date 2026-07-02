import { motion } from 'framer-motion';
import KineticTextLoader from './ui/kinetic-text-loader';

const PageLoader = () => (
  <div className="flex min-h-[60vh] w-full items-center justify-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
      <KineticTextLoader text="Loading" />
    </motion.div>
  </div>
);

export default PageLoader;
