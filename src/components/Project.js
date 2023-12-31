import React from 'react';
import Project4 from '../assets/Project4.jpg'
import Project7 from '../assets/Project7.jpg'
import Project9 from '../assets/Project9.jpg'
import Project8 from '../assets/project_9.png'
import 'swiper/css'



const Project = () => {

  const projects = [
    {
      id: 'a4',
      development: 'FrontEnd Project',
      img: Project4,
      name: 'Expense Tracker',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Expense_Tracker',
      live_link: 'https://expense-tracker-40eba.web.app/',
      para: 'Expense Tracker Pro: Experience seamless expense management with login,signUp ,  password control, profile updates, email verification, and easy daily expense handling including add, edit, and delete functions.'
    },
    {
      id: 'a2',
      development: 'FrontEnd Project',
      img: Project8,
      name: 'StoreCode (An e-commerce website)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/storecodeShop',
      live_link: 'https://65728de94238a100081f7dff--clinquant-creponne-461534.netlify.app/',
      para: 'The StoreCode: An e-commerce site with authentication (login/ signup/logout/ password change). Users browser, shop, view details,add item, remove , secure payment, buy, login required.',
    },
    {
      id: 'a1',
      development: 'FrontEnd Project',
      img: Project7,
      name: 'Simple Javascprit',
      githup_link: 'https://gitlab.com/abhishekmishra992016/nextlabassignment',
      live_link: 'https://6505c4d0861a180008716afd--dainty-kringle-9a0523.netlify.app/',
      para: 'simple javascript website , with lazy loading , form , slider highter , apis'
    },
    {
      id: 'a6',
      development: 'FrontEnd Project',
      img: Project9,
      name: 'EmailOutLook(Email Clone)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/EmailOutLook',
      live_link: 'https://651990d711fd766013605e02--lucent-dango-83c963.netlify.app/',
      para: 'EmailOutLook(userSpecific): EmailBox site with authentication(login, signup, password).Users browse, Compose, view Send Emails , And view Inbox Emails, but login required; non - logged -in users redirected for access.'
    },
  ]


  return (
    <section id='projects' className='py-20 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works </p>
      </div>
      <br />
      <div className='p-6 mt-12 max-w-3xl max-h-3xl mx-auto flex flex-wrap'>
        {projects.map((project_Info) => (
          <div className='p-4 bg-gray-700  rounded-xl mt-7 border-2 border-rose-500' key={project_Info.id}>
            <p>{project_Info.development}</p>
            <img src={project_Info.img} alt={project_Info.name} className='rounded-lg ' />
            <h3 className='text-xl my-4 name'>{project_Info.name}</h3>
            <p className='mt-2'>{project_Info.para}</p>
            <div className='flex gap-4 button1 mt-3'>
              <a
                href={project_Info.githup_link}
                className='text-cyan-600 text-center w-20 bg-gray-800 py-1 inline-block button btn box1'>Github</a>
              <a
                href={project_Info.live_link}
                className='text-cyan-600 bg-gray-800 text-center py-1 w-20 inline-block button btn box1'>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section >
  )
}

export default Project