import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'

export default function Project() {
const [projectData, setProjectData] = useState(null)

useEffect(() => {
  sanityClient.fetch(
    `*[_type=="project"]{
    title,
    date,
    place,
    description,
    projectType,
    link,
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error)
},[])

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className='text-5xl text-blue-500 flex justify-center cursive '>My Projects</h1>
        <h2 className="text-lg text-blue-500 flex justify-center mb-12">Welcome to my projects page!</h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData && projectData.map((project, index) => (
            <article className="relative rounded-lg shedow-xl bg-white p-8 md:p-16">
            <h3 className="text-blue-500 text-3xl font-bold mb-2 hover:text-blue-700">
              <a
              href={project.link}
              alt={project.alt}
              target="_blank"
              rel="noopener noreferrer"
              >{project.title}</a>
            </h3>
            <div className="bg-white text-xs space-x-4 flex flex-col">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{" "}
                {project.place}
              </span>
              <span>
              <strong className="font-bold">Type</strong>:{" "}
              {project.projectType}
              </span>
              <p className="my-6 text-lg leading-relaxed">{project.description}</p>
              <a href={project.link} alt={project.alt} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline hover:text-blue-900 ">Viev The Project{" "}
              <span role="img" area-label="right pointer text-5xl">&#129305;</span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}
