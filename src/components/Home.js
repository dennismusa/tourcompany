/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

//import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import image22 from "../assets/image22.jpg";
import west from "../assets/west.jpg";
import amboseli from "../assets/amboseli.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import meru from "../assets/meru.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import serengeti from "../assets/serengeti.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";
function Home() {
  useLanguageSync();
  const images = [meru, kenya,amboseli,Wilderbeast];
  const [index, setIndex] = useState(0);
const aboutImages = [cruiser2,image17,image16,nakuru,west,amboseli];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);


  // ================= SLIDER =================
  useEffect(()=>{

const slider=setInterval(()=>{

// HERO SLIDER
setIndex(prev=>(prev + 1) % images.length);

// ABOUT SLIDER
setAboutIndex(prev=>(prev + 1) % aboutImages.length);
setSmallAboutIndex(prev=>(prev + 1) % aboutImages.length);

},4000);



    return () => clearInterval(slider);
  }, [aboutImages.length, images.length]);

  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">


      
<section id="home" className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center overflow-hidden">
{/* IMAGE SLIDER */}
<div className="absolute inset-0">
{images.map((img,i)=>(
<div
key={i}
className="absolute inset-0 transition-all duration-[3500ms] ease-in-out"
style={{
backgroundImage:`url(${img})`,
backgroundSize:"cover",
backgroundPosition:"center",
opacity:i===index?1:0,
transform:i===index?"scale(1)":"scale(1.06)"
}}
/>

))}

</div>
{/* DARK LAYERS */}

<div className="absolute inset-0 bg-black/50"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/95 via-black/60 to-transparent"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/>
{/* ANIMATED LIGHT */}

<div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"/>

<div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[130px]"/>
{/* CONTENT */}

<div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 w-full">


<div className="max-w-2xl text-white">
{/* BADGE */}

<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-emerald-300/30 mb-5 animate-bounce">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"/>
<span className="text-[10px] md:text-xs uppercase tracking-[4px] text-emerald-200">

Renlen Tours & Safaris
</span></div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-xl drop-shadow-xl">

{t("heroTitle")}

</h1>
<p className="mt-4 text-gray-200 text-sm sm:text-base leading-7 max-w-lg">

{t("heroDesc")}

</p>{/* ACTION BUTTONS */}
<div className="mt-6 flex flex-col sm:flex-row gap-3">

</div>
{/* TRUST TAGS */}
<div className="mt-8 flex flex-wrap gap-3">
</div></div></div>
{/* SLIDER DOTS */}

<div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">

{images.map((_,i)=>(

<button

key={i}

onClick={()=>setIndex(i)}

className={`rounded-full transition-all duration-700 ${
i===index
?
"h-12 w-2 bg-yellow-400 shadow-lg shadow-yellow-400/50"
:
"h-2 w-2 bg-white/40 hover:bg-white"
}`}

/>

))}
</div>
{/* BOTTOM GLASS PANEL */}

</section>


      {/* ABOUT / EXPERIENCE SECTION */}
{/* ABOUT / EXPERIENCE SECTION */}
<section className="relative py-28 overflow-hidden bg-[#F6FAF8]">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40"/>

<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"/>
<div className="relative max-w-7xl mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
{/* IMAGES */}

<div className="relative">
{/* MAIN SLIDER IMAGE */}

<div className="group overflow-hidden rounded-[40px] shadow-2xl">

<img

src={aboutImages[aboutIndex]}

alt="Safari Experience"

className="w-full h-[520px] object-cover transition-all duration-[2000ms] group-hover:scale-110"

/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"/>


</div>{/* FLOATING SLIDER IMAGE */}
<div className="hidden md:block absolute -bottom-10 -right-10 w-[230px] h-[280px] overflow-hidden rounded-[30px] border-[8px] border-white shadow-2xl">


<img 
src={image22}
alt="Safari"
className="w-full h-full object-cover transition duration-[2000ms] hover:scale-110"
/>
</div>
{/* EXPERIENCE BADGE */}


<div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-6 py-5 rounded-3xl shadow-xl">


