'use client'

import { BDAY_TIME } from "@/utils/consts";
import { useEffect, useState } from "react"


const useAge = () => {
    const [age, setAge] = useState<number>();

    useEffect(() => {
        const currentDate = new Date();
        const ageDifference = currentDate.getFullYear() - BDAY_TIME.getFullYear();
        
        if (
          currentDate.getMonth() < BDAY_TIME.getMonth() ||
          (currentDate.getMonth() === BDAY_TIME.getMonth() &&
            currentDate.getDate() < BDAY_TIME.getDate())
        ) {
          setAge(ageDifference - 1);
        } else {
          setAge(ageDifference);
        }
    }, []);

    return [age, setAge];
}

export default useAge;