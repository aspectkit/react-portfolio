import React from "react";

const styles = {
    bang: {
        fontFamily: 'Bangers', 
    }
}

export default function About() {
  return (
    <section className="bg-slate-700 pt-44 pb-32 h-screen w-screen" id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span style={styles.bang} className="text-cyan-500 animate-pulse font-bold">A n k i t</span>.
            <br className="hidden lg:inline-block" />Welcome to my site!
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I'm a recent graduate at Colorado School of Mines looking to show off my skills and gain more experience.
            Take a look around. I'm <span className="italic font-bold">sure</span> you'll find something you like.
          </p>
          <div className="pl-5 grid grid-cols-2 md:grid-cols-7 gap-5">
        <div>
            <img className="h-25 w-20 rounded-lg" src="./2560px-Node.js_logo.svg.png" alt="nodejs" />
        </div>
        <div>
            <img className="h-25 w-20 rounded-lg" src="./5847f5bdcef1014c0b5e489c.png" alt="HTML" />
        </div>
        <div>
            <img className="h-25 w-20 rounded-lg" src="./67109815.png" alt="tailwind" />
        </div>
        <div>
            <img className="h-25 w-20 rounded-lg" src="./Bootstrap_logo.svg.png" alt="bootstrap" />
        </div>
        <div>
            <img className="pl-6 h-25 w-20 rounded-lg" src="./CSS3_logo_and_wordmark.svg.png" alt="css" />
        </div>
        <div>
            <img className="pl-6 h-25 w-20 rounded-lg" src="./logo-javascript-logo-png-transparent.png" alt="javascript" />
        </div>
        <div>
            <img className="pl-6 h-25 w-25 rounded-lg" src="./logo192.png" alt="react" />
        </div>
      </div>
      <div>
        <h1 className="text-xl pl-96 pt-9 text-white">And Tons More...</h1>
      </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src="./IMG_2442.JPG" alt="A selfie of Kit" />
        </div>
        
      </div>
      
    </section>
  );
}