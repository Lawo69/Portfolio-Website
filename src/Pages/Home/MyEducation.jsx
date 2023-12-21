import React, { useState } from 'react';
import data from "../../data/index.json";

function MyEducation() {
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const toggleShowAllProjects = () => {
        setShowAllProjects(prevState => !prevState);
    };

    return (
        <section className="skills--section" id="MyEducation">
            <div className="portfolio--container">
                <p className="section--title">Education</p>
                <h2 className="skills--section--heading">Academic</h2>
            </div>
            <div className="skills--section--container">
                {data?.education?.map((item, index) => (
                    <div key={index} className="education--section--card">
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="portfolio--container edu">
                <h2 className="skills--section--heading">Certificates</h2>
            </div>
            <div className="skills--section--container">
            {data?.certificate?.slice(0, showAllProjects ? data?.certificate?.length : visibleProjects).map((item, index) => (
                    <div key={index} className="education--section--card">
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                        <div className="skills--section--tags">
                            <a href={item.link} target="_blank" className="text-sm portfolio--preview">verify</a>
                        </div>
                    </div>
                ))}
            </div>
            {data?.certificate?.length > visibleProjects && (
                <div className="portfolio--view-more">
                    <button onClick={toggleShowAllProjects} className="btn btn-primary">
                        {showAllProjects ? 'View Less' : 'View More'}
                    </button>
                </div>
            )}
        </section>
    )
}

export default MyEducation;