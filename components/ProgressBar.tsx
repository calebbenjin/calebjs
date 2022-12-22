import { motion, useScroll, useSpring } from "framer-motion"

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })



  return (
    <>
      <motion.div style={{scaleX}} className="progress-bar" />
    </>
  )
}

export default ProgressBar