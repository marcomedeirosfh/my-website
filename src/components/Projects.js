import React from "react"

import github from "../assets/github.png"

import githubExplorer from '../assets/github-explorer.png'
import todoList from '../assets/todo-list.png'

// Add details and filter by technology functionality

export default function Projects() {
  return (
    <section className="projects" id="projects">
        <h2>Projects</h2>
            <div className="projects-container" id="projects" >
                <div className="project">
                    <img src={githubExplorer} alt="" srcset="" />

                    <h3>
                        <a href="https://confident-noether-0c8bcf.netlify.app/" target="_blank" rel="noreferrer">
                            Github Explorer - React JS  |  Netlify  
                        </a>
                    </h3>

                    <a href="https://github.com/marcomedeirosfh/github-explorer" target="_blank" rel="noreferrer">
                        <img className="github-icon" src={github} alt="github" />
                    </a>

                    <p>
                        A simple project to search repositories on Github by consuming its API.
                    </p>
                    <p>
                        Technologies: React JS, Javascript, HTML, CSS.
                    </p>
                </div>
                <div className="project">
                    <img src={todoList} alt="" srcset="" />
                    <h3>
                        <a href="https://frosty-banach-ebfd09.netlify.app/" target="_blank" rel="noreferrer">
                            ToDo List - React JS  |  Netlify    
                        </a>
                    </h3>

                    <a href="https://github.com/marcomedeirosfh/todo-list" target="_blank" rel="noreferrer">
                        <img className="github-icon" src={github} alt="github" />
                    </a>

                    <p>
                        A simple Todos list project.
                    </p>
                    <p>
                        Technologies: React JS, Javascript, HTML, CSS.
                    </p>
                </div>
            </div>
    </section>
    )
}
