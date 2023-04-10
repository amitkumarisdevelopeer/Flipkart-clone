// import { featureProductNav } from "./Data/featureProductNav.js"

// let search_input=document.getElementById("search_input")
// let form_search=document.getElementById("form_search")
// let recent_search=document.querySelector(".recent_search")

// let recentArray=["mobile","phone"]
// form_search.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     recentArray.unshift(search_input.value)
//     console.log(recentArray)
//     renderRecent()
// })

// function renderRecent(){
//     let recent_search_html=''
//     recentArray.forEach(el=>{
//       recent_search_html+=`
//       <div class="recent_list">
//       <i class="fa-solid fa-clock-rotate-left"></i>
//       <p>${el}</p>
//     </div>
//       `
//     })
//     recent_search.innerHTML=recent_search_html;
    
// }
// renderRecent()

// let product_listEL=document.querySelector(".product_list")
// let product_listHTML=''
// featureProductNav.forEach(el=>{
//    featureProductNav+=`
//    <div class="product_items">
//             <a href="${el.link}">
//             <div class="imgfeature">
//               <img src="${el.img}" alt="">
//             </div>
//             <p class="grocery">Grocery
//             ${el.name}
//              ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProdect_icon_more"></i>`:""}
//             </p>
//           </a>
//           </div>
//    `

// })
//  console.log(featureProductNav)
//  product_listEL.innerHTML=product_listHTML

var main2=document.querySelector(".main2")
var main3=document.querySelector(".main3")
var main4=document.querySelector(".main4")
var btn1l=document.querySelector("#btn1")
var btn2r=document.querySelector("#btn2")
  var a=0
btn2r.addEventListener("click",function(){
  if(a==0)
  {
    main3.style.right="0";
    a=1
  }
  else if(a==1)
  {
    main4.style.right="0"
    a=0
  }

  
})

 var b=0;
btn1l.addEventListener("click",function(){
  
   if(b==0)
  {
    main4.style.right="-100%"
    b=1
  }
   else if(b==1)
  {
    main3.style.right="-100%";
    b=0
  }

})

ScrollReveal({
  reset: true,
  distance:'60px',
  duration:2500,
  delay:400
  });
  ScrollReveal().reveal('img', { delay: 500,scale:1.3,origin:'top'});
  ScrollReveal().reveal('#footer', { delay: 500,scale:1.3,origin:'top'});