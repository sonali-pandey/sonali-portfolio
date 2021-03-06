import React from 'react';

function Resume()  {
    return (
        <section className="container mx-auto p-16 grid grid-cols-1 ">
            <h2 className="text-5xl mx-auto mt-6 text-red-300 font-bold ">Resume</h2>

            <a href={require(`../../assets/resume/Sonali-Pandey-Resume.pdf`).default} download className="text-blue-300 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                Dowload Resume
            </a>

            <div className="py-6">
                <h3 className="text-4xl z-40 text-white bg-red-300 h-16 px-5 flex justify-center">Technical Skills</h3>

                <h4 className="text-3xl pt-6 font-medium flex">Frontend:</h4>
                <p className="text-2xl">HTML5, CSS, jQuery, Javascript, React, Bootstrap, Materialize, Material UI, Tailwind, SPA</p>

                <h4 className="text-3xl pt-6 font-medium">Backend:</h4>
                <p className="text-2xl">Node.js, MySQL, MongoDB, Handlebars, Express, PWA, API</p>

                <h4 className="text-3xl pt-6 font-medium">Others:</h4>
                <p className="text-2xl">Python, C, C++, Linux, Embedded C</p>

            </div>

            <div className="py-6">
                <h3 className="text-4xl z-40 text-white bg-red-300 h-16 px-5 flex justify-center">Education</h3>

                <h4 className="text-3xl pt-6 font-medium">Lambton College (Jan 2017 - Sep 2018)</h4>
                <p className="text-2xl">Post-Graduate Diploma: Embedded System Design and Architecture</p>

                <h4 className="text-3xl pt-6 font-medium">Gujarat Technological University (July 2011 - June 2015)</h4>
                <p className="text-2xl">Bachelor of Engineering: Electronics and Communications Engineering</p>

            </div>

            <div className="py-6">
                <h3 className="text-4xl z-40 text-white bg-red-300 h-16 px-5 flex justify-center">Certifications</h3>

                <h4 className="text-3xl pt-6 font-medium">University of Toronto (April 2021 - Sep 2021)</h4>
                <p className="text-2xl">Full-Stack Developement</p>

                <h4 className="text-3xl pt-6 font-medium">Vector India Pvt. Ltd. (Jan 2016)</h4>
                <p className="text-2xl">Advance Embedded System </p>

                <h4 className="text-3xl pt-6 font-medium">LinkedIn (June 2021)</h4>
                <p className="text-2xl">HTML Essential Training </p>
            </div>
        </section>
    )
}

export default Resume;