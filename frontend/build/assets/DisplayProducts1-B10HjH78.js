import{u as w,r as s,S as x,j as t,L as T,a as k,I as y,P as b,b as v}from"./index-D0jwD0ep.js";const E=r=>{const c=w(),a=r.productsCategory,{state:o}=s.useContext(x),n=s.useRef(null),[d,p]=s.useState([]),[u,l]=s.useState(!1),S=e=>{c(`/product/${e}`)};s.useEffect(()=>{(async()=>{l(!0);try{const i=await v.get(`http://localhost:4000/api/products/category?category=${a}`);p(i.data)}catch(i){console.error("Error fetching data: ",i)}finally{l(!1)}})()},[a]),s.useEffect(()=>{console.log("useEffect  ",o),n.current&&o!==null&&(o==="NEXT"?(console.log("the slick next is called"),n.current.slickNext(),console.log("the slick next is called")):n.current.slickPrev())},[o]);const[g,f]=s.useState(window.innerWidth<1024);s.useEffect(()=>{const e=()=>{f(window.innerWidth<1024)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const h={dots:!1,infinite:!1,speed:100,slidesToShow:6,slidesToScroll:6,initialSlide:0,swipe:g,responsive:[{breakpoint:1600,settings:{slidesToShow:5,slidesToScroll:5,initialSlide:0}},{breakpoint:1150,settings:{slidesToShow:4,slidesToScroll:4,initialSlide:0}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:0}},{breakpoint:767,settings:{slidesToShow:5,slidesToScroll:5,initialSlide:0}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:4,initialSlide:0}},{breakpoint:490,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:0}}]};return t.jsx("div",{children:u?t.jsx("div",{className:"text-center",children:t.jsx(T,{})}):t.jsx(k,{ref:e=>{n.current=e},...h,className:"slider-container",children:d.map((e,i)=>t.jsx("button",{onClick:()=>S(e._id),className:"text-left",children:t.jsx(y,{image:e.images[0],name:e.name,price:e.variants[0].price,discount:e.discount,rating:e.rating})},i))})})};E.propTypes={productsCategory:b.string.isRequired};export{E as default};
