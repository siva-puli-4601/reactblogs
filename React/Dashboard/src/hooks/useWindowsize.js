import { useEffect,useState } from "react";
const useWindowSize=()=>
{
    const [windowsize,setwindowsize]=useState(
        {
            width:undefined,
            height:undefined
        }
    )
    useEffect(()=>
    {
     const handleSize=()=>
     {
        setwindowsize({
            width:window.innerWidth,
            height:window.innerHeight
        })
     }
     handleSize()
     window.addEventListener("resize",handleSize);
     return ()=>window.removeEventListener("resize",handleSize)
    }
    )
    return windowsize
}
export default useWindowSize;