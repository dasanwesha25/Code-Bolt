"use client"
import { useState, useEffect } from "react";

function useMounted() {
    const [Mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true)
    }, [])
    
  return Mounted
}

export default useMounted