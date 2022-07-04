import {useState, forwardRef } from "react";
import images from "~/assets/images";

console.log(images.noImage)
const Images = forwardRef( ({src , alt ,...props} ,ref) => {
    const [fallback , setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.noImage)
    }
    return ( <img src={fallback || src} alt={alt} ref={ref} {...props} onError={handleError}/> );
})

export default Images;