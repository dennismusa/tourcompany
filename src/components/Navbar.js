/* eslint-disable jsx-a11y/alt-text */

import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Menu} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

import logo from "../assets/logo.jpg";


function Navbar(){

const [menuOpen,setMenuOpen]=useState(false);
const [mobileDestOpen,setMobileDestOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);
const [scrollProgress,setScrollProgress]=useState(0);

const {t}=useTranslation();



const destinations=[
{ name:"Aberdare National Park",path:"/aberdare"},
{ name:"Meru National Park",path:"/meru"},
{ name:"Amboseli National Park",path:"/amboseli"},
{ name:"Nairobi National Park",path:"/nairobipark"},
{ name:"Mount Kenya",path:"/mountkenya"},
{ name:"Hell’s Gate",path:"/hellsgate"},
{ name:"Tsavo East",path:"/tsavoeast"},
{ name:"Tsavo West",path:"/tsavowest"},
{ name:"Lake Nakuru",path:"/lakenakuru"}
];




useEffect(()=>{

const scroll=()=>{

const top=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

setScrollProgress((top/height)*100);

setScrolled(top>50);

};


window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);





const changeLanguage=(e)=>{

const lang=e.target.value;

i18n.changeLanguage(lang);

localStorage.setItem("lang",lang);

};



const closeMobile=()=>{

setMenuOpen(false);

setMobileDestOpen(false);

};




const navItem=
"text-white px-3 py-2 rounded-xl bg-white/5 hover:text-yellow-400 hover:bg-white/10 transition";





return(

<>


{/* TOP PROGRESS */}

<div className="fixed top-0 left-0 w-full h-[3px] z-[999]">

<div className="h-full bg-yellow-400 transition-all" style={{width:`${scrollProgress}%`}}/>

</div>






<nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 transition duration-500 ${scrolled?"bg-black/90 py-2":"bg-black/70 py-4"}`}>




<div className="max-w-7xl mx-auto px-4 md:px-8">

<div className="h-20 flex items-center justify-between">



{/* LOGO */}

<Link to="/" className="flex items-center gap-3">


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






{/* DESKTOP MENU */}

<div className="hidden md:flex items-center gap-4">


<Link to="/" className={navItem}>
{t("home")}
</Link>




<Menu as="div" className="relative">


<Menu.Button className={navItem}>
{t("destinations")} ▾
</Menu.Button>



<Menu.Items className="absolute top-12 left-0 w-72 bg-black rounded-xl border border-white/10 shadow-xl overflow-hidden">


<div className="px-4 py-3 text-yellow-400 font-bold border-b border-white/10">
Explore Parks
</div>



{destinations.map(d=>(

<Menu.Item key={d.path}>

<Link to={d.path} className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/5">

{d.name}

</Link>

</Menu.Item>

))}


</Menu.Items>


</Menu>





<Link to="/gallery" className={navItem}>
{t("gallery")}
</Link>


<Link to="/vehicles" className={navItem}>
{t("vehicles")}
</Link>


<Link to="/contact" className={navItem}>
{t("contact")}
</Link>





<select value={i18n.language} onChange={changeLanguage} className="bg-black text-white border border-white/20 rounded-full px-3 py-2">

<option value="en">🇬🇧 English</option>

<option value="fr">🇫🇷 French</option>

<option value="de">🇩🇪 German</option>

<option value="es">🇪🇸 Spanish</option>

</select>





<a href="https://wa.me/254717554177" className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold">

🚀 {t("bookNow")}

</a>



</div>







{/* MOBILE */}

<div className="md:hidden flex items-center gap-3">


<select value={i18n.language} onChange={changeLanguage} className="bg-white/10 text-white border border-white/20 rounded-full px-2 py-2 text-xs">

<option value="en">🇬🇧</option>

<option value="fr">🇫🇷</option>

<option value="de">🇩🇪</option>

<option value="es">🇪🇸</option>

</select>





<button onClick={()=>setMenuOpen(true)} className="text-white text-3xl">

☰

</button>


</div>



</div>

</div>









{/* MOBILE OVERLAY */}

{menuOpen && (

<div onClick={closeMobile} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"/>

)}









{/* MOBILE DRAWER */}

<div className={`fixed top-0 right-0 h-full w-[88%] max-w-sm bg-[#121212] border-l border-white/10 z-50 transition duration-500 md:hidden ${menuOpen?"translate-x-0":"translate-x-full"}`}>


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





<button onClick={closeMobile} className="text-white text-3xl">

✕

</button>


</div>








<div className="p-5 space-y-4">


<Link to="/" onClick={closeMobile} className="block p-4 rounded-xl bg-white/5 text-white">

🏠 {t("home")}

</Link>




<button onClick={()=>setMobileDestOpen(!mobileDestOpen)} className="w-full flex justify-between p-4 rounded-xl bg-white/5 text-white">

🌍 {t("destinations")}

<span>⌄</span>

</button>





{mobileDestOpen && (

<div className="bg-white/5 rounded-xl p-3 space-y-2">

{destinations.map(d=>(

<Link key={d.path} to={d.path} onClick={closeMobile} className="block px-3 py-2 text-gray-300 hover:text-yellow-400">

🦁 {d.name}

</Link>

))}

</div>

)}






<Link to="/gallery" onClick={closeMobile} className="block p-4 rounded-xl bg-white/5 text-white">

📸 {t("gallery")}

</Link>




<Link to="/vehicles" onClick={closeMobile} className="block p-4 rounded-xl bg-white/5 text-white">

🚙 {t("vehicles")}

</Link>





<Link to="/contact" onClick={closeMobile} className="block p-4 rounded-xl bg-white/5 text-white">

📞 {t("contact")}

</Link>





<a href="https://wa.me/254717554177" className="block text-center bg-yellow-400 text-black font-bold py-4 rounded-full">

🚀 {t("bookNow")}

</a>


</div>



</div>





</nav>


</>

)

}


export default Navbar;
