import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { FaGithub } from "react-icons/fa6";
import { TbBrowser } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div className="flex gap-3 w-full  items-center">      <img className="w-2/5 rounded-md" src={project.imageUrl}></img>
            <div className="flex flex-col w-full">

              <div className="w-full  flex gap-2  justify-between">
                <a href={project.live.toString()|| project.github.toString()}>
                <span className="text-black  dark:text-white text-xl font-medium tracking-tight">
                  {project.title}
                </span>
                </a>
                <span className="flex gap-3 text-">
                {project.github?     <a href={project.github.toString()}> <FaGithub size={20}/> </a>:''}
                {project.live?     <a href={project.live.toString()}> <TbBrowser size={20}/></a>:''}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>

          </div>


        ))}
      </div>
    </section>
  );
}
