import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { FaSun,FaMoon } from "react-icons/fa";



const DarkModeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
  
      <div className='flex flex-col'>
        <label className='mt-3 inline-flex items-center cursor-pointer'>
          <span className='relative'>
            <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner'></span>
            <span
              className={`${
                theme === 'dark' ? 'bg-indigo-400 transform translate-x-full' : 'bg-white'
              } absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out`}
            >
              <input onClick={()=>setTheme(theme==='dark'?'light':'dark')} className='absolute opacity-0 w-0 h-0' />
            </span>
          </span>
          <span className='ml-3 text-sm'>{theme === 'dark' ? <FaMoon color="#62CBF7" size={15} /> : <FaSun color="#F5DC06" size={20}/> }</span>
        </label>
      </div>
    )
  }

  export default DarkModeToggle;
