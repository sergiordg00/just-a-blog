"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import DelayUnmount from "@/shared-components/common/DelayUnmount";

import "./styles/Drawer.css";

export default function Drawer({ isOpen, onClose, className, allowFullWidth=false, children }) {
  /* This flag is only when the component is used inside Next.js, because the index.html file is generated at build time, and the portal div is not available at that time. */
  const [nextjsFlag, setNextjsFlag] = useState(false);
  const clickInitiator = useRef(null);
  
  useEffect(() => {
    setNextjsFlag(true);
  }, []);
  
  useEffect(() => {
    if(isOpen) {
      document.body.classList.add("overflow-hidden");
    } 
  }, [isOpen]);
  
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  
  function handleBackdropClick() {
    if(clickInitiator.current === "backdrop") {
      onClose();
    }
  }

  return (
    nextjsFlag ? 
      createPortal(
        <DelayUnmount 
          shouldUnmount={!isOpen} 
          delay={500}
          onUnmount={() => {
            document.body.classList.remove("overflow-hidden");
          }}
        >
          <div 
            onClick={handleBackdropClick} 
            onMouseDown={() => clickInitiator.current = "backdrop"}
            className={clsx(
              "fixed left-0 top-0 z-[51] flex h-full w-full items-center justify-end overflow-hidden",
              isOpen ? "drawer-backdrop-enter" : "drawer-backdrop-exit",
              allowFullWidth ? "pl-0" : "pl-10"
            )}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => { e.stopPropagation(); clickInitiator.current = "drawer"; }}
              className={clsx(
                "relative h-full overflow-y-auto shadow-xl",
                isOpen ? "drawer-enter" : "drawer-exit",
                className
              )}
            >
              {children}
            </div>
          </div>
        </DelayUnmount>
        , document.getElementById("portal")
      ) : null
  );
}