/* eslint-disable jsx-a11y/alt-text */

import React,{useState,useEffect,useRef} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

import logo from "../assets/logo.jpg";


function Navbar(){

const [menuOpen,setMenuOpen]=useState(false);
const [destOpen,setDestOpen]=useState(false);
const [langOpen,setLangOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);
const [progress,setProgress]=useState(0);

// eslint-disable-next-line no-unused-vars
const langRef=useRef();

const {t}=useTranslation();



const languages=[
{code:"en",name:"English",flag:"🇬🇧"},
{code:"fr",name:"French",flag:"🇫🇷"},
{code:"de",name:"German",flag:"🇩🇪"},
{code:"es",name:"Spanish",flag:"🇪🇸"}
];



const destinations=[
["Aberdare National Park","/aberdare"],
["Meru National Park","/meru"],
["Amboseli National Park","/amboseli"],
["Nairobi National Park","/nairobipark"],
["Mount Kenya","/mountkenya"],
["Hell’s Gate","/hellsgate"],
["Tsavo East","/tsavoeast"],
["Tsavo West","/tsavowest"],
["Lake Nakuru","/lakenakuru"]
];





useEffect(()=>{


const scroll=()=>{

const height=document.documentElement.scrollHeight-window.innerHeight;

setProgress((window.scrollY/height)*100);

setScrolled(window.scrollY>40);

};



const close=()=>setLangOpen(false);


window.addEventListener("scroll",scroll);

document.addEventListener("click",close);


return()=>{

window.removeEventListener("scroll",scroll);

document.removeEventListener("click",close);

};


},[]);






const changeLanguage=(code,e)=>{

e.stopPropagation();

i18n.changeLanguage(code);

localStorage.setItem("lang",code);

setLangOpen(false);

};
const current=
languages.find(x=>x.code===i18n.language)
|| languages[0];
const closeMobile=()=>{
setMenuOpen(false);
};
return(<>


{/* SCROLL BAR */}

<div className="fixed top-0 left-0 w-full h-[3px] z-[999]">

<div className="h-full bg-yellow-400 transition-all" style={{width:`${progress}%`}}/>

</div>
<nav className={`fixed top-0 left-0 w-full z-[100] border-b border-white/10 backdrop-blur-xl transition-all duration-500 ${scrolled?"bg-[#151515] py-2":"bg-[#151515] py-4"}`}>
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="h-20 flex items-center justify-between">

{/* LOGO */}

<Link to="/home" className="flex items-center gap-3">
<img src={logo} className="w-11 h-11 rounded-full border border-yellow-400 object-cover"/>
<div>

<h2 className="text-yellow-300 font-bold">
Renlen Tours
</h2>

<p className="text-yellow-400 text-xs">
Safari Adventures
</p>
</div>
</Link>
{/* DESKTOP */}
<div className="hidden md:flex items-center gap-4">
<Link className="navBtn" to="/">
{t("home")}
</Link>
<div 
className="relative"
onMouseEnter={()=>setDestOpen(true)}
onMouseLeave={()=>setDestOpen(false)}
><button className="navBtn">

{t("destinations")} ▾

</button>

{destOpen &&

<div className="dropMenu">


<div className="titleDrop">
Explore Parks
</div>
{destinations.map(([name,path])=>(

<Link

key={path}

to={path}

className="dropItem"
>
{name}
</Link>))}</div>}</div>
<Link className="navBtn" to="/gallery">
{t("gallery")}
</Link>


<Link className="navBtn" to="/vehicles">
{t("vehicles")}
</Link>


<Link className="navBtn" to="/contact">
{t("contact")}
</Link>
<div 
className="relative"
onMouseEnter={()=>setLangOpen(true)}
onMouseLeave={()=>setLangOpen(false)}
>
<button className="navBtn">

{current.flag} {current.name}

</button>
<div className={`dropMenu right-0 w-40 ${langOpen?"show":"hide"}`}>
{languages.map(lang=>(

<button

key={lang.code}

onClick={(e)=>changeLanguage(lang.code,e)}

className="dropItem w-full text-left"

>

{lang.flag} {lang.name}

</button>
))}
</div></div><a
href="https://wa.me/254717554177"

className="bg-blue-400 text-black px-5 py-2 rounded-full font-bold"

>

 {t("book")}</a></div>
{/* MOBILE HEADER */}
<div className="md:hidden flex items-center gap-3"><div className="relative"><button

onClick={(e)=>{

e.stopPropagation();

setLangOpen(!langOpen);

}}

className="mobileLang"

>

{current.flag} {current.code.toUpperCase()}</button>
<div className={`dropMenu right-0 w-36 ${langOpen?"show":"hide"}`}>
{languages.map(lang=>(
<button

key={lang.code}

onClick={(e)=>changeLanguage(lang.code,e)}

className="dropItem w-full text-left"

>

{lang.flag} {lang.name}

</button>))}</div></div><button

onClick={()=>setMenuOpen(true)}

className="text-white text-3xl"

>

☰

</button></div></div></div>
{/* MOBILE DRAWER */}
<div className={`fixed top-0 right-0 h-full w-[88%] max-w-sm bg-[#151515] z-[200] border-l border-white/10 transition duration-500 md:hidden ${menuOpen?"translate-x-0":"translate-x-full"}`}>
<div className="p-5 flex justify-between items-center border-b border-white/10">
<div className="flex items-center gap-3">
<img src={logo} className="w-11 h-11 rounded-full border border-yellow-400"/>
<div>
<h2 className="text-white font-bold">
Renlen Tours
</h2>
<p className="text-yellow-400 text-xs">
Safari Adventures
</p>
</div>
</div>

<button

onClick={closeMobile}

className="text-white text-3xl">✕
</button>
</div>
<div className="p-5 space-y-4">


<Link

to="/"

onClick={closeMobile}

className="menuBtn">

🏠 {t("home")}

</Link><button

onClick={()=>setDestOpen(!destOpen)}

className="menuBtn w-full flex justify-between"

>

🌍 {t("destinations")}

<span>⌄</span>

</button>

{destOpen &&

<div className="bg-[#222] rounded-xl p-3">


{destinations.map(([name,path])=>(

<Link

key={path}

to={path}

onClick={closeMobile}

className="block text-gray-300 py-2"

>

🦁 {name}

</Link>

))}


</div>

}
<Link to="/gallery" onClick={closeMobile} className="menuBtn">

📸 {t("gallery")}

</Link>


<Link to="/vehicles" onClick={closeMobile} className="menuBtn">

🚙 {t("vehicles")}

</Link>


<Link to="/contact" onClick={closeMobile} className="menuBtn">

📞 {t("contact")}

</Link>





<a

href="https://wa.me/254717554177"

className="block text-center bg-yellow-400 text-black py-4 rounded-full font-bold"

>

🚀 {t("book")}</a></div></div></nav>
<style>{`

.navBtn{

color:white;
padding:10px 14px;
border-radius:12px;
background:#222;
transition:.3s;

}


.navBtn:hover{

color:#facc15;
background:#333;

}




.mobileLang{

background:#222;
border:1px solid rgba(255,255,255,.25);
color:white;
padding:8px 14px;
border-radius:999px;
font-size:12px;

}



.dropMenu{

position:absolute;
top:48px;
background:#151515;
border:1px solid rgba(255,255,255,.15);
border-radius:14px;
overflow:hidden;
box-shadow:0 20px 40px #000;
animation:drop .25s ease;

}



.dropItem{

display:block;
padding:12px 16px;
color:#ddd;

}


.dropItem:hover{

background:#fff;
color:#111;

}



.titleDrop{

padding:14px;
color:#facc15;
font-weight:bold;
border-bottom:1px solid #333;

}



.show{

opacity:1;
transform:translateY(0);

}



.hide{

opacity:0;
pointer-events:none;
transform:translateY(-10px);

}



.menuBtn{

display:block;
padding:15px;
border-radius:14px;
background:#222;
color:white;
border:1px solid rgba(255,255,255,.1);

}



@keyframes drop{

from{

opacity:0;
transform:translateY(-10px);

}

to{

opacity:1;
transform:translateY(0);

}

}


`}</style>


</>

)

}


export default Navbar;
