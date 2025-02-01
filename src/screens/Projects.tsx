import { Link } from "react-router-dom";
import "../css/Screens.scss";
import ImageGallery from "react-image-gallery";
import { useState, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../components/CardSkeleton";
import { Helmet } from "react-helmet";

type ProjectsProps = {
  projects: {
    id: number;
    title: string;
    images: string[];
    description: string;
    priority: number;
    technologies: string;
    link: string;
    startDate: string;
    endDate: string;
    previewLink: string;
  }[];
};

function Project({ projects }: ProjectsProps) {
  const projectDir = "/projects";
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  // sort by priority and start date
  projects.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    else if (a.priority < b.priority) return -1;
    else {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);
      if (aDate > bDate) return -1;
      else if (aDate < bDate) return 1;
      else return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>Projects - Chhavi Paliwal</title>
      </Helmet>
      <SkeletonTheme baseColor="var(--lighter)" highlightColor="var(--faded)">
        <div className="section projects" id="projects">
          <div className="section-header">
            <Link to="/#projects" className="btn btn-back">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <input
              className="input"
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="items">
            {isLoading && <CardSkeleton cards={6} />}
            {projects
              .filter((project) =>
                project.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((project) => (
                <>
                  {!isLoading && (
                    <div className="item" key={project.id}>
                      <a
                        href={project.previewLink}
                        className="image-btn"
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
                      <div className="item-details">
                        <div>
                          <h3 className="item-heading">{project.title}</h3>
                          <p className="item-description">
                            {project.technologies}
                          </p>
                        </div>
                      </div>
                      <a
                        className="item-link"
                        href={project.link}
                        target="_blank"
                      >
                        <i className="fa-duotone fa-code-compare"></i>
                      </a>
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

export default Project;
