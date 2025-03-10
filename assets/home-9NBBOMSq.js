import{r as o,j as e}from"./index-Bmr9cZLn.js";const b="_achievementsSection_soox9_3",j="_achievementsTitle_soox9_33",y="_achievementsSubtitle_soox9_47",k="_container_soox9_65",N="_statBox_soox9_87",w="_statValue_soox9_129",I="_statLabel_soox9_149",u={achievementsSection:b,achievementsTitle:j,achievementsSubtitle:y,container:k,statBox:N,statValue:w,statLabel:I},S=()=>{const t=[{label:"Acre Land",value:5},{label:"Flats",value:238},{label:"Apartments",value:7}],[n,a]=o.useState(!1);return o.useEffect(()=>{const r=new IntersectionObserver(([d])=>{d.isIntersecting&&a(!0)},{threshold:.5}),i=document.getElementById("achievementsSection");return i&&r.observe(i),()=>r.disconnect()},[]),e.jsxs("section",{id:"achievementsSection",className:u.achievementsSection,children:[e.jsx("h2",{className:u.achievementsTitle,children:"Our Achievements"}),e.jsx("p",{className:u.achievementsSubtitle,children:"We are proud of our contributions to the community, delivering top-tier residences and quality living experiences."}),e.jsxs("div",{className:u.container,children:[t.map((r,i)=>e.jsxs("div",{className:u.statBox,children:[e.jsx("h2",{className:u.statValue,children:n?e.jsx(p,{endValue:r.value}):0}),e.jsx("p",{className:u.statLabel,children:r.label})]},i)),e.jsxs("div",{className:u.statBox,children:[e.jsxs("h2",{className:u.statValue,children:[n?e.jsx(p,{endValue:5}):0," Star"]}),e.jsx("p",{className:u.statLabel,children:"Amenities"})]})]})]})},p=({endValue:t})=>{const[n,a]=o.useState(0);return o.useEffect(()=>{let r=0;const d=Math.ceil(t*10/1e3),s=setInterval(()=>{r+=d,r>=t?(a(t),clearInterval(s)):a(r)},10);return()=>clearInterval(s)},[t]),e.jsx("span",{children:n})},B="_customerSection_1reiy_1",C="_carousel_1reiy_19",P="_testimonial_1reiy_39",A="_customerImage_1reiy_59",T="_feedback_1reiy_77",$="_name_1reiy_91",L="_navButton_1reiy_105",v={customerSection:B,carousel:C,testimonial:P,customerImage:A,feedback:T,name:$,navButton:L},f=[{name:"Akash Tayade",feedback:"I appreciate the transparency of Sunil Hatekar Builders. No hidden charges, no last-minute surprises. They delivered exactly what they promised, and that’s rare in today’s real estate market.",image:"profile3.avif"},{name:"Vivek Patani",feedback:"Living at PAWAN PARK is like a dream come true. The modern amenities combined with the warmth of a close-knit community make every day special. Kudos to Sunil Hatekar Builders for envisioning and bringing to life such a remarkable project.",image:"profile2.avif"},{name:"Shweta Patil",feedback:"The spaciousness of the apartments at PAWAN PARK is truly commendable. Every corner speaks of luxury and comfort. Sunil Hatekar Builders has crafted a masterpiece in the heart of the city, and I’m proud to call it my home.",image:"profile.png"}],E=()=>{const[t,n]=o.useState(0);o.useEffect(()=>{const i=setInterval(()=>{n(d=>(d+1)%f.length)},5e3);return()=>clearInterval(i)},[]);const a=()=>{n(i=>(i+1)%f.length)},r=()=>{n(i=>(i-1+f.length)%f.length)};return e.jsx("section",{className:v.customerSection,children:e.jsxs("div",{className:v.carousel,children:[e.jsx("button",{className:v.navButton,onClick:r,children:"‹"}),e.jsxs("div",{className:v.testimonial,children:[e.jsxs("p",{className:v.feedback,children:['"',f[t].feedback,'"']}),e.jsxs("p",{className:v.name,children:["- ",f[t].name]})]}),e.jsx("button",{className:v.navButton,onClick:a,children:"›"})]})})},W="_slider_17vda_3",V="_slide_17vda_3",O="_active_17vda_53",R="_content_17vda_69",H="_slideIn_17vda_1",D="_callButton_17vda_153",F="_prev_17vda_201",K="_next_17vda_203",M="_dots_17vda_259",U="_dot_17vda_259",G="_activeDot_17vda_295",m={slider:W,slide:V,active:O,content:R,slideIn:H,callButton:D,prev:F,next:K,dots:M,dot:U,activeDot:G},Y=()=>{const t=[{id:1,title:"Introducing Pawan Park",subtitle:"Spacious luxury apartments with top amenities in a community designed for elegance and comfort.",image:"video-thumbnail1.webp"},{id:2,title:"Transforming lives one brick at a time",subtitle:"Every brick laid, every design envisioned, is a promise of a home filled with memories, comfort, and warmth.",image:"pavan-vatika1.webp"},{id:3,title:"Happiness your way",subtitle:"Luxury Life, World Class Amenities, Prime Location, Safety Assured",image:"hero1.webp"}],[n,a]=o.useState(0);o.useEffect(()=>{const s=setInterval(()=>{a(l=>l===t.length-1?0:l+1)},5e3);return()=>clearInterval(s)},[t.length]);const r=()=>{a(s=>s===t.length-1?0:s+1)},i=()=>{a(s=>s===0?t.length-1:s-1)},d=s=>{a(s)};return e.jsxs("div",{className:m.slider,children:[t.map((s,l)=>e.jsx("div",{className:`${m.slide} ${l===n?m.active:""}`,style:{background:`linear-gradient(to bottom, rgba(30, 30, 30, 0.7), rgba(0, 0, 0, 0.8)), url(${s.image}) no-repeat center center/cover`},children:l===n&&e.jsxs("div",{className:m.content,children:[e.jsx("h2",{children:s.title}),e.jsx("h3",{children:s.subtitle}),e.jsx("a",{href:"tel:+918983115132",className:m.callButton,children:"📞 Contact Now!"})]})},s.id)),e.jsx("button",{className:m.prev,onClick:i,children:"❮"}),e.jsx("button",{className:m.next,onClick:r,children:"❯"}),e.jsx("div",{className:m.dots,children:t.map((s,l)=>e.jsx("span",{className:`${m.dot} ${l===n?m.activeDot:""}`,onClick:()=>d(l)},l))})]})},q="_sliderContainer_1mv2p_3",z="_sliderWrapper_1mv2p_27",Q="_slider_1mv2p_3",X="_card_1mv2p_59",J="_cardImage_1mv2p_91",Z="_cardContent_1mv2p_111",ee="_prevBtn_1mv2p_143",te="_nextBtn_1mv2p_143",se="_fullscreenOverlay_1mv2p_187",ne="_fullscreenImage_1mv2p_213",h={sliderContainer:q,sliderWrapper:z,slider:Q,card:X,cardImage:J,cardContent:Z,prevBtn:ee,nextBtn:te,fullscreenOverlay:se,fullscreenImage:ne},ae=()=>{const t=[{id:1,content:"Modular Kitchen",image:"kitchen.webp"},{id:2,content:"Spacious Bedroom",image:"bedroom.webp"},{id:3,content:"Open Gym",image:"gym.webp"},{id:4,content:"Living Room",image:"hall.webp"},{id:5,content:"Garden",image:"opengym1.webp"}],[n,a]=o.useState(0),[r,i]=o.useState(null),d=t.length;o.useEffect(()=>{const c=setInterval(s,4e3);return()=>clearInterval(c)},[]);const s=()=>{a(c=>c>=d-1?0:c+1)},l=()=>{a(c=>c===0?d-1:c-1)},x=c=>{i(c)},g=()=>{i(null)};return e.jsxs("div",{className:h.sliderContainer,children:[e.jsx("div",{className:h.sliderWrapper,children:e.jsx("div",{className:h.slider,style:{transform:`translateX(-${n*(window.innerWidth<=768?105:50)}%)`},children:t.map(c=>e.jsxs("div",{className:h.card,children:[e.jsx("img",{src:c.image,alt:c.content,className:h.cardImage,onClick:()=>x(c.image)}),e.jsx("div",{className:h.cardContent,children:e.jsx("p",{children:c.content})})]},c.id))})}),e.jsx("button",{className:h.prevBtn,onClick:l,children:"❮"}),e.jsx("button",{className:h.nextBtn,onClick:s,children:"❯"}),r&&e.jsx("div",{className:h.fullscreenOverlay,onClick:g,children:e.jsx("img",{src:r,className:h.fullscreenImage})})]})},re=({videoId:t,thumbnail:n})=>{const[a,r]=o.useState(!1),i=()=>{r(!0)};return e.jsx("div",{style:{width:"100%",height:"100%"},children:a?e.jsx("iframe",{src:`https://www.youtube.com/embed/${t}?autoplay=1`,title:"YouTube Video Player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%"}}):e.jsx("div",{style:{width:"100%",height:"100%",background:`url(${n||`https://img.youtube.com/vi/${t}/maxresdefault.webp`}) no-repeat center center / cover`,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},onClick:i,children:e.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",borderRadius:"50%",width:"60px",height:"60px",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"24px",cursor:"pointer"},children:"▶"})})})},ie="_home_udskl_1",ce="_hero_udskl_11",oe="_featured_udskl_33",le="_animate_udskl_65",de="_featured_h2_udskl_77",ue="_fadeIn_udskl_1",me="_featured_project_udskl_97",he="_featured_video_udskl_121",_e="_featured_info_udskl_185",ve="_fadeUp_udskl_1",fe="_featured_amenities_udskl_427",_={home:ie,hero:ce,featured:oe,animate:le,featured_h2:de,fadeIn:ue,featured_project:me,featured_video:he,featured_info:_e,fadeUp:ve,featured_amenities:fe},xe=()=>{const t=o.useRef(null);return o.useEffect(()=>{const n=new IntersectionObserver(([a])=>{a.isIntersecting?t.current.classList.add(_.animate):t.current.classList.remove(_.animate)},{threshold:.2});return t.current&&n.observe(t.current),()=>{t.current&&n.unobserve(t.current)}},[]),e.jsxs("div",{className:_.home,children:[e.jsx("section",{className:_.hero,children:e.jsx(Y,{})}),e.jsxs("section",{className:_.featured,ref:t,children:[e.jsx("h2",{className:_.featured_h2,children:"Building dreams, Transforming lives"}),e.jsxs("div",{className:_.featured_project,children:[e.jsx("div",{className:_.featured_video,children:e.jsx(re,{videoId:"DgQSIat8fMY",thumbnail:"video-thumbnail1.webp"})}),e.jsxs("div",{className:_.featured_info,children:[e.jsx("h2",{children:"Pawan Park"}),e.jsx("h3",{children:"Where dreams become reality"}),e.jsx("p",{children:"At Pawan Park, we believe in more than just constructing buildings; we craft experiences. Each of our 238 apartments isn't just a space but a canvas painted with the hues of luxury, comfort, and sophistication. Here, modernity meets tradition, creating a harmonious blend that resonates with the aspirations of our residents. Step in and feel the difference."})]})]})]}),e.jsxs("section",{className:_.featured_amenities,children:[e.jsx("h2",{children:"Amenities we provide"}),e.jsx(ae,{})]}),e.jsx(S,{}),e.jsx(E,{})]})};export{xe as default};
