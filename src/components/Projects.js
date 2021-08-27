import React, { useState } from 'react'
import data_projects from '../data/projects_data'
import ProjectCard from './ProjectCard'

const Projects=() =>{
    const [projects, setProjects] = useState(data_projects)


    const handleFilterCategory=(name)=>{
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects_navbar">
                <div className="navbar_item"onClick={()=> setProjects(data_projects)}>All</div>
                <div className="navbar_item"onClick={()=>handleFilterCategory('react')}>React</div>
                <div className="navbar_item"onClick={()=>handleFilterCategory('bootstrap')}>Bootstrap</div>
                <div className="navbar_item"onClick={()=>handleFilterCategory('javascript')}>Javascript</div>
            </div>
            <div className="row my-4 py-2 text-center">
            {
                projects.map(project=>
                    <ProjectCard key={ProjectCard.name} project={project} />
                    )
            }
            </div>
        </div>
    )
}

export default Projects
