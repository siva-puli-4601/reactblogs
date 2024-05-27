import { useEffect,useState } from "react";
import axios from "axios";
const useAxiosFetch=()=>
{
    const [data,setdata]=useState("");
    const [fetcherror,setfetcherror]=useState(null);
    const [isload,setisload]=useState(true);
    useEffect(()=>
    {
        let ismount=true;
        const fetchdata=async (url)=>
        {
            setisload(true);
            try{
         const res=await axios.get(url); // it checks error, it directly convert into data
         if(ismount)
         {
            setdata(res.data);
         }
            } catch(err)
            {
             if(ismount)
             {
                setfetcherror(err.massage);
             }
            }

        }
    })
}