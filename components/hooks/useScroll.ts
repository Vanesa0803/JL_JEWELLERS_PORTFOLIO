"use client";

import {useEffect,useState} from "react";


export default function useScroll(){

const [scroll,setScroll]=useState(false);


useEffect(()=>{

const handler=()=>{

setScroll(
window.scrollY>50
);

};


window.addEventListener(
"scroll",
handler
);


return()=>window.removeEventListener(
"scroll",
handler
);


},[]);


return scroll;

}