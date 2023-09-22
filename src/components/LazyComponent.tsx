'use client'

import { useEffect, useRef, useState } from "react"

const LazyComponent = ({children}: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({target, isIntersecting}) => {
          if(target == ref.current) {
            setVisible(isIntersecting);
          }
        });
     },
     {
      threshold: 0.5,
     }
     );

     if (ref.current) {
      observer.observe(ref.current);
     }

     return () => {
      observer.disconnect();
     }
  }, []);

  return <div ref={ref} className={`transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
    {children}
  </div>
}

export default LazyComponent;