import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motions'; 

const Contact = () => {

  const [form, setForm] = useState({
    
  })


  return (
    <div>Contact</div>
  )
}

export default Contact