"use client";

import { useEffect, useRef, useState } from "react";

export default function DelayUnmount({ shouldUnmount, onUnmount, delay, children }) {
  const [unmount, setUnmount] = useState(shouldUnmount);
  const isNotInitialMount = useRef(false);

  useEffect(() => {
    if(isNotInitialMount.current) {
      if(shouldUnmount) {
        const timeout = setTimeout(() => {
          setUnmount(true);
          onUnmount();
        }, delay);

        return () => {
          clearTimeout(timeout);
        };
      } else {
        setUnmount(false);
      }
    } else {
      isNotInitialMount.current = true;
    }
  }, [shouldUnmount]);

  if(unmount) {
    return (
      <></>
    );
  } else {
    return (
      children
    );
  }
}