import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  skills: {
    id: number;
    title: string;
    percentage: number;
    image: string;
    color: string;
    background: string;
    isFontAwesome: boolean;
  }[];
  educations: {
    id: number;
    title: string;
    institutionShort: string;
    location: string;
    year: string;
  }[];
  certifications: {
    id: number;
    title: string;
    priority: number;
    institution: string;
  }[];
};

const skillsAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
      delay: index * 0.1,
    },
  }),
};

const educationAnimation = {
  initial: {
    opacity: 0,
    x: 120,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      delay: 0.1 * index,
    },
  }),
};

const certificateAnimation = {
  initial: {
    opacity: 0,
    x: 120,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      delay: 0.2 * index,
    },
  }),
};

function Skills({ skills, educations, certifications }: Props) {
  const [ref, isInView] = useInView();

  const displaySkills = [...skills]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);
  const displayEducation = educations.slice(0, 3);
  const displayCertification = [...certifications]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <div ref={ref} className="section skills" id="skills">
      <h2 className="topic-heading skills-heading">My Advantages</h2>
      <div className="skills-content">
        <div className="skills-content-left">
          {displaySkills.map((skill, index) => (
            <>
              <motion.div
                variants={skillsAnimation}
                initial="initial"
                whileInView="animate"
                className="skills-card-left animation-transition"
                style={{ background: skill.background }}
                custom={index}
                viewport={{
                  once: true,
                }}
                key={index}
              >
                <span
                  style={{ background: skill.background, color: skill.color }}
                  className="skill-title"
                >
                  {skill.title}
                </span>

                {skill.isFontAwesome ? (
                  <i className={skill.image} style={{ color: skill.color }}></i>
                ) : (
                  <img src={`/skills/${skill.image}`} className="skill-image" />
                )}
                <div className="progress-bar">
                  <div
                    className="progress-track"
                    style={{
                      width: `${skill.percentage}%`,
                      background: skill.color,
                    }}
                  ></div>
                </div>
                <div className="percentage">{skill.percentage}%</div>
              </motion.div>
            </>
          ))}
        </div>
        <div className="skills-divider"></div>
        <div className="skills-content-right">
          <div className="education-card education-crd">
            {displayEducation.map((education, index) => (
              <motion.div
                variants={educationAnimation}
                initial="initial"
                key={index}
                custom={index}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="education-pre animation-transition"
              >
                <h3>{education.title}</h3>
                <p>
                  {education.institutionShort} ({education.year})
                </p>
              </motion.div>
            ))}
          </div>

          <div className="education-card certificate-crd ">
            {displayCertification.map((certification, index) => (
              <motion.div
                variants={certificateAnimation}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={index}
                viewport={{
                  once: true,
                }}
                className="education-pre animation-transition"
              >
                <h3>{certification.title}</h3>
                <p>{certification.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/sce" className="btn view-more-btn">
        View More
      </Link>
    </div>
  );
}

export default Skills;
