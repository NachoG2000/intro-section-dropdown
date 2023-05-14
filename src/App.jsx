import React, {useState} from 'react'
import './App.css'
import logo from './images/logo.svg'
import iconMenu from './images/icon-menu.svg'
import iconCloseMenu from './images/icon-close-menu.svg'
import iconArrowDown from './images/icon-arrow-down.svg'
import iconArrowUp from './images/icon-arrow-up.svg'
import heroMobile from './images/image-hero-mobile.png'
import heroDesktop from './images/image-hero-desktop.png'
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import meet from "./images/client-meet.svg"
import maker from "./images/client-maker.svg"
import todo from "./images/icon-todo.svg"
import calendar from "./images/icon-calendar.svg"
import reminders from "./images/icon-reminders.svg"
import planning from "./images/icon-planning.svg"


function App() {
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false)
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false)
  const [isCompanyHovered, setIsCompanyHovered] = useState(false)
  const [IsCompanyClicked, setIsCompanyClicked] = useState(false)
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

  function toggleMenu(){
    setIsMenuDisplayed(prevState => !prevState)
    if(isMenuDisplayed === false){
      setIsFeaturesClicked(false)
      setIsCompanyClicked(false)
    }
  }

  function toggleItem(id){
    if(id === 1){
      setIsFeaturesClicked(prevState => !prevState)
    }
    else if(id === 2){
      setIsCompanyClicked(prevState => !prevState)
    }
  }

  function mouseEnter(id){
    if(id === 1){
      setIsFeaturesHovered(true)
    }
    else if(id === 2){
      setIsCompanyHovered(true)
    }
  }
  function mouseLeave(id){
    if(id === 1){
      setIsFeaturesHovered(false)
    }
    else if(id === 2){
      setIsCompanyHovered(false)
    }
  }

  return (
    <>
      <header className='flex p-6 justify-between'>
        <nav className='flex'>
        <img src={logo} alt="Logo" className='object-contain'/>   
          <ul className='list-none md:flex mx-10 hidden items-center'>
            <li className='mx-3 font-semibold text-[#6B6B6B] hover:text-[#212121] flex cursor-pointer' onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)}>
              Features 
              {!isFeaturesHovered 
              ? 
                <img className='m-auto ml-1' src={iconArrowDown} alt="Arrow Down" /> 
              : 
              <>
                <img className='m-auto ml-1' src={iconArrowUp} alt="Arrow Up" />
                <div className={`absolute  ${!isFeaturesHovered ? "hidden" : "flex flex-col"} bg-white rounded-xl shadow-2xl mt-6 z-10 items-start`}>
                  <a href="#" className="flex px-4 py-2 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={todo} alt="todo icon" /> Todo List</a>
                  <a href="#" className="flex px-4 py-2 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={calendar} alt="todo icon" /> Calendar</a>
                  <a href="#" className="flex px-4 py-2 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={reminders} alt="todo icon" /> Reminders</a>
                  <a href="#" className="flex px-4 py-2 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={planning} alt="todo icon" /> Planning</a>
                </div>
              </>
              }
            </li>  
            <li className='mx-3 font-semibold text-[#6B6B6B] hover:text-[#212121] flex cursor-pointer' onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave(2)}>
              Company 
              {!isCompanyHovered 
              ? 
                <img className='m-auto ml-1' src={iconArrowDown} alt="Arrow Down" /> 
              : 
              <>
                <img className='m-auto ml-1' src={iconArrowUp} alt="Arrow Up"/>
                <div className={`absolute  ${!isCompanyHovered ? "hidden" : "flex flex-col"} bg-white rounded-xl shadow-2xl mt-6 z-10`}>
                  <a href="#" className="block px-4 py-2 text-[#6B6B6B] hover:text-[#212121]">History</a>
                  <a href="#" className="block px-4 py-2 text-[#6B6B6B] hover:text-[#212121]">Our Team</a>
                  <a href="#" className="block px-4 py-2 text-[#6B6B6B] hover:text-[#212121]">Blog</a>
                </div>
              </>
              }
            </li>  
            <li className='mx-3 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer'>Careers</li>  
            <li className='mx-3 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer'>About</li>  
          </ul>
        </nav> 
        <img src={iconMenu} alt="Menu" className='md:hidden' onClick={toggleMenu}/>
        <div className={`absolute ${!isMenuDisplayed ? "hidden" : "flex flex-col"} bg-black bg-opacity-70 w-full top-0 left-0 bottom-[-200px] z-9`}
             onClick={toggleMenu}
        > 
        </div>
        <div className={`absolute ${!isMenuDisplayed ? "hidden" : "flex flex-col"} bg-white w-[70%] top-0 right-0 bottom-[-200px] z-10`}> 
          <div className='flex justify-end'>
            <img src={iconCloseMenu} alt="close menu" className='w-10 m-4 p-2' onClick={toggleMenu}/>
          </div>
          <div>
            <ul className='list-none ml-2'>
              <li className='m-3 font-semibold text-[#6B6B6B] hover:text-[#212121] flex cursor-pointer' onClick={() => toggleItem(1)}>
                Features 
                {!isFeaturesClicked 
                ? 
                  <img className='m-auto ml-1' src={iconArrowDown} alt="Arrow Down" /> 
                : 
                <>
                  <img className='m-auto ml-1' src={iconArrowUp} alt="Arrow Up" />
                </>
                }
              </li>
              <div className={` ${!isFeaturesClicked ? "hidden" : "flex flex-col "} bg-white z-10 items-start`}>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={todo} alt="todo icon" /> Todo List</a>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={calendar} alt="todo icon" /> Calendar</a>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={reminders} alt="todo icon" /> Reminders</a>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"><img className='m-auto mr-3' src={planning} alt="todo icon" /> Planning</a>
              </div> 
              <li className='m-3 font-semibold text-[#6B6B6B] hover:text-[#212121] flex cursor-pointer' onClick={() => toggleItem(2)}>
                Company 
                {!IsCompanyClicked 
                ? 
                  <img className='m-auto ml-1' src={iconArrowDown} alt="Arrow Down" /> 
                : 
                <>
                  <img className='m-auto ml-1' src={iconArrowUp} alt="Arrow Up" />
                </>
                }
              </li>
              <div className={` ${!IsCompanyClicked ? "hidden" : "flex flex-col "} ml-6 bg-white z-10 items-start`}>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"> History</a>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"> Our Team</a>
                    <a href="#" className="flex px-4 py-1 text-[#6B6B6B] hover:text-[#212121]"> Blog</a>
              </div>  
              <li className='m-3 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer'>Careers</li>  
              <li className='m-3 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer'>About</li>  
            </ul>
            <div className='flex flex-col mt-4 px-4'>
              <button className='m-2 font-semibold text-[#6B6B6B] hover:text-[#212121]'>Login</button>
              <button className='m-2 font-semibold py-2 px-4 rounded-xl border-[2px] text-[#6B6B6B] border-[#6B6B6B] hover:border-[#212121] hover:text-[#212121]'>Register</button>
            </div>
          </div>
        </div>
        <div className='list-none md:flex hidden'>
          <button className='mx-3 font-semibold text-[#6B6B6B] hover:text-[#212121]'>Login</button>
          <button className='mx-3 font-semibold py-2 px-4 rounded-xl border-[2px] text-[#6B6B6B] border-[#6B6B6B] hover:border-[#212121] hover:text-[#212121]'>Register</button>
        </div>
      </header>
      <main className='md:grid md:grid-cols-2 px-0 md:px-24 md:gap-24'>
        <img src={heroMobile} alt="Hero Mobile" className='md:hidden'/>
        <div className='flex flex-col items-center md:items-start text-center md:text-left px-2'> 
          <h1 className='text-4xl sm:text-6xl xl:text-8xl text-[#212121] font-bold mt-8 2xl:mt-20'>Make remote work</h1>
          <p className='text-[#6B6B6B] md:w-[100%] w-[60%] text-sm xl:text-2xl 2xl:text-4xl font-semibold mb-8 mt-4 2xl:my-14'>Get your team in sync, no matter your location. Streamline process, create team rituals, and watch productivity soar.</p>
          <button className='bg-[#212121] text-[#FFFFFF] hover:bg-inherit border-[2px] border-[#212121] hover:text-[#212121] font-semibold py-2 px-4 rounded-xl xl:text-2xl xl:py-4 xl:px-8'>Learn more</button>
          <div className='grid grid-cols-4 mt-8 p-2 gap-4'>
            <img src={databiz} alt="Client Databiz" />
            <img src={audiophile} alt="Client Audiophile" />
            <img src={meet} alt="Client Meet" />
            <img src={maker} alt="Client Maker" />
          </div>
        </div>
          <img src={heroDesktop} alt="Hero Mobile" className='hidden md:flex mt-8 h-[90%] lg:h-[70%] 2xl:hidden mx-auto'/>
          <img src={heroMobile} alt="Hero Mobile" className='hidden 2xl:flex mt-20 mx-auto'/>
      </main>
    </>
  )
}

export default App