<h2 className="text-4xl font-black text-emerald-500">

10+

</h2>


<p className="text-gray-700 text-sm">

Years Experience

</p></div></div>
{/* CONTENT */}
<div>
<span className="uppercase tracking-[5px] text-emerald-500 font-bold">

ABOUT RENLEN TOURS

</span>
<h2 className="text-4xl md:text-6xl font-black leading-tight mt-6 text-gray-900">

Journey Beyond

<span className="block text-emerald-500">

Ordinary Travel

</span>

</h2>
<p className="mt-8 text-gray-600 leading-8 text-lg">

Renlen Tours and Safaris creates unforgettable wildlife experiences across Kenya and East Africa with premium vehicles, expert guides and carefully designed safari packages.

Explore Maasai Mara, Tsavo, Serengeti and Zanzibar while enjoying comfort, safety and authentic adventures.

</p>
{/* FEATURES */}
<div className="space-y-6 mt-10">


<div className="flex items-start gap-4">

<div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">

🚙

</div>


<div>

<h3 className="font-bold text-lg">

Luxury Safari Vehicles

</h3>
<p className="text-gray-600">

Modern Land Cruisers and safari vans.
</p>
</div>

</div><div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">

🦁

</div><div>
<h3 className="font-bold text-lg">

Professional Guides

</h3>
<p className="text-gray-600">

Local experts with wildlife experience.

</p></div></div>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">

🌍

</div>
<div>
<h3 className="font-bold text-lg">
East Africa Adventures
</h3>
<p className="text-gray-600">

Kenya and Tanzania combined safari packages.

</p></div></div></div></div></div></div>
</section>



