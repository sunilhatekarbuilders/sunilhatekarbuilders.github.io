import{r as o,j as e}from"./index-C6n_O6R9.js";const x="_achievementsSection_soox9_3",b="_achievementsTitle_soox9_33",g="_achievementsSubtitle_soox9_47",j="_container_soox9_65",y="_statBox_soox9_87",w="_statValue_soox9_129",k="_statLabel_soox9_149",l={achievementsSection:x,achievementsTitle:b,achievementsSubtitle:g,container:j,statBox:y,statValue:w,statLabel:k},N=()=>{const s=[{label:"Acre Land",value:5},{label:"Flats",value:238},{label:"Apartments",value:7}],[a,n]=o.useState(!1);return o.useEffect(()=>{const i=new IntersectionObserver(([m])=>{m.isIntersecting&&n(!0)},{threshold:.5}),r=document.getElementById("achievementsSection");return r&&i.observe(r),()=>i.disconnect()},[]),e.jsxs("section",{id:"achievementsSection",className:l.achievementsSection,children:[e.jsx("h2",{className:l.achievementsTitle,children:"Our Achievements"}),e.jsx("p",{className:l.achievementsSubtitle,children:"We are proud of our contributions to the community, delivering top-tier residences and quality living experiences."}),e.jsxs("div",{className:l.container,children:[s.map((i,r)=>e.jsxs("div",{className:l.statBox,children:[e.jsx("h2",{className:l.statValue,children:a?e.jsx(p,{endValue:i.value}):0}),e.jsx("p",{className:l.statLabel,children:i.label})]},r)),e.jsxs("div",{className:l.statBox,children:[e.jsxs("h2",{className:l.statValue,children:[a?e.jsx(p,{endValue:5}):0," Star"]}),e.jsx("p",{className:l.statLabel,children:"Amenities"})]})]})]})},p=({endValue:s})=>{const[a,n]=o.useState(0);return o.useEffect(()=>{let i=0;const m=Math.ceil(s*10/1e3),t=setInterval(()=>{i+=m,i>=s?(n(s),clearInterval(t)):n(i)},10);return()=>clearInterval(t)},[s]),e.jsx("span",{children:a})},S="_customerSection_1reiy_1",I="_carousel_1reiy_19",B="_testimonial_1reiy_39",C="_customerImage_1reiy_59",P="_feedback_1reiy_77",T="_name_1reiy_91",A="_navButton_1reiy_105",h={customerSection:S,carousel:I,testimonial:B,customerImage:C,feedback:P,name:T,navButton:A},_=[{name:"Akash Tayade",feedback:"I appreciate the transparency of Sunil Hatekar Builders. No hidden charges, no last-minute surprises. They delivered exactly what they promised, and that’s rare in today’s real estate market.",image:"profile3.avif"},{name:"Vivek Patani",feedback:"Living at PAWAN PARK is like a dream come true. The modern amenities combined with the warmth of a close-knit community make every day special. Kudos to Sunil Hatekar Builders for envisioning and bringing to life such a remarkable project.",image:"profile2.avif"},{name:"Shweta Patil",feedback:"The spaciousness of the apartments at PAWAN PARK is truly commendable. Every corner speaks of luxury and comfort. Sunil Hatekar Builders has crafted a masterpiece in the heart of the city, and I’m proud to call it my home.",image:"profile.png"}],$=()=>{const[s,a]=o.useState(0);o.useEffect(()=>{const r=setInterval(()=>{a(m=>(m+1)%_.length)},5e3);return()=>clearInterval(r)},[]);const n=()=>{a(r=>(r+1)%_.length)},i=()=>{a(r=>(r-1+_.length)%_.length)};return e.jsx("section",{className:h.customerSection,children:e.jsxs("div",{className:h.carousel,children:[e.jsx("button",{className:h.navButton,onClick:i,children:"‹"}),e.jsxs("div",{className:h.testimonial,children:[e.jsxs("p",{className:h.feedback,children:['"',_[s].feedback,'"']}),e.jsxs("p",{className:h.name,children:["- ",_[s].name]})]}),e.jsx("button",{className:h.navButton,onClick:n,children:"›"})]})})},E="_slider_17vda_3",L="_slide_17vda_3",V="_active_17vda_53",W="_content_17vda_69",H="_slideIn_17vda_1",R="_callButton_17vda_153",D="_prev_17vda_201",K="_next_17vda_203",O="_dots_17vda_259",z="_dot_17vda_259",M="_activeDot_17vda_295",d={slider:E,slide:L,active:V,content:W,slideIn:H,callButton:R,prev:D,next:K,dots:O,dot:z,activeDot:M},U=()=>{const s=[{id:1,title:"Introducing Pawan Park",subtitle:"Spacious luxury apartments with top amenities in a community designed for elegance and comfort.",image:"video-thumbnail1.webp"},{id:2,title:"Transforming lives one brick at a time",subtitle:"Every brick laid, every design envisioned, is a promise of a home filled with memories, comfort, and warmth.",image:"pawan-vatika1.webp"},{id:3,title:"Happiness your way",subtitle:"Luxury Life, World Class Amenities, Prime Location, Safety Assured",image:"hero1.webp"}],[a,n]=o.useState(0);o.useEffect(()=>{const t=setInterval(()=>{n(c=>c===s.length-1?0:c+1)},5e3);return()=>clearInterval(t)},[s.length]);const i=()=>{n(t=>t===s.length-1?0:t+1)},r=()=>{n(t=>t===0?s.length-1:t-1)},m=t=>{n(t)};return e.jsxs("div",{className:d.slider,children:[s.map((t,c)=>e.jsx("div",{className:`${d.slide} ${c===a?d.active:""}`,style:{background:`linear-gradient(to bottom, rgba(30, 30, 30, 0.7), rgba(0, 0, 0, 0.8)), url(${t.image}) no-repeat center center/cover`},children:c===a&&e.jsxs("div",{className:d.content,children:[e.jsx("h2",{children:t.title}),e.jsx("h3",{children:t.subtitle}),e.jsx("a",{href:"tel:+918983115132",className:d.callButton,children:"📞 Contact Now!"})]})},t.id)),e.jsx("button",{className:d.prev,onClick:r,children:"❮"}),e.jsx("button",{className:d.next,onClick:i,children:"❯"}),e.jsx("div",{className:d.dots,children:s.map((t,c)=>e.jsx("span",{className:`${d.dot} ${c===a?d.activeDot:""}`,onClick:()=>m(c)},c))})]})},F="_sliderContainer_1689i_1",G="_slider_1689i_1",Y="_slide_1689i_1",q="_name_1689i_65",Q="_leftButton_1689i_95",X="_rightButton_1689i_97",f={sliderContainer:F,slider:G,slide:Y,name:q,leftButton:Q,rightButton:X},v=[{src:"bedroom.webp",name:"Bedroom"},{src:"hall.webp",name:"Spacious Hall"},{src:"kitchen.webp",name:"Modular Kitchen"},{src:"gym.jpg",name:"Open Gym"},{src:"Garden.webp",name:"Walking Track"}],J=()=>{const[s,a]=o.useState(0),[n,i]=o.useState(3);o.useEffect(()=>{const t=()=>{window.innerWidth<768?i(1):window.innerWidth<1280?i(2):i(3)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),o.useEffect(()=>{const t=setInterval(()=>{a(c=>c>=v.length-n?0:c+1)},5e3);return()=>clearInterval(t)},[n]);const r=()=>{a(t=>t===0?v.length-n:t-1)},m=()=>{a(t=>t>=v.length-n?0:t+1)};return e.jsxs("div",{className:f.sliderContainer,children:[n>1&&e.jsx("button",{className:f.leftButton,onClick:r,children:"◁"}),e.jsx("div",{className:f.slider,style:{transform:`translateX(-${s*(100/n)}%)`},children:v.map((t,c)=>e.jsxs("div",{className:f.slide,children:[e.jsx("img",{src:t.src,alt:t.name}),e.jsx("div",{className:f.name,children:t.name})]},c))}),n>1&&e.jsx("button",{className:f.rightButton,onClick:m,children:"▷"})]})},Z=({videoId:s,thumbnail:a})=>{const[n,i]=o.useState(!1),r=()=>{i(!0)};return e.jsx("div",{style:{width:"100%",height:"100%"},children:n?e.jsx("iframe",{src:`https://www.youtube.com/embed/${s}?autoplay=1`,title:"YouTube Video Player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%"}}):e.jsx("div",{style:{width:"100%",height:"100%",background:`url(${a||`https://img.youtube.com/vi/${s}/maxresdefault.webp`}) no-repeat center center / cover`,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},onClick:r,children:e.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",borderRadius:"50%",width:"60px",height:"60px",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"24px",cursor:"pointer"},children:"▶"})})})},ee="_home_udskl_1",te="_hero_udskl_11",se="_featured_udskl_33",ne="_animate_udskl_65",ae="_featured_h2_udskl_77",ie="_fadeIn_udskl_1",re="_featured_project_udskl_97",oe="_featured_video_udskl_121",ce="_featured_info_udskl_185",le="_fadeUp_udskl_1",de="_featured_amenities_udskl_427",u={home:ee,hero:te,featured:se,animate:ne,featured_h2:ae,fadeIn:ie,featured_project:re,featured_video:oe,featured_info:ce,fadeUp:le,featured_amenities:de},me=()=>{const s=o.useRef(null);return o.useEffect(()=>{const a=new IntersectionObserver(([n])=>{n.isIntersecting?s.current.classList.add(u.animate):s.current.classList.remove(u.animate)},{threshold:.2});return s.current&&a.observe(s.current),()=>{s.current&&a.unobserve(s.current)}},[]),e.jsxs("div",{className:u.home,children:[e.jsx("section",{className:u.hero,children:e.jsx(U,{})}),e.jsxs("section",{className:u.featured,ref:s,children:[e.jsx("h2",{className:u.featured_h2,children:"Building dreams, Transforming lives"}),e.jsxs("div",{className:u.featured_project,children:[e.jsx("div",{className:u.featured_video,children:e.jsx(Z,{videoId:"DgQSIat8fMY",thumbnail:"video-thumbnail1.webp"})}),e.jsxs("div",{className:u.featured_info,children:[e.jsx("h2",{children:"Pawan Park"}),e.jsx("h3",{children:"Where dreams become reality"}),e.jsx("p",{children:"At Pawan Park, we believe in more than just constructing buildings; we craft experiences. Each of our 238 apartments isn't just a space but a canvas painted with the hues of luxury, comfort, and sophistication. Here, modernity meets tradition, creating a harmonious blend that resonates with the aspirations of our residents. Step in and feel the difference."})]})]})]}),e.jsxs("section",{className:u.featured_amenities,children:[e.jsx("h2",{children:"Amenities we provide"}),e.jsx(J,{})]}),e.jsx(N,{}),e.jsx($,{})]})};export{me as default};
