import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'




const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent = {
    1: (

        <h1
            className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 text-white mx-5'
        >
            Hi, I am <span className='font-semibold'>Yaman</span> 👋
            <br />
            A passionate Software Engineer,
            <br />
            BlockChain Developer

        </h1>

    ),
    2: (
        <InfoBox
            text="Dive deeper into my learning experiences and aspirations by clicking the 'Learn more' button."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Embark on a journey through my portfolio to discover a diverse showcase of my projects."
            link="/projects"
            btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Exploring new avenues to enhance my tech skills. Let's connect and discuss how we can collaborate."
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return (
        <section>
            {renderContent[currentStage] || null}
        </section>
    );
}

export default HomeInfo
