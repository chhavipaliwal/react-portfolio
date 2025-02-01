import { Link } from "react-router-dom";
import "../css/Screens.scss";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type ProjectsProps = {
  projects: {
    id: number;
    title: string;
    images: string[];
    description: string;
    technologies: string;
    link: string;
    previewLink: string;
  }[];
};

function Project({ projects }: ProjectsProps) {
  const projectDir = "/projects";
  const displayProjects = projects.slice(0, 3);
  const itemAnimations = [
    {
      initial: { opacity: 0, x: -220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, x: 220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, x: -220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
  ];
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="projects home-projects" id="projects">
      <div className="section-header">
        <h2 className="topic-heading projects-heading">Projects</h2>
      </div>
      <div className="project-items">
        {displayProjects.map((project, index) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: index % 2 == 0 ? 220 : -220 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0 }}
              viewport={{
                once: true,
              }}
              className="project-item animation-transition"
              key={index}
            >
              <a
                href={project.previewLink}
                className="project-image-btn"
                target="_blank"
              >
                <ImageGallery
                  items={project.images.map((image) => ({
                    original: projectDir + "/" + image,
                  }))}
                  showNav={false}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay
                />
              </a>
              <div className="project-item-details">
                <h3 className="project-item-heading">{project.title}</h3>

                <p className="project-item-description">
                  {project.description}
                </p>
                <p className="project-item-technologies">
                  {project.technologies.split(", ").map((technology, index) => (
                    <span className="project-item-technology" key={index}>
                      {technology}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Link to="/projects" className="btn view-more-btn">
        View More
      </Link>
    </div>
  );
}

export default Project;
