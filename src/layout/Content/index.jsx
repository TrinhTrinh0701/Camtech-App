import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

function Content() {
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
export default Content;
