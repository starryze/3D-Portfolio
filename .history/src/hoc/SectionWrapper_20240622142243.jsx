import { motion } from 'framer-motion';

import { styles } from '..styles';
import { staggerContainer } from '../utils/motions';
import { func } from 'three/examples/jsm/nodes/Nodes.js';

const SectionWrapper = (Component, idName) => 
function HOC(){
  return (
    <motion.section
        variants={}
    >
        <Component></Component>
    </motion.section>
  )
}

export default SectionWrapper