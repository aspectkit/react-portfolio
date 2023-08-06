import React, { useState } from 'react';
import About from './About'
import Contact from './Contact'
import Projects from './Projects';
import Resume from './Resume';
import Tabs from './Tabs';

export default function Navbar(){
   const [currentPage, setCurrentPage] = useState('About');


   const renderPage = () => {
    if (currentPage === 'About'){
        return <About />;
    }
    if (currentPage === 'Projects'){
        return <Projects />;
    }
    if (currentPage === 'Resume'){
        return <Resume />;
    }
    return <Contact />;
   }

   const handlePageChange = (page) => setCurrentPage(page);

   return (
    <div className='bg-cyan-500 md:sticky'>
        <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
   )
 
}
