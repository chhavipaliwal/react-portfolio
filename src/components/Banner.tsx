import { useRef } from "react";
import Popup from "reactjs-popup";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  abouts: {
    id: number;
    name: string;
    image: string;
    tagline: string;
    professions: string[];
  }[];
};

function Banner({ abouts }: Props) {
  const ref = useRef(null);

  return (
    <>
      {abouts.map((about) => (
        <div className="banner" ref={ref} key={about.id}>
          <div className="banner-top">
            <div className="banner-1">
              <div className="textarea">
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="text-1 animation-transition"
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="text-2 animation-transition"
                >
                  {about.name}
                </motion.h1>
                <motion.h4
                  variants={{
                    hidden: { opacity: 0, x: -225 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="text-3 animation-transition"
                >
                  I'm a{" "}
                  <span className="typing">
                    <TypeAnimation
                      sequence={[
                        "Developer",
                        1000,
                        "Designer",
                        1000,
                        "Programmer",
                        1000,
                        "Machine Learner",
                        1000,
                        "Freelancer",
                      ]}
                      speed={1}
                      repeat={Infinity}
                    />
                  </span>
                </motion.h4>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="text-4 animation-transition"
                >
                  {about.tagline}
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -375 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="btns animation-transition"
                >
                  <Popup
                    trigger={
                      <button className="btn btn-primary">Hire Me</button>
                    }
                  >
                    <div className="popup">
                      <div className="popup-heading">
                        <h2>Hire Me</h2>
                      </div>
                      <form
                        action="https://formsubmit.co/0594c436b1545a8c5681447979831a68"
                        method="POST"
                      >
                        <div className="form-group">
                          <label htmlFor="name" className="label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message" className="label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Let's create together..."
                            rows={3}
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                        <input type="hidden" name="_next" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                          type="hidden"
                          name="_autoresponse"
                          value="Thank you for considering my application. I'm excited about the opportunity and look forward to discussing my qualifications further."
                        />
                        <input type="hidden" name="_template" value="box" />
                      </form>
                    </div>
                  </Popup>
                  <a href="#specilize" className="btn">
                    Explore!
                  </a>
                </motion.div>
              </div>
              <div className="avatar">
                <motion.img
                  variants={{
                    hidden: { opacity: 0, x: 375 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className="avatar-img animation-transition"
                  src={about.image}
                  alt={about.name}
                />
              </div>
            </div>
          </div>
          <div className="banner-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fillOpacity="1"
                d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,154.7C672,117,768,75,864,64C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default Banner;
