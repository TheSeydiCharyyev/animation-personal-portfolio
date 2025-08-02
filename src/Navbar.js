import React, { useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const tabsNewAnim = navbarRef.current;
    const activeItemNewAnim = tabsNewAnim.querySelector('.active');
    const horiSelector = tabsNewAnim.querySelector('.hori-selector');
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth;
    const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

    horiSelector.style.left = `${itemPosNewAnimLeft}px`;
    horiSelector.style.width = `${activeWidthNewAnimWidth}px`;

    const handleClick = (e) => {
      tabsNewAnim.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const activeWidth = e.currentTarget.innerWidth;
      const itemPosLeft = e.currentTarget.offsetLeft;
      horiSelector.style.left = `${itemPosLeft}px`;
      horiSelector.style.width = `${activeWidth}px`;
    };

    tabsNewAnim.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', handleClick);
    });

    return () => {
      tabsNewAnim.querySelectorAll('li').forEach((li) => {
        li.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div id="navbar-animmenu" ref={navbarRef}>
      <ul className="show-dropdown main-navbar">
        <div className="hori-selector">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <li className="active">
          <a href="#home">
            <i className="fas fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fas fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#projects">
            <i className="fas fa-briefcase"></i>Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fas fa-envelope"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;