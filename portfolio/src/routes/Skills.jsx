import {useState, useEffect} from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("http://localhost:3000/api/skills");
      let data = await response.json();
      setSkills(data);
    }
    getSkills();
  }, []);

  return (
    <div id="main">
			<h1>My Skills</h1>
      <ul className="skill-list">
        {
          skills.map((skill) => (
            <div key={skill._id}>
              <li className="skill-item">
                <div className="skill-head">
                  <img className="skill-icon" src={`imgs/icons/${skill.skillIcon}`} alt={skill.skillName + " icon"} />
                  <p>{skill.skillName}</p>
                </div>
                <p className="examples">Examples: 
                  <ul>
                    {skill.skillExamples.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                  </ul>
                </p>
              </li>
            </div>
          ))
        }
      </ul>
    </div>
  );
}