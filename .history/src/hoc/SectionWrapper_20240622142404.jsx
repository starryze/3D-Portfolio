import { motion, stagger } from 'framer-motion';

import { styles } from '..styles';
import { staggerContainer } from '../utils/motions';
import { func } from 'three/examples/jsm/nodes/Nodes.js';

const SectionWrapper = (Component, idName) => 
function HOC(){
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once:true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative`}
    >
        <Component></Component>
    </motion.section>
  )
}

export default SectionWrapper