import React from 'react';

const styles = {
    bang: {
        fontFamily: 'Bangers', 
    }
}
function Tabs ({currentPage, handlePageChange}) {
    return (
        <div className='flex justify-between'>
            <a href="#about" onClick={() => handlePageChange('About')}>
                <h1 style={styles.bang} className='py-3 px-3 text-white text-5xl'>Ankit's Portfolio</h1>
            </a>
            
        
        <ul className='flex'>
            <li className='mr-3'>
                <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'inline-block border border-cyan-900 rounded py-6 px-3 bg-cyan-900 text-white animate-pulse' : 'inline-block border border-cyan-500 rounded hover:border-cyan-500 text-white hover:animate-pulse py-6 px-3'}>
                    About
                </a>
            </li>
            <li className='mr-3'>
                <a href='#projects' onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'inline-block border border-cyan-900 rounded py-6 px-3 bg-cyan-900 text-white animate-pulse' : 'inline-block border border-cyan-500 rounded hover:border-cyan-500 text-white hover:animate-pulse py-6 px-3'}>
                    Projects
                </a>
            </li>
            <li className='mr-3'>
                <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'inline-block border border-cyan-900 rounded py-6 px-3 bg-cyan-900 text-white animate-pulse' : 'inline-block border border-cyan-500 rounded hover:border-cyan-500 text-white hover:animate-pulse py-6 px-3'}>
                    Resume 
                </a>
            </li>
            <li>
                <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'inline-block border border-cyan-900 rounded py-6 px-3 bg-cyan-900 text-white animate-pulse' : 'inline-block border border-cyan-500 rounded hover:border-cyan-500 text-white hover:animate-pulse py-6 px-3'}>
                    Contact Me
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Tabs;