{/* FEATURED DESTINATIONS */}
<section className="relative py-32 bg-[#070B08] text-white overflow-hidden">

  {/* Background glow */}
  <div className="absolute -top-40 left-[-120px] w-[600px] h-[600px] bg-yellow-400/10 blur-[140px] rounded-full"></div>
  <div className="absolute -bottom-40 right-[-120px] w-[600px] h-[600px] bg-emerald-400/10 blur-[140px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-xs tracking-[0.4em] uppercase text-yellow-400 border border-yellow-400/20 px-5 py-2 rounded-full bg-white/5">
        Unveiling East Africa
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-6 leading-[1.1]">
        Explore Africa’s
        <span className="block text-yellow-400">Iconic Destinations</span>
      </h2>

      <p className="mt-6 text-gray-300 leading-8">
        Scroll through curated safari experiences across Kenya, Tanzania, Uganda, and beyond.
      </p>
    </div>

    {/* HORIZONTAL SCROLL */}
    <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide">

      {[
        {
          img: Wilderbeast,
          title: "Wilderbeast Migration",
          trips: "6 Trips",
          desc: "Serengeti & Great Migration",
          tag: "Premium"
        },
        {
          img: gorilla,
          title: "Uganda Gorilla Trek",
          trips: "4 Trips",
          desc: "Rainforest encounters",
          tag: "Adventure"
        },
        {
          img: kenya,
          title: "Kenya Safaris",
          trips: "23 Trips",
          desc: "Maasai Mara Big Five",
          tag: "Popular"
        },
        {
          img: serengeti,
          title: "Serengeti Experience",
          trips: "8 Trips",
          desc: "Endless wildlife plains",
          tag: "Iconic"
        },
        {
          img: climbinglongonot,
          title: "Rwenzori Trails",
          trips: "3 Trips",
          desc: "Mountain trekking routes",
          tag: "Hiking"
        },
        {
          img: tanzania,
          title: "Tanzania Safaris",
          trips: "6 Trips",
          desc: "Serengeti & Great Migration",
          tag: "Premium"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-[30px] overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-700"
        >

          {/* IMAGE */}
          <div className="relative h-[520px] overflow-hidden">

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[1200ms]"
            />

            {/* DARK LAYER */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* GOLD LIGHT ON HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_60%)]"></div>

            {/* TAG */}
            <div className="absolute top-5 left-5">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 md:p-8 w-full">

              <span className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full backdrop-blur">
                {item.trips}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 mt-2">
                {item.desc}
              </p>

              {/* ACTION ROW */}
              <div className="flex items-center justify-between mt-6">

                <span className="text-xs text-white/50">
                  Swipe for more
                </span>

                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-yellow-300 group-hover:bg-yellow-400 group-hover:text-black transition">
                  →
                </div>

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= REVIEWS SECTION ================= */}
{/*<section className="py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
  
<div className="relative space-y-5 max-h-[650px] overflow-y-auto pr-2 scroll-smooth
  scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100
  hover:scrollbar-thumb-yellow-500">

  {/* TOP FADE (hides harsh cut-off) */}
  {/*<div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />

  {/* BOTTOM FADE */}
  {/*<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10" />


    {/* HEADER */}
   {/* <div className="text-center mb-14">
      <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-3">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        What Our Tourists Say
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Real experiences from travelers who explored Kenya with our safari services.
      </p>
    </div>

    {/* CONTENT GRID */}
   {/* <div className="grid lg:grid-cols-2 gap-14 items-start">

      {/* ================= FORM ================= */}
     {/* <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">

        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Leave a Review
        </h3>

        {/* SUCCESS MESSAGE */}
      {/*  {success && (
          <div className="mb-4 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm">
            Thank you! Your review has been submitted 🌍
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

        {/*  {/* NAME */}
      {/*    <input
            type="text"
            placeholder="Your Name"
            value={name}
            maxLength={30}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* MESSAGE */}
      {/*    <textarea
            placeholder="Share your safari experience..."
            value={message}
            maxLength={300}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 h-32 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
          />

          <div className="text-xs text-gray-400 text-right">
            {message.length}/300
          </div>

          {/* STAR RATING (CLICKABLE) */}
       {/*   <div>
            <label className="text-sm text-gray-600 font-medium block mb-2">
              Rating:
            </label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-2xl transition"
                >
                  {star <= rating ? "⭐" : "☆"}
                </button>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
      {/*    <button
            type="submit"
            disabled={!name || !message || loading}
            className={`w-full font-bold py-3 rounded-xl transition shadow-md ${
              !name || !message || loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 text-black"
            }`}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Your review helps other travelers choose better safari experiences.
          </p>

        </form>
      </div>

      {/* ================= REVIEWS DISPLAY ================= */}
     {/* <div>

        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Recent Reviews
        </h3>

        {/* LOADING STATE */}
     {/*   {loadingReviews ? (
          <div className="bg-white rounded-2xl p-10 text-center border">
            <p className="text-gray-500">Loading reviews...</p>
          </div>
        ) : (
          <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2">

            {reviews.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
                <p className="text-gray-500 font-medium">
                  No reviews yet
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Be the first to share your experience 🌍
                </p>
              </div>
            ) : (
              reviews.map((r, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >

                  {/* HEADER */}
        {/*          <div className="flex items-center justify-between mb-2">

                    {/* AVATAR */}
        {/*           <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
                        {r.name?.charAt(0)?.toUpperCase()}
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {r.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {new Date(r.date || Date.now()).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* STARS */}
        {/*            <span className="text-yellow-500 text-sm">
                      {"⭐".repeat(r.rating)}
                    </span>
                  </div>

                  {/* MESSAGE */}
         {/*         <p className="text-gray-600 text-sm leading-7">
                    {r.message}
                  </p>

                </div>
              ))
            )}

          </div>
        )}

      </div>

    </div>
  </div>
</section>



{/* DESTINATIONS & EXPERIENCES */}
<section className="py-28 bg-gradient-to-b from-[#F8F7F3] via-white to-[#F3F3EF] relative overflow-hidden">

  {/* Decorative background shapes */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/15 blur-[120px] rounded-full" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-20">
      <span className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs font-semibold">
        Explore East Africa
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
        Destinations Crafted for{" "}
        <span className="text-[#D4AF37]">Unforgettable Adventure</span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
        Discover handpicked safari destinations across Kenya and Tanzania,
        each offering unique wildlife, landscapes, and cultural richness.
      </p>
    </div>

    {/* GRID CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          img: tanzania,
          title: "Maasai Mara",
          icon: "🦁",
          color: "from-yellow-400/20",
          desc: "Home of the Big Five and the legendary Great Migration across endless savannah plains.",
        },
        {
          img: amboseli,
          title: "Amboseli National Park",
          icon: "🐘",
          color: "from-emerald-400/20",
          desc: "Iconic elephant herds roaming beneath Mount Kilimanjaro’s snow-capped peak.",
        },
        {
          img: nakuru,
          title: "Lake Nakuru",
          icon: "🦩",
          color: "from-pink-400/20",
          desc: "Flamingos, rhinos, and breathtaking Rift Valley scenery in one ecosystem.",
        },
        {
          img: west,
          title: "Tsavo National Park",
          icon: "🐆",
          color: "from-red-400/20",
          desc: "One of Africa’s largest wilderness areas with raw landscapes and red elephants.",
        },
        {
          img: serengeti,
          title: "Serengeti (Tanzania)",
          icon: "🌍",
          color: "from-sky-400/20",
          desc: "Endless plains, predator action, and the world’s greatest wildlife migration.",
        },
        
      ].map((place, index) => (
        <div
          key={index}
          className="group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 bg-white border border-gray-100 hover:-translate-y-2"
        >

          {/* IMAGE */}
          <div className="relative h-[260px] overflow-hidden">
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[1500ms]"
            />

            {/* gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${place.color} via-black/20 to-black/50`} />

            {/* icon badge */}
            <div className="absolute top-4 left-4 bg-white/90 text-black text-lg px-3 py-1 rounded-full shadow-md">
              {place.icon}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-7">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition">
              {place.title}
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              {place.desc}
            </p>
          </div>

          {/* bottom glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#D4AF37]/10 to-transparent pointer-events-none" />
        </div>
      ))}
    </div>

    {/* FOOTER STRIP */}
    <div className="mt-20 bg-gradient-to-r from-[#0F2418] via-[#102315] to-[#0B1A12] rounded-[40px] p-12 text-white shadow-2xl">
      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            Tailored Safaris
          </h3>
          <p className="text-gray-300 mt-3">
            Every itinerary is customized to your travel style and budget.
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            Kenya & Tanzania
          </h3>
          <p className="text-gray-300 mt-3">
            Seamless cross-border safari experiences across East Africa.
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            Expert Guides
          </h3>
          <p className="text-gray-300 mt-3">
            Professional local guides with deep wildlife expertise.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>


<section className="relative py-28 bg-gradient-to-b from-black via-[#06130D] to-black text-white overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        Trek & Climb East Africa
      </h2>

      <p className="mt-5 text-white/70 leading-8">
        Discover iconic trekking and climbing adventures across East Africa.
        From snow-capped peaks to volcanic craters and scenic highlands,
        experience nature at its most powerful form.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Kilimanjaro */}
      <div className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition">

        <div className="h-52 overflow-hidden">
          <img
            src={require("../assets/climbingkili.jpg")}
            alt="Mount Kilimanjaro"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-300">
            Mount Kilimanjaro
          </h3>
          <p className="text-sm text-white/70 mt-2 leading-6">
            Africa’s highest peak offering world-famous multi-day trekking routes
            through rainforests, glaciers, and alpine deserts.
          </p>
        </div>
      </div>

      {/* Mount Kenya */}
      <div className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition">

        <div className="h-52 overflow-hidden">
          <img
            src={require("../assets/climbingkenya.jpg")}
            alt="Mount Kenya"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-300">
            Mount Kenya
          </h3>
          <p className="text-sm text-white/70 mt-2 leading-6">
            Kenya’s highest mountain featuring scenic routes, glaciers,
            and challenging summit climbs for experienced hikers.
          </p>
        </div>
      </div>

      {/* Mount Longonot */}
      <div className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition">

        <div className="h-52 overflow-hidden">
          <img
            src={require("../assets/climbinglongonot.jpg")}
            alt="Mount Longonot"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-300">
            Mount Longonot
          </h3>
          <p className="text-sm text-white/70 mt-2 leading-6">
            A dramatic volcanic crater hike offering panoramic views of the Rift Valley
            and a rewarding full-crater trek.
          </p>
        </div>
      </div>

      {/* Hell's Gate */}
      <div className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition">

        <div className="h-52 overflow-hidden">
          <img
            src={require("../assets/hellsgate.jpg")}
            alt="Hell's Gate"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-300">
            Hell’s Gate
          </h3>
          <p className="text-sm text-white/70 mt-2 leading-6">
            A unique adventure park where you can hike, cycle, and explore cliffs,
            gorges, and geothermal landscapes.
          </p>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <a
        href="/contact"
        className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
      >
        Plan Your Trekking Adventure
      </a>
    </div>

  </div>
</section>


{/* WHY TRAVEL WITH US */}
<section className="py-24 bg-[#102315] text-white relative overflow-hidden">

  {/* Background glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* Header */}
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        Why Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">

        More Than A Safari,
        <span className="text-[#D4AF37]">
          {" "}An Experience
        </span>

      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

        We create unforgettable journeys with local expertise,
        luxury comfort and personalized adventures designed around
        your travel dreams.

      </p>

    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">
          🦁
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Expert Guides
        </h3>

        <p className="text-gray-300 leading-7">

          Professional local guides with deep wildlife and safari knowledge.

        </p>

      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">
          🚙
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Luxury Travel
        </h3>

        <p className="text-gray-300 leading-7">

          Comfortable safari vehicles built for adventure and long journeys.

        </p>

      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">
          🌍
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Eco Tourism
        </h3>

        <p className="text-gray-300 leading-7">

          Supporting conservation and local communities across Kenya.

        </p>

      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">
          ⭐
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Trusted Service
        </h3>

        <p className="text-gray-300 leading-7">

          Hundreds of travelers trust our safari experiences every year.

        </p>

      </div>

    </div>

  </div>

</section>

<section className="py-24 bg-gradient-to-br from-green-50 via-white to-yellow-50 relative overflow-hidden">

  {/* Decorative background */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl"></div>


  <div className="max-w-7xl mx-auto px-6 relative z-10">


    {/* Header */}
    <div className="text-center mb-16">


      <span className="
      inline-block
      px-5
      py-2
      rounded-full
      bg-green-100
      text-green-700
      font-semibold
      text-sm
      mb-5
      ">
        ⭐ Traveler Reviews
      </span>


      <h2 className="
      text-4xl 
      md:text-6xl 
      font-extrabold 
      text-gray-900
      ">
        What Our Travelers Say
      </h2>


      <p className="
      mt-5 
      text-gray-600 
      text-lg
      max-w-2xl
      mx-auto
      ">
        Real experiences from guests who explored Kenya with Renlen Tours and Safaris.
      </p>



      <div className="mt-6">

        <div className="
        text-yellow-400 
        text-4xl
        tracking-widest
        animate-pulse
        ">
          ★★★★★
        </div>


        <p className="
        mt-2
        font-bold
        text-gray-800
        ">
          4.7 Rating • 3 Google Reviews
        </p>


      </div>


    </div>




    {/* Reviews */}

    <div className="grid md:grid-cols-3 gap-8">


    {[
      {
        name:"Mohamed Mamo",
        role:"Google Reviewer",
        review:
        "Renlen Tours is the best tour operator in Kenya which can book you safari on."
      },

      {
        name:"Jeff Ndilai",
        role:"Local Guide",
        review:
        "Amazing experience and great service from Renlen Tours and Safaris."
      },


      {
        name:"Emmanuel Kaiseyie",
        role:"Google Reviewer",
        review:
        "Excellent safari experience. Highly recommended."
      }

    ].map((item,index)=>(


      <div
      key={index}
      className="
      group
      bg-white/80
      backdrop-blur-lg
      border
      border-gray-100
      rounded-3xl
      p-8
      shadow-xl
      hover:shadow-2xl
      hover:-translate-y-3
      transition
      duration-500
      relative
      ">


        {/* Quote */}

        <div className="
        absolute
        top-5
        right-6
        text-5xl
        text-green-100
        font-bold
        ">
          "
        </div>



        <div className="
        text-yellow-400
        text-2xl
        mb-5
        ">
          ★★★★★
        </div>



        <p className="
        text-gray-700
        leading-relaxed
        italic
        ">
          "{item.review}"
        </p>



        <div className="
        mt-8
        flex
        items-center
        gap-4
        ">


          <div className="
          w-12
          h-12
          rounded-full
          bg-gradient-to-br
          from-green-600
          to-green-900
          flex
          items-center
          justify-center
          text-white
          font-bold
          ">
            {item.name.charAt(0)}
          </div>



          <div>

          <h4 className="
          font-bold
          text-gray-900
          ">
            {item.name}
          </h4>


          <p className="
          text-sm
          text-gray-500
          ">
            {item.role}
          </p>

          </div>



        </div>



      </div>


    ))}


    </div>





    {/* Buttons */}

    <div className="
    flex
    justify-center
    gap-6
    mt-16
    flex-wrap
    ">
      <a
      href="https://search.google.com/local/writereview?placeid=ChIJj5Qk8H7FLxgR_6uAYZFoTn4"
      target="_blank"
      className="
      group
      relative
      overflow-hidden
      bg-green-700
      text-white
      px-10
      py-4
      rounded-full
      font-bold
      shadow-lg
      hover:scale-110
      transition
      duration-300
      " rel="noreferrer"
      >

      <span className="relative z-10">
      ⭐ Write a Google Review
      </span>


      <span className="
      absolute
      inset-0
      bg-green-900
      translate-x-[-100%]
      group-hover:translate-x-0
      transition
      duration-500
      ">
      </span>
      </a>
      <a
      href="https://search.google.com/local/reviews?placeid=ChIJj5Qk8H7FLxgR_6uAYZFoTn4"
      target="_blank"
      className="
      border-2
      border-green-700
      text-green-700
      px-10
      py-4
      rounded-full
      font-bold
      hover:bg-green-700
      hover:text-white
      hover:scale-110
      transition
      duration-300
      " rel="noreferrer"
      >

      View All Reviews

      </a>
    </div>  </div>
</section>


{/* FOOTER */}
<footer className="relative overflow-hidden bg-black text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">
          Renlen Tours and safaris
        </h2>
  
        <p className="text-xs text-gray-500 mb-1">
          Website designed & developed by Dennis Musa
        </p>
  
        <p className="text-gray-400 leading-8 mb-3">
          Professional safari vehicle hire services in kajiado ,kenya. Safe, comfortable, and unforgettable safari experiences.
        </p>
  
        <a
          href="https://dennismusa.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-500 hover:underline text-sm font-semibold"
        >
          View Developer Portfolio
        </a>
      </div>
  
      {/* Links */}
      <div>
        <h3 className="text-xl font-bold mb-5">Quick Links</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
  
          <li>
            <Link to="/vehicles" className="hover:text-yellow-500 transition">
              Fleet
            </Link>
          </li>
  
          <li>
            <Link to="/gallery" className="hover:text-yellow-500 transition">
              Gallery
            </Link>
          </li>
  
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
  
      {/* Services */}
      <div>
        <h3 className="text-xl font-bold mb-5">Services</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>Safari Vehicle Hire</li>
          <li>Airport Transfers</li>
          <li>Group Tours</li>
          <li>Private Safari Trips</li>
        </ul>
      </div>
  
      {/* Contact */}
      <div>
        <h3 className="text-xl font-bold mb-5">Contact Info</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>📍 Kajiado, Kenya</li>
          <li>📞 +254717554177</li>
          <li>✉ renlentours@gmail.com</li>
        </ul>
  
        <a
          href="https://wa.me/+254717554177"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
        >
          WhatsApp Booking
        </a>
      </div>
    </div>
  
    {/* Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
      © 2026 Renlen Tours and safaris . All Rights Reserved.
    </div>
  </footer>
    </div>
  );
}

export default Home;
