import { useState,useRef } from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"

import{styles} from '../styles'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();

  const [form ,setForm] = useState({
    name:'',
    email: '',
    message: '',
  })
  const [loading ,setLoading] =useState(false);
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left","tween", 0.2 ,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Name
              </span>
              <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg 
              outlined-none border-none font-medium"
              >
              
              </input>

            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Email
              </span>
              <input 
              type="email"
              name="email"
              value={form.e}
              onChange={handleChange}
              placeholder="what is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg 
              outlined-none border-none font-medium"
              >
              
              </input>

            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message
              </span>
              <textarea 
              rows="7"
               name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg 
              outlined-none border-none font-medium"
              >
              
              </textarea>

            </label>

            <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none shadow-md shadow-primary w-fit
             text-white font-bold rounded-xl"
            >
              {loading ? "sending..." : "Send"}
            </button>
          </form>
      </motion.div>

      <motion.div variants={slideIn("right","tween", 0.2 ,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")