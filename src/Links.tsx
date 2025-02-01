import { Link } from "react-router-dom";
import "./css/Links.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

type Props = {
  links: {
    id: number;
    title: string;
    icon: string;
    link: string;
    color: string;
    featured: number;
  }[];
};

const Links = ({ links }: Props) => {
  const display = [...links].sort((a, b) => a.title.localeCompare(b.title));
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Links - Chhavi Paliwal</title>
      </Helmet>
      <div className="container links">
        <div className="container-middle">
          <div className="section-header">
            <Link to="/" className="btn btn-back">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <input
              className="input"
              type="text"
              placeholder="Search Links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="card-group">
            <div className="card-group-title">
              <h3>Featured</h3>
            </div>
            {display
              .filter((link) =>
                link.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((link, index) => {
                if (link.featured == 1) {
                  return (
                    <a
                      href={link.link}
                      target="_BLANK"
                      className="card card-blog"
                      key={index}
                    >
                      <div className="card-img">
                        <i className={link.icon}></i>
                      </div>
                      <div className="card-title">
                        <h4>{link.title}</h4>
                      </div>
                      <div className="card-share">
                        <i className="fa-light fa-share-nodes"></i>
                      </div>
                    </a>
                  );
                }
              })}
          </div>
          <div className="card-group">
            <div className="card-group-title">
              <h3>Social</h3>
            </div>
            {display
              .filter((link) =>
                link.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((link, index) => {
                if (link.featured == 0) {
                  return (
                    <a
                      href={link.link}
                      target="_BLANK"
                      className="card card-blog"
                      key={index}
                    >
                      <div className="card-img">
                        <i className={link.icon}></i>
                      </div>
                      <div className="card-title">
                        <h4>{link.title}</h4>
                      </div>
                      <div className="card-share">
                        <i className="fa-light fa-share-nodes"></i>
                      </div>
                    </a>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
