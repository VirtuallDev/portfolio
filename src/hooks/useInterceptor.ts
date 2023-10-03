'use client'
import { useEffect, useRef, useState } from "react";

const useInterceptor = (ref: any) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({target, isIntersecting}) => {
            if(target == ref.current) {
              if(!isIntersecting || visible) return;
              setVisible(isIntersecting);
            }
          });
       },
       {
        threshold: 0.15,
       }
       );
  
       if (ref.current) {
        observer.observe(ref.current);
       }
  
       return () => {
        observer.disconnect();
       }
    }, []);

    return { visible };
}

export default useInterceptor;