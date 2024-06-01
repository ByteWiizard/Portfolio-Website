
import { Link } from "react-router-dom";

import CTA from "../Components/CTA";
import { projects } from "../constants/index";
import { arrow } from "../assets/icons";
const Projects = () => {
  return (
    <section className='max-container'>

      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Some of my Projects that are closest to my heart.

        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 grid grid-cols-12 gap-2'>
              <h4 className='text-2xl font-poppins font-semibold col-span-11'>
                {project.name}
              </h4>

              <div className=" col-span-12 h-28 flex justify-center">
                <p className='mt-2 text-slate-500 '>{project.description}</p>
              </div>
              <div className='mt-5 flex items-center gap-2 font-poppins col-span-12'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTA />
    </section>
  );
}

export default Projects;


