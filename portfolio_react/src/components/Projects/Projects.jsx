import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 text-justify '>
        <ProjectCard c
          title="Inventory Management System"
          main='Inventory Management System is a Java-based desktop application that allows the vendor to keep track of
their inventory levels in their business.Vendor uses the system to accurately track and maintain products in
inventory'
          sourceCodeLink="https://github.com/luzza07/InventoryManagementSystem"
        />
        <ProjectCard 
          title="Sneakers Point"
          main='Sneakers Point is a simple C-based application that allows users to select from a list of sneakers, add them to
a cart, and generate a final bill. This project uses basic C programming concepts like arrays, functions, and
control structures to implement a shopping experience in a console environment.'
          sourceCodeLink="https://github.com/luzza07/Sneakers-Point"
        />
        <ProjectCard
          title="Hukut.com - QA Automation Testing"
          main="Implemented end-to-end automated tests for Hukut.com using Playwright to ensure the application's functionality and performance. The test suite covers key user interactions, enabling faster and more reliable testing cycles."
          sourceCodeLink="https://github.com/luzza07/Hukut.com-QA-automation-Testing"
        />
        <ProjectCard
          title="Drug Classification"
          main="Developed a machine learning model for drug classification using a comprehensive dataset. Leveraged Python libraries such as Pandas, Scikit-learn, and Matplotlib to preprocess the data, train classification models, and evaluate their performance. ."
          sourceCodeLink="https://github.com/luzza07/Drug-Classification"
        />
      </div>

    </div>
  )
}

export default Projects