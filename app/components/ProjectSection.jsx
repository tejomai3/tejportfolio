"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Patient Managment System",
    description:
      " am thrilled to present my latest project which i make with the NextJS and Tailwind CSS, Patient managment system for both patiens and admin.",
    image: "/images/projects/uber.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/Uber-Clone-Responsive",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description:
      "I build an eCommerce project using Next.js and Tailwind CSS. The goal of the project was to build a modern and responsive e-commerce store that was fast and easy to use.",
    image: "/images/projects/ecommerce.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/Shopping-Website/tree/main",
  },
  // {
  //   id: 3,
  //   title: "Facebook Clone",
  //   description:
  //     "I created a Facebook clone using React.js, and I designed the styles myself.",
  //   image: "/images/projects/social.jpg",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/httpArbaz/FaceBook-Clone",
  // },
  {
    id: 4,
    title: "Fashion recommnder system",
    description:
      "In This Project I a model to give similar items according to the image that is given",
    image: "/images/projects/dashboard.jpg",
    image: "/images/projects/disney.jpg",
    tag: ["All", "Ml"],
    gitUrl:
      "https://github.com/httpArbaz/Disney-clone-react-redux-firebase-styled-component-.git",
  },
  {
    id: 5,
    title: "Disease Prediction based on Age",
    description:
      "I dove into building a modelto predict the disease according to the age of the patient.",
    image: "/images/projects/tesla.jpg",
    tag: ["All", "ml"],
    gitUrl: "https://github.com/httpArbaz/Tesla-Clone",
  },
  {
    id: 6,
    title: "DashBoard",
    description:
      "I'm thrilled to present my latest project, a cutting-edge dashboard app designed to empower businesses with actionable insights and streamlined data management.",
    image: "/images/projects/dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/nextjs-dashboard",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-red-700">
          My Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine learning"
          isSelected={tag === "ml"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
