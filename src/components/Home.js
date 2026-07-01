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

  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">

      {/* IMAGE SIDE */}
      <div className="relative">

        <div className="group overflow-hidden rounded-[40px] shadow-2xl relative">

          <img
            src={aboutImages[aboutIndex]}
            alt={t("aboutTitle")}
            className="w-full h-[520px] object-cover transition-all duration-[2000ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>

        </div>

        <div className="hidden md:block absolute -bottom-10 -right-10 w-[230px] h-[280px] overflow-hidden rounded-[30px] border-[8px] border-white shadow-2xl">

          <img
            src={image22}
            alt={t("aboutTitle")}
            className="w-full h-full object-cover hover:scale-110 transition duration-[2000ms]"
          />

        </div>

        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-6 py-5 rounded-3xl shadow-xl">

          <h2 className="text-4xl font-black text-emerald-500">
            10+
          </h2>

          <p className="text-gray-700 text-sm">
            {t("yearsExperience")}
          </p>

        </div>

      </div>

      {/* CONTENT SIDE */}
      <div>

        <span className="uppercase tracking-[5px] text-emerald-500 font-bold">

          {t("aboutLabel")}

        </span>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mt-6 text-gray-900">

          {t("aboutHeading1")}

          <span className="block text-emerald-500">

            {t("aboutHeading2")}

          </span>

        </h2>

        <p className="mt-8 text-gray-600 leading-8 text-lg">

          {t("aboutDescription")}

          <br />
          <br />

          {t("aboutDescription2")}

        </p>

        {/* FEATURES */}

        <div className="space-y-6 mt-10">

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🚙
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("luxuryVehicles")}
              </h3>

              <p className="text-gray-600">
                {t("luxuryVehiclesDesc")}
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🦁
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("professionalGuides")}
              </h3>

              <p className="text-gray-600">
                {t("professionalGuidesDesc")}
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🌍
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("eastAfricaAdventure")}
              </h3>

              <p className="text-gray-600">
                {t("eastAfricaAdventureDesc")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

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
        {t("unveilingTitle")}
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-6 leading-[1.1]">
        {t("exploreAfrica")}
        <span className="block text-yellow-400">
          {t("iconicDestinations")}
        </span>
      </h2>

      <p className="mt-6 text-gray-300 leading-8">
        {t("scrollDescription")}
      </p>

    </div>

    {/* HORIZONTAL SCROLL */}
    <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide">

      {[
        {
          img: Wilderbeast,
          title: t("migrationTitle"),
          trips: t("migrationTrips"),
          desc: t("migrationDesc"),
          tag: t("premium")
        },
        {
          img: gorilla,
          title: t("gorillaTitle"),
          trips: t("gorillaTrips"),
          desc: t("gorillaDesc"),
          tag: t("adventure")
        },
        {
          img: kenya,
          title: t("kenyaTitle"),
          trips: t("kenyaTrips"),
          desc: t("kenyaDesc"),
          tag: t("popular")
        },
        {
          img: serengeti,
          title: t("serengetiTitle"),
          trips: t("serengetiTrips"),
          desc: t("serengetiDesc"),
          tag: t("iconic")
        },
        {
          img: climbinglongonot,
          title: t("rwenzoriTitle"),
          trips: t("rwenzoriTrips"),
          desc: t("rwenzoriDesc"),
          tag: t("hiking")
        },
        {
          img: tanzania,
          title: t("tanzaniaTitle"),
          trips: t("tanzaniaTrips"),
          desc: t("tanzaniaDesc"),
          tag: t("premium")
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_60%)]"></div>

            <div className="absolute top-5 left-5">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

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

              <div className="flex items-center justify-between mt-6">

                <span className="text-xs text-white/50">
                  {t("swipeMore")}
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





{/* DESTINATIONS & EXPERIENCES */}
<section className="py-28 bg-gradient-to-b from-[#F8F7F3] via-white to-[#F3F3EF] relative overflow-hidden">

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/15 blur-[120px] rounded-full" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-20">

      <span className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs font-semibold">
        {t("exploreEastAfrica") || "Explore East Africa"}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
        {t("destinationsTitlePart1") || "Destinations Crafted for"}{" "}
        <span className="text-[#D4AF37]">
          {t("destinationsTitleHighlight") || "Unforgettable Adventure"}
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
        {t("destinationsDesc")}
      </p>

    </div>

    {/* GRID CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          img: tanzania,
          title: t("maasaiMara") || "Maasai Mara",
          icon: "🦁",
          color: "from-yellow-400/20",
          desc: t("maasaiMaraDesc")
        },
        {
          img: amboseli,
          title: t("amboseli"),
          icon: "🐘",
          color: "from-emerald-400/20",
          desc: t("amboseliDesc")
        },
        {
          img: nakuru,
          title: t("lakeNakuru"),
          icon: "🦩",
          color: "from-pink-400/20",
          desc: t("nakuruDesc")
        },
        {
          img: west,
          title: t("tsavo"),
          icon: "🐆",
          color: "from-red-400/20",
          desc: t("tsavoDesc")
        },
        {
          img: serengeti,
          title: t("serengeti"),
          icon: "🌍",
          color: "from-sky-400/20",
          desc: t("serengetiDesc")
        }
      ].map((place, index) => (
        <div
          key={index}
          className="group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 bg-white border border-gray-100 hover:-translate-y-2"
        >

          <div className="relative h-[260px] overflow-hidden">
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[1500ms]"
            />

            <div className={`absolute inset-0 bg-gradient-to-t ${place.color} via-black/20 to-black/50`} />

            <div className="absolute top-4 left-4 bg-white/90 text-black text-lg px-3 py-1 rounded-full shadow-md">
              {place.icon}
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition">
              {place.title}
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              {place.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

    {/* FOOTER STRIP */}
    <div className="mt-20 bg-gradient-to-r from-[#0F2418] via-[#102315] to-[#0B1A12] rounded-[40px] p-12 text-white shadow-2xl">

      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("tailoredSafaris")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("tailoredSafarisDesc")}
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("kenyaTanzania")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("kenyaTanzaniaDesc")}
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("expertGuides")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("expertGuidesDesc")}
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


