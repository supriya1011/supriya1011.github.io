import React from "react";

const Frontend = () => {
  return (
    <div className="skills-card-img" >
      <h3 className="skills-card-name">Frontend</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-html5 skills_icon"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxl-css3 skills_icon"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxl-javascript skills_icon"></i>

            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-react skills_icon"></i>

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxl-redux skills_icon"></i>

            <div>
              <h3 className="skills_name">Redux</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxl-typescript skills_icon"></i>

            <div>
              <h3 className="skills_name">TypeScript</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;