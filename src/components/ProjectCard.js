import React from 'react';

const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard_wrapper">
                <a href={deployed_url} target="_blank" rel="noopener noreferrer" >
                    <img src={image} alt={name} className="projectCard_image" />
                </a>
                <div className="projectCard__title">
                    <i className="fab fa-github"></i>
                    {name}
                </div>
            </figure>

        </div >
    );
};

export default ProjectCard;