<section className="relative py-28 bg-gradient-to-b from-black via-[#06130D] to-black text-white overflow-hidden">

  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">{t("trekTitle") || "Trek & Climb East Africa"}</h2>
      <p className="mt-5 text-white/70 leading-8">{t("trekDesc")}</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {image:"climbingkili.jpg",title:"kilimanjaro",desc:"Experience Africa’s highest peak with breathtaking landscapes, glaciers, and unforgettable sunrise views above the clouds.",location:"Tanzania",height:"5,895m",duration:"5 - 9 Days",level:"Challenging",season:"June - October"},
        {image:"climbingkenya.jpg",title:"mountKenya",desc:"Explore Kenya’s legendary mountain with dramatic valleys, alpine scenery, and stunning views from Point Lenana.",location:"Kenya",height:"5,199m",duration:"4 - 6 Days",level:"Moderate",season:"January - March"},
        {image:"climbinglongonot.jpg",title:"longonot",desc:"A perfect day adventure hiking through volcanic terrain, crater trails, and panoramic views of the Great Rift Valley.",location:"Naivasha, Kenya",height:"2,776m",duration:"1 Day",level:"Easy - Moderate",season:"All Year"},
        {image:"hellsgate.jpg",title:"hellsGate",desc:"Enjoy an active outdoor adventure with hiking, cycling, cliffs, wildlife, and spectacular volcanic landscapes.",location:"Nakuru, Kenya",height:"2,190m",duration:"1 Day",level:"Easy",season:"All Year"}
      ].map((item,index)=>(

        <div key={index} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2">

          <div className="h-56 overflow-hidden relative">
            <img src={require(`../assets/${item.image}`)} alt={t(item.title)} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-yellow-300">{t(item.title)}</h3>
          </div>

          <div className="p-6">

            <p className="text-sm text-white/70 leading-7 mb-5">{item.desc}</p>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex justify-between"><span>📍 Location</span><span>{item.location}</span></div>
              <div className="flex justify-between"><span>⛰ Height</span><span>{item.height}</span></div>
              <div className="flex justify-between"><span>🕒 Duration</span><span>{item.duration}</span></div>
              <div className="flex justify-between"><span>🥾 Difficulty</span><span>{item.level}</span></div>
              <div className="flex justify-between"><span>☀ Best Time</span><span>{item.season}</span></div>
            </div>

           

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* WHY TRAVEL WITH US */}
<section className="py-24 bg-[#102315] text-white relative overflow-hidden">

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        {t("whyChooseUs")}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {t("whyTitlePart1")}{" "}
        <span className="text-[#D4AF37]">
          {t("whyTitleHighlight")}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        {t("whyDescription")}
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🦁</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("expertGuidesTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("expertGuidesDesc")}
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🚙</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("luxuryTravelTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("luxuryTravelDesc")}
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("ecoTourismTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("ecoTourismDesc")}
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("trustedServiceTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("trustedServiceDesc")}
        </p>

      </div>

    </div>

  </div>

</section>

<section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">

  <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-5">
        Reviews
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        What Our Clients Say
      </h2>

      <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
        Real feedback from travelers who experienced our safaris and tours.
      </p>

      <div className="mt-6">
        <div className="text-yellow-400 text-4xl tracking-widest">
          ★★★★★
        </div>
        <p className="mt-2 font-bold text-gray-800">
          4.8 Average Rating
        </p>
      </div>

    </div>

    {/* REVIEWS */}
    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="text-yellow-400 text-2xl mb-5">★★★★★</div>
        <p className="text-gray-700 italic leading-relaxed">
          Renlen tour's it's the best tour operator now in Kenya which can book you safari on time and deliver excellent service.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">M</div>
          <div>
            <h4 className="font-bold text-gray-900">Mohamed Mamo</h4>
            <p className="text-sm text-gray-500">Google Reviewer</p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="text-yellow-400 text-2xl mb-5">★★★★★</div>
        <p className="text-gray-700 italic leading-relaxed">
          Excellent👌. You better try their services, very professional and reliable tour operator.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">S</div>
          <div>
            <h4 className="font-bold text-gray-900">Steve Ndilai</h4>
            <p className="text-sm text-gray-500">Client</p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="text-yellow-400 text-2xl mb-5">★★★★★</div>
        <p className="text-gray-700 italic leading-relaxed">
          Good service and reliable communication. Highly recommended for safari bookings.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">J</div>
          <div>
            <h4 className="font-bold text-gray-900">Jeff Ndilai</h4>
            <p className="text-sm text-gray-500">Local Guide</p>
          </div>
        </div>
      </div>

    </div>

    {/* BUTTONS */}
    <div className="flex flex-wrap justify-center gap-6 mt-16">

      <a
        href="https://search.google.com/local/writereview?placeid=ChIJj5Qk8H7FLxgR_6uAYZFoTn4"
        target="_blank"
        rel="noreferrer"
        className="bg-green-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
      >
        Write a Review
      </a>

      <a
        href="https://search.google.com/local/reviews?placeid=ChIJj5Qk8H7FLxgR_6uAYZFoTn4"
        target="_blank"
        rel="noreferrer"
        className="border-2 border-green-700 text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-700 hover:text-white hover:scale-105 transition"
      >
        View All Reviews
      </a>

    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="relative overflow-hidden bg-black text-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* BRAND */}
    <div>

      <h2 className="text-3xl font-bold text-yellow-500 mb-2">
        {t("footerBrand")}
      </h2>

      <p className="text-xs text-gray-500 mb-1">
        {t("footerDeveloper")}
      </p>

      <p className="text-gray-400 leading-8 mb-3">
        {t("footerDescription")}
      </p>

      <a
        href="https://dennismusa.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500 hover:underline text-sm font-semibold"
      >
        {t("footerPortfolio")}
      </a>

    </div>

    {/* LINKS */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("quickLinks")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
          <Link to="/" className="hover:text-yellow-500 transition">
            {t("home")}
          </Link>
        </li>

        <li>
          <Link to="/vehicles" className="hover:text-yellow-500 transition">
            {t("fleet")}
          </Link>
        </li>

        <li>
          <Link to="/gallery" className="hover:text-yellow-500 transition">
            {t("gallery")}
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-yellow-500 transition">
            {t("contact")}
          </Link>
        </li>

      </ul>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("services")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>{t("service1")}</li>
        <li>{t("service2")}</li>
        <li>{t("service3")}</li>
        <li>{t("service4")}</li>

      </ul>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("contactInfo")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>{t("location")}</li>
        <li>{t("phone")}</li>
        <li>{t("email")}</li>

      </ul>

      <a
        href="https://wa.me/+254717554177"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
      >
        {t("whatsappBooking")}
      </a>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
    {t("footerBottom")}
  </div>

</footer>
    </div>
  );
}

export default Home;
