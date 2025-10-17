import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={process.env.PUBLIC_URL + school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            {school.url ? (
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="education-school-link"
              >
                <h5 className="education-text-school">{school.schoolName}</h5>
              </a>
            ) : (
              <h5 className="education-text-school">{school.schoolName}</h5>
            )}
            {school.formations.map((formation, index) => (
              <div key={index} className="education-text-details">
                <h5
                  className={
                    isDark
                      ? "dark-mode education-text-subHeader"
                      : "education-text-subHeader"
                  }
                >
                  {formation.subHeader}
                </h5>
                <p
                  className={`${
                    isDark ? "dark-mode" : ""
                  } education-text-duration`}
                >
                  {formation.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
