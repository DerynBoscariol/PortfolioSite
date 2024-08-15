import {useState, useEffect} from "react";

export default function BackEnd() {
  const [projects, setBackEnd] = useState([]);

  useEffect(() => {
    const getBackEnd = async () => {
      let response = await fetch("http://localhost:3000/api/BackEndProjects");
      let data = await response.json();
      setBackEnd(data);
    }
    getBackEnd();
  }, []);

  return (
    <main id="main">
        <h4>Back-End Projects</h4>
        <ul className="project-list">
        {
          projects.map((project) => (
            <div key={project._id}>
              <li className="project-item">
                <h5>{project.projectName}</h5>
                <div className="project-info">
                  <img className="project-img" src={`imgs/${project.image}`} alt={project.projectName} />
                  <div className="info-text">
                    <p>{project.projectDescription}</p>
                    <p>Made: {project.projectDate}</p>
                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                    <p>Languages:
                      <ul>
                        {project.projectLangs.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </p>
                    {project.projectDatabase && <p>Environments/Frameworks:
                      <ul>
                        {project.projectFrameworks.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </p>}
                    {project.projectDatabase && <p>Database: {project.projectDatabase}</p>}
                    {project.collaboration && <p>This project was a collaboration</p>}
                  </div>
                </div>
              </li>
            </div>
          ))
          }
        </ul>
    </main>
  );
}