import { Link } from "react-router-dom";
import "../css/Screens.scss";
import { useState } from "react";

type Props = {
  educations: {
    id: number;
    title: string;
    institutionLong: string;
    location: string;
    year: string;
    link: string;
  }[];
};

function Educations({ educations }: Props) {
  const display = [...educations].sort(
    (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
  );
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="section skills">
      {display.map((education) => (
        <a href={education.link} target="_blank" className="education-card">
          <li className="education-list-item">
            <i className="fa-regular fa-heading"></i>{" "}
            <span className="list-item-right">{education.title}</span>
          </li>
          <li className="education-list-item">
            <i className="fa-regular fa-graduation-cap"></i>{" "}
            <span className="list-item-right">{education.institutionLong}</span>
          </li>
          <li className="education-list-item">
            <i className="fa-regular fa-location-dot"></i>{" "}
            <span className="list-item-right">{education.location}</span>
          </li>
          <li className="education-list-item">
            <i className="fa-regular fa-calendar-check"></i>{" "}
            <span className="list-item-right">{education.year}</span>
          </li>
        </a>
      ))}
    </div>
  );
}

export default Educations;
