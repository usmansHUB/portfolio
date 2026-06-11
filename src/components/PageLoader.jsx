import { motion } from 'framer-motion';

const PageLoader = () => (
  <div className="flex min-h-[60vh] w-full items-center justify-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent/15 border-t-accent" />
      <p className="animate-pulse text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Loading...
      </p>
    </motion.div>
  </div>
);

export default PageLoader;
