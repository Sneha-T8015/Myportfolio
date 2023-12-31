import React from 'react';


export default function Portfolio() {
  const skillsData = [
    {
      title: ' Skills',
      elements: ["Java", 'Photoshop Express', "Python", 'HTML', 'CSS', 'JavaScript', 'Flimora', 'Davinci code'],
    },
  ];

  const professionalOverviewStyle = {
    fontFamily: 'Roboto',
  };

  return (
    <div id="portfolio" className='m-3 p-3'>
      <div className='flex items-center text-black justify-center gap-7 flex-col m-3 border border-gray-300 rounded-md'>
        <div className='rounded-lg shadow-lg h-full p-3' style={professionalOverviewStyle}>
          <div className='lg:m-4 m-1 text-xl lg:text-2xl font-semibold text- Portfolio1-font'>My Professional Overview</div>
          <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
            <div className='p-3 lg:p-4 text-md   text-black w-full lg:w-3/4 bg- rounded-lg 'style={professionalOverviewStyle}>
              I am a dedicated and aspiring individual currently in my second year of Computer Science and Engineering at Dhirajlal Gandhi College of Technology. My passion for technology has led me to become proficient in a versatile set of programming languages and web development tools, including Java, Python, CSS, HTML, C, and JavaScript. I am committed to expanding my knowledge and skills in these domains, driven by the ambition to become a proficient web developer.

              Throughout my academic journey, I have had the opportunity to work on a variety of projects, each of which has added to my practical experience and problem-solving skills. I believe in the power of technology to bring positive change, and I'm excited to use my skills to create applications that simplify everyday tasks and improve people's lives. Whether it's developing responsive websites, creating efficient algorithms, or designing user interfaces, I approach every project with enthusiasm and a determination to deliver high-quality results.
            </div>
          
          <div className='flex flex-colp-2 gap-10 rounded-lg text-black font-semibold text-md items-start justify-center w-full lg:w-1/4'>
            {skillsData.map((skillSection, index) => (
              <div key={index} className='flex flex-row'>
                <p className='px-5'>{skillSection.title}:</p>
                <ul>
                  {skillSection.elements.map((skill, skillIndex) => (
                    <li key={skillIndex} className='text-left'>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}
