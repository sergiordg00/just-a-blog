"use client";

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './styles/FHSlider.css';

export default function FHSlider({ children, gapX="gap-x-3 sm:gap-x-4" }) {
  const [displayPrev, setDisplayPrev] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const fhSliderRef = useRef(null);

  useEffect(()=>{
    _checkOverflows();
  }, []);

  function _checkOverflows() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;

    if(scrollLeft !== 0) setDisplayPrev(true);
    else setDisplayPrev(false);

    if(scrollLeft + clientWidth < scrollWidth) setDisplayNext(true);
    else setDisplayNext(false);
  }

  function slideNext() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;
    const newScrollLeft = scrollLeft + (clientWidth / 2);

    fhSliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    if(newScrollLeft >= scrollWidth - clientWidth && displayNext) setDisplayNext(false);
    if(newScrollLeft > 0 && !displayPrev) setDisplayPrev(true);
  }

  function slidePrev() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;
    const newScrollLeft = scrollLeft - (clientWidth / 2);

    fhSliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    if(newScrollLeft <= 0 && displayPrev) setDisplayPrev(false);
    if(newScrollLeft < scrollWidth - clientWidth && !displayNext) setDisplayNext(true);
  }

  return (
    <>
      <div className="fhslider__container" onMouseEnter={_checkOverflows}>
        <div 
          ref={fhSliderRef}
          className={clsx(
            "fhslider__viewport",
            gapX
          )}
        >
          {children}
        </div>

        <button 
          type="button" 
          onClick={slidePrev}
          className={clsx(
            "fhslider__controls prev",
            "left-0 flex h-full w-[50px] items-center justify-center bg-gradient-to-r from-gray-100 to-transparent",
            displayPrev && "active"
          )} 
        >
          <FaAngleLeft size={30} className="absolute"/>
        </button>

        <button 
          type="button" 
          onClick={slideNext}
          className={clsx(
            "fhslider__controls next",
            "right-0 flex h-full w-[50px] items-center justify-center bg-gradient-to-r from-transparent to-gray-100",
            displayNext && "active"
          )} 
        >
          <FaAngleRight size={30} className="absolute"/>
        </button>
      </div>
    </>
  );
}