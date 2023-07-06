import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const SericesCard =({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right" ,"spring",0.5*index ,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card"
      >
          <div 
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
          items-center flex-col "
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
            />
            <h3 className="text-[15px] font-bold text-white text-center">
              {title}
            </h3>

          </div>
      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,0.1)}
      className="mt-5 text-secondey  text-[17px] max-w-3xl leading[30px]"
      >
        Hi,I am Mohamed Hassam software Enginner ,have bacholer degree
        in Computer Science and Engineering. I am currently studying React and
        NodeJS(javaScript). I hope my project will be able to provide a better experience to others and to me!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <SericesCard key={service.title} index={index}
        {...service}/>
      ))}
      </div>
          </>
  );
};

export default SectionWrapper(About,"about");
