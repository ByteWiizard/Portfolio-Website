import React from 'react'
import { skills } from '../constants/index'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../Components/CTA'
import { experiences } from '../constants/index'

const About = () => {
  console.log(skills)
  return (
    <section className='max-container'>

      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Yaman</span> 👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Passionate Software Engineer based in India, specializing in Web development, BlockChain Developer
          Let's build something incredible together!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill,index) => {
            return (
              <div key={index} className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>


      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I am currently in my last semester of Computer Engineering Looking for great opportunities
            here is my work experience which I gained during my degree
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => {
              return (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    background: experience.iconBg,
                    boxShadow: 'none'
                  }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}

                >
                  <div className='text-black text-xl font-poppins font-semibold'>
                    <h3>
                      {experience.title}
                    </h3>

                    <p className='text-black-500 font-medium font-base'
                      style={{ margin: 0 }}
                    >{experience.company_name}</p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 '>
                        {point}
                      </li>
                    )
                    )}
                  </ul>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About
