import './Portfolio.css'
import { Reveal } from './transitions/reveal';
import { Slide } from './transitions/slide';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Portfolio () {
    return(
        <>
            <nav className='Navbar flex text-myWhite lg:px-36 pt-8 lg:justify-center w-full justify-around z-20 backdrop-blur-xl sticky top-0'>
                <div className='lg:w-1/3 flex gap-x-4 items-center'>
                    <img src="/Portfolio/assets/inversed_logo.svg" sizes='20px' className='w-14 h-14 '/>
                    <a href="#landing" className='nav-link sm:text-5xl font-medium font-akshar text-2xl'>ALAN</a>
                </div>
                <div className='flex lg:w-1/3 justify-around items-center w-1/2 gap-x-4'>
                <div>
                    <a href="#works" className='nav-link sm:text-3xl font-akshar font-light text-lg'>MY DESIGN</a>
                </div>
                <div>
                    <a href="#about" className='nav-link sm:text-3xl font-akshar font-light text-lg'>ABOUT ME</a>
                </div>
                </div>
            </nav>
            <section id="landing" className="Landing"
                >
            <div className="flex flex-col landing-page min-h-screen justify-center px-4 2xl:pl-32">

                <div className="flex flex-col lg:flex-row lg:pl-20 mt-20 w-full">
                    <div className="w-1/2 lg:w-1/4 flex justify-center self-center">
                        <div className="xl:w-96 w-[90%] cardContainer">
                        <img src="/Portfoli/assets/ava_card.svg" alt="ava" className="card"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-col justify-center gap-y-10 lg:pl-10">
                            <div className="flex flex-row lg:flex-col xl:flex-row items-center mt-20 mx-auto lg:mx-0 lg:mt-0">
                                <Reveal>
                                    <h2 className="text-2xl lg:text-5xl 2xl:text-7xl text-myEmerald font-akshar font-medium pr-5">Hello, I'm</h2>
                                </Reveal>
                                <Slide>
                                <h1 className="text-4xl lg:text-8xl 2xl:text-9xl font-alumni font-bold text-myWhite">ALAN NGUYEN</h1>
                                </Slide>
                            </div>
                            <div className="flex xl:flex-row flex-col">
                                <p className=" text-myWhite font-akshar font-light md:text-2xl xl:px-0 xl:pb-0 pb-10 xl:w-1/3">
                                I'm an enthusiastic and creative professional with a strong foundation in UX/UI design, frontend development, 
                                and graphic design. I’m driven by a passion for crafting intuitive user experiences with responsive interface 
                                and thrive in collaborative environments where I can quickly adapt and contribute innovative ideas.
                                </p>
                                <a href="mailto:annguyen022903@gmail.com" className="rounded-full w-64 h-20 bg-myblack text-myWhite font-alex text-5xl xl:self-end self-center lg:mx-48 lg:mb-0 mb-10 items-center flex justify-center myButton">Get in touch</a> 
                            </div>
                            <div className="items-center w-[75%] xl:inline-flex hidden">
                                <p className="font-akshar font-semibold text-7xl text-myWhite"> @: </p>
                                <div className="marquee-container w-full">
                                <div className="marquee">
                                    <p className="marquee-content text-myWhite font-akshar font-light text-7xl">
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    </p>
                                    <p className="marquee-content text-myWhite font-akshar font-light text-7xl">
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    </p>
                                    <p className="marquee-content text-myWhite font-akshar font-light text-7xl">
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    Frontend Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    Graphic Designer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>
                                    UX/UI Developer
                                    <img src="/assets/fragment.svg" alt="fragment" className="card"/>  
                                    </p>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </section>

            <section id="works" className='MyWorks my-20'>
                <div className="flex flex-col justify-center">
                    {/* <Navbar/> */}
                    <Reveal>
                        <h1 className="text-center text-myWhite text-8xl sm:text-9xl md:text-[180px] lg:text-[200px] 2xl:text-[400px] my-32 font-alex">My Work</h1>
                    </Reveal>
                    <div className='Project1 w-full my-10 flex lg:flex-row flex-col items-center justify-around px-10 h-[700px]'>
                        <div className='flex flex-col w-full lg:w-1/2 2xl:w-1/3 px-5 lg:px-0 contentArea'>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite pb-12'>UX/UI DESIGNER</p>
                            </Reveal>
                            <Slide>
                                <h1 className='font-akshar font-semibold text-4xl md:text-6xl sm:text-7xl xl:text-8xl text-myWhite pb-6'>Catadoro</h1>
                            </Slide>
                            <Reveal>
                                <h2 className='font-akshar text-2xl md:text-3xl xl:text-4xl text-myWhite pb-8'>A Time Management Application</h2>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite pb-4'>A time-management application that empowers users to manage their schedules, and tasks, and focus more efficiently and effortlessly.</p>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myEmerald'>June 2024 - August 2024</p>
                            </Reveal>
                        </div>
                        <div className='h-[300px] sm:h-[400px] sm:w-[80%] lg:mt-0 mt-10 lg:w-1/2 xl:w-3/5 2xl:w-2/5 flex justify-center items-center rounded-lg catadoro'/>
                    </div>

                    <div className='Project2 w-full mb-10 flex lg:flex-row flex-col-reverse items-center justify-around px-10 h-[700px] mt-32 lg:mt-0'>
                        <div className='h-[300px] sm:h-[400px] sm:w-[80%] lg:mt-0 mt-10 lg:w-1/2 xl:w-3/5 2xl:w-2/5 flex justify-center items-center rounded-lg boroshop'/>
                        <div className='flex flex-col w-full lg:w-1/2 2xl:w-1/3 px-5 lg:pl-10 2xl:px-0 contentArea'>
                            <div className='pb-12 flex justify-between'>
                                <Reveal>
                                    <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite'>UX/UI DESIGNER</p>
                                </Reveal>
                                <Reveal>
                                    <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite'>FRONTEND DEVELOPER</p>
                                </Reveal>
                            </div>
                            <Slide>
                                <h1 className='font-akshar font-semibold text-4xl md:text-6xl sm:text-7xl xl:text-8xl text-myWhite pb-6'>BoRoShop</h1>
                            </Slide>
                            <Reveal>
                                <h2 className='font-akshar text-2xl md:text-3xl xl:text-4xl text-myWhite pb-8'>A Basketball Ecommerce Website</h2>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite pb-4'>An ecommerce website that sells high-quality basketball products such as balls, jerseys, shoes, and training equipment.</p>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myEmerald pb-4'>June 2024 - August 2024</p>
                            </Reveal>
                            <button className="GitBtn">
                                <Reveal>
                                    <svg className="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                </Reveal>
                                <a href="https://github.com/LucidNg/Ecom_Basketball_shop.git" className="text">View</a>
                            </button>
                        </div>
                    </div>

                    <div className='Project1 w-full flex lg:flex-row flex-col items-center justify-around px-10 h-[700px] mt-32 lg:mt-0'>
                        <div className='flex flex-col w-full lg:w-1/2 2xl:w-1/3 px-5 lg:px-0 contentArea'>
                            <div className='pb-12 flex justify-between'>
                                <Reveal>
                                    <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite'>UI DESIGNER</p>
                                </Reveal>
                                <Reveal>
                                    <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite'>FULLSTACK DEVELOPER</p>
                                </Reveal>
                            </div>
                            <Slide>
                                <h1 className='font-akshar font-semibold text-4xl md:text-6xl sm:text-7xl xl:text-8xl text-myWhite pb-6'>VietRist</h1>
                            </Slide>
                            <Reveal>
                                <h2 className='font-akshar text-2xl md:text-3xl xl:text-4xl text-myWhite pb-8'>A Travel Commercial Website</h2>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myWhite pb-4'>The website is to promote tourism for Vietnam in 64 provinces with features like book tours, flights, send email verification.</p>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar font-medium text-lg md:text-xl xl:text-2xl text-myEmerald pb-4'>Mar 2024 - Apr 2024</p>
                            </Reveal>
                            <button className="GitBtn">
                                <Reveal>
                                    <svg className="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                </Reveal>
                                <a href="https://github.com/Tr1ck4/Tour-de-Viet.git" className="text">View</a>
                            </button>
                        </div>
                        <div className='h-[300px] sm:h-[400px] sm:w-[80%] lg:mt-0 mt-10 lg:w-1/2 xl:w-3/5 2xl:w-2/5 flex justify-center items-center rounded-lg vietrist'/>
                    </div>

                </div>
            </section>

            <div className='divider w-[90%] h-1 border-b-[2px] border-myWhite mx-auto my-20'/>

            <section id="about" className='AboutMe w-full flex justify-center items-center lg:my-40 px-4 flex-col lg:pl-0 gap-y-10'>

                <div className='flex lg:flex-row flex-col gap-x-10 md:pl-28 lg:pl-0'>

                    <div className={`about w-full lg:w-[300px] lg:h-[368px] lg:bg-[url(/assets/hero_exp.svg)] bg-no-repeat bg-contain flex flex-col p-4 mt-20 sm:mt-10 lg:mt-0`}>
                        <Reveal>
                                    <h1 className='font-alex text-myWhite font-semibold text-4xl w-full'>Experience</h1>
                        </Reveal>
                        <div className='w-full flex h-full mt-4 pl-4 '>
                            <div className='timeline h-[70%] xl:h-[90%] w-1 bg-myEmerald rounded-lg flex xl:self-center'/>
                            <div className='experience flex flex-col w-11/12 h-[90%] self-center ml-4'>
                                <div className='occupation flex flex-col'>
                                    <h2 className='font-akshar text-myWhite text-xl flex items-center'><div className='dot h-2 w-2 bg-myEmerald rounded-lg mr-3 '></div>Design Studio HCMC</h2>
                                    <h2 className='font-akshar text-myWhite font-light text-xl pl-8'>Graphic Designer</h2>
                                    <h2 className='font-akshar text-myGray text-md pl-8'>Sep 2021 - Present</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`experience w-full xl:w-[930px] h-[368px] lg:bg-[url(/assets/hero.svg)] bg-no-repeat bg-contain flex`}>
                        <div className='sm:w-[80%]  lg:w-[90%] p-10'>
                            <Reveal>
                                <div className='flex sm:flex-row flex-col justify-around items-center'>
                                    <h1 className='font-alex text-myWhite text-4xl sm:text-6xl'>About me</h1>
                                    <a href='/Nguyen Loc An.pdf' className=' text-myWhite font-alumni py-2 px-10 m-2 font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-myDark focus:outline-none"'>My CV</a>
                                </div>
                            </Reveal>
                            <Reveal>
                                <p className='font-akshar text-myWhite font-light sm:text-lg py-4 sm:py-10 lg:pr-0 pr-4'>
                                    I'm an enthusiastic and creative professional with a strong foundation in
                                UX/UI design, front-end development, and graphic design. I’m driven
                                by a passion for crafting intuitive user experiences with responsive
                                interfaces and thrive in collaborative environments where I can quickly
                                adapt and contribute innovative ideas. I always seeking for opportunity
                                to improve my knowledge and skill.
                                </p>
                            </Reveal>
                        </div>
                        <div className='w-[10%] flex-col flex justify-center items-center'>
                            <div className='h-full justify-center flex flex-col items-center gap-y-8 pt-24 xl:pt-44 lg:pr-0 pr-4'>
                                <a href="http://www.linkedin.com/in/an-nguy%E1%BB%85n-l%E1%BB%99c-6a3a76282">
                                    <div className='bg-myAzul rounded-full p-2 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_10px_rgba(0,150,245,0.6)] transition-all duration-300 ease-in-out '>
                                        <FaLinkedinIn size={30} color='#f6f7eb'/>
                                    </div>
                                </a>
                                <a href="https://github.com/LucidNg">
                                    <div className='bg-myWhite rounded-full p-2 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_10px_rgba(0,150,245,0.6)] transition-all duration-300 ease-in-out '>
                                        <FaGithub size={30} color='#262626'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            
                <div className='mt-10 flex flex-col items-center justify-center lg:mb-0 mb-10'>
                    <Slide>
                        <h1 className='font-alumni text-6xl text-myEmerald'>What I use</h1>
                    </Slide>
                    <div className='flex flex-wrap p-10 lg:w-2/3 gap-x-2 gap-y-1'>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Nextjs</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>React</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Svelt</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>TailwindCSS</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>HTLM</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>CSS</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Javascript</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Typescript</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Figma</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Photoshop</span>
                        <span className='bg-myDark text-myWhite rounded-full text-xl py-1 px-3'>Illustrator</span>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Portfolio;
