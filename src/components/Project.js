import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
    title,
    date,
    place,
    description,
    projectType,
    link,
    smiley
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="p-4">
      <section className="container mx-auto">
        <h1 className="text-5xl text-gray-900 flex justify-center cursive ">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-900 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shedow-xl bg-white bg-opacity-70 p-8 md:p-16"
              >
                <h3 className="text-gray-500 hover:text-gray-900 text-3xl font-bold mb-2">
                  <a
                    href={project.link}
                    alt={project.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="flex flex-col">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {project.date ? new Date(project.date).toLocaleDateString() : "-" }
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    alt={project.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-bold hover:underline hover:text-blue-900 "
                  >
                    View The Project{" "}
                    <span role="img" area-label="right pointer text-5xl">
                      {project.smiley ? project.smiley : '🤙'}
                      
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
