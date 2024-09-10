import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SlideProps {
    children: React.ReactNode;
}

export const Slide = ({ children }: SlideProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls=useAnimation();
    const Slidecontrol = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            Slidecontrol.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{position:"relative", overflow:"hidden"}}>
            <motion.div>
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden:{left: 0},
                    visible:{left:"100%"},
                }}
                initial="hidden"
                animate={Slidecontrol}
                transition={{duration: 0.5, ease:"easeIn"}}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#00CA87",
                    zIndex: 20,
                }}></motion.div>
        </div>
    );
};
