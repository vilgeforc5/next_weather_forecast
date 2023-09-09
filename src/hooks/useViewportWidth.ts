import { useEffect, useState } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
export const useViewportSize = () => {
    const [dimensions , setDimension] = useState(getWindowDimensions())
    useEffect(() => {
        function handleResize() {
            setDimension(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    })

    return dimensions
}