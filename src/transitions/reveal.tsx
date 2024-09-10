import {useEffect, useRef} from "react";
import {motion,useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
}

export const Reveal = ({children}: Props) =>{
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls=useAnimation();
    // const Slidecontrol=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            // Slidecontrol.start("visible");
        }
    },[isInView])

    return(
        <div ref={ref} style={{position:"relative", overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0, y:105},
                    visible:{opacity:1, y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1, delay: 0.1}}>
                {children}
            </motion.div>
            {/* <motion.div
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
                    background: "#02EEBB",
                    zIndex: 20,
                }}></motion.div> */}
        </div>
    )
}