import { useState } from 'react';
import Sections from '../data/Sections.json';
import HamburguerIcon from './icons/HamburguerIcon.tsx';
import '../styles/styles.css';

export const prerender = false;

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className='w-full flex justify-center min-h-24'>
      <section className='w-[85%] flex flex-row justify-between items-center'>
        <figure className='bg-white px-3 py-4 rounded-b-3xl shadow-lg h-full'>
          <img
            className='invert'
            src='/assets/logotipo.svg'
            alt='Sordo pero no mudo'
          />
        </figure>
        <div className='lg:hidden bg-white shadow-lg px-4 py-6 rounded-lg'>
          <HamburguerIcon isSelected={openMenu} onClick={handleClick} />
        </div>
        <nav
          className={`${
            openMenu ? 'overflow-visible' : 'overflow-hidden header-nav-hide'
          } transition-all duration-500 fixed left-0 bottom-0 w-full rounded-t-xl bg-white px-2 py-2 shadow-lg-y-up lg:shadow-lg lg:static lg:my-0 lg:flex lg:w-auto lg:rounded-full`}
        >
          <ul className='flex flex-col justify-center items-center w-full lg:flex-row lg:items-center lg:justify-between gap-2'>
            {Sections.map((section) => (
              <li
                onClick={handleClick}
                className={`transition-all duration-300 w-full lg:w-auto rounded-xl lg:rounded-full ${section.color} lg:bg-transparent text-base hover:font-medium hover:text-white cursor-pointer px-4 py-2 text-center`}
              >
                <a href={`#${section.link}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}
