import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
    flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi,I'M
            <span className="text-[#915eff]">Mohmed Hassan </span>
          </h1>
          <p>
          I am a Frontend Developer specializing in React.js and Next.js, with expertise in JavaScript and TypeScript. With over two years of experience, I build scalable web applications, focusing on performance, usability, and seamless user experiences. Passionate about problem-solving and continuous learning, I have worked on diverse projects, including SaaS platforms, e-commerce solutions, and CMS development
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#f1f1f1]
          flex justify-center items-start p-2">
              <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 mb-1 rounded-full bg-[#5e40a7]"
              />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
