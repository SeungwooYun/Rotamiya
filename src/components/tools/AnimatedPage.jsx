import { motion } from "framer-motion";

const animiations = {
    initial: { opacity: 0, x: 70 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -70 },
}


const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animiations}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;