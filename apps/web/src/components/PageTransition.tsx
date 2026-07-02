import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Location } from "react-router-dom";

const ROUTE_ORDER = ["/", "/order", "/cart", "/checkout", "/payment", "/confirmation"];

function getIndex(pathname: string) {
  const idx = ROUTE_ORDER.indexOf(pathname);
  return idx === -1 ? 0 : idx;
}

const DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1];

interface Props {
  children: React.ReactNode;
  location: Location;
}

export default function PageTransition({ children, location }: Props) {
  const prevPathnameRef = useRef(location.pathname);
  const directionRef = useRef(1);

  if (prevPathnameRef.current !== location.pathname) {
    directionRef.current =
      getIndex(location.pathname) >= getIndex(prevPathnameRef.current) ? 1 : -1;
    prevPathnameRef.current = location.pathname;
  }

  const direction = directionRef.current;

  return (
    <AnimatePresence mode="popLayout" custom={direction}>
      <motion.div
        key={location.pathname}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={{
          enter: (dir: number) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
          center: { x: 0, opacity: 1 },
          exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
        }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
