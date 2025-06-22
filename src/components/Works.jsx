import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { github } from "../assets";
import eye from "../assets/tech/eye.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const isVideo = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

const ProjectCard = ({ 
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  livePrev
}) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const handleEyeClick = (e) => {
    e.preventDefault();
    if (livePrev) {
      window.open(livePrev, "_blank");
    } else {
      setIsMediaOpen(true);
    }
  };

  const renderMediaPreview = () => {
    if (isVideo(image)) {
      return (
        <video 
          src={image} 
          autoPlay 
          loop 
          playsInline 
          className="pointer-events-none mx-auto h-full w-full object-cover object-top"
          muted
        />
      );
    } else {
      return (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-full sm:w-[360px]" // Consistent width
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl h-full flex flex-col" // Added flex and h-full
      >
        <div className='relative w-full h-[230px] overflow-hidden rounded-xl flex-shrink-0'>
          <a 
            href={livePrev} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='z-10 absolute w-full h-full'
          >
            {renderMediaPreview()}
          </a>

          <div className='absolute flex justify-end m-3 card-img_hover z-20 w-[24%] h-auto inset-x-[70%] gap-4'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer aspect-square'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={handleEyeClick}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer aspect-square'
            >
              <img
                src={eye}
                alt='preview'
                className='w-8 object-contain'
              />
            </div>
          </div>
        </div>
        
        <div className='mt-5 flex-grow'> {/* Added flex-grow for equal height */}
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p> {/* Added line-clamp for consistent description height */}
        </div>
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

      {/* Media Popup Overlay */}
      {isMediaOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsMediaOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsMediaOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-50"
            >
              ×
            </button>
            <div className="overflow-hidden rounded-lg">
              {isVideo(image) ? (
                <video 
                  src={image} 
                  autoPlay 
                  loop 
                  controls 
                  className="w-full h-auto max-h-[80vh]"
                  muted
                />
              ) : (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'> {/* Changed to grid layout */}
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');