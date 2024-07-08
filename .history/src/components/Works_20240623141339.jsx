import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '..constants';
import { fadeIn, textVariant } from '../utils/motions';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Portfolio.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px]'
        >

        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");