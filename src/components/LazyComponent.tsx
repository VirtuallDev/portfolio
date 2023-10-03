'use client'

import useInterceptor from "@/hooks/useInterceptor";
import { useEffect, useRef, useState } from "react"

const LazyComponent = ({children}: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { visible } = useInterceptor(ref);

  return <div ref={ref} className={`transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
    {children}
  </div>
}

export default LazyComponent;