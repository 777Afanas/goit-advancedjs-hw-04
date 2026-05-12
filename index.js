import{a as P,S as q,i as n}from"./assets/vendor-C3hA4BqS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const E="https://pixabay.com/api/",B="39342201-f813eddd1adb93dcbf05db88a",u=15,p=async(t,r)=>{const a={params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:u}};return await P.get(E,a).then(s=>s.data)},m=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new q(".gallery a",{captionsData:"alt",captionsDelay:250}),f=t=>{const r=t.map(({webformatURL:a,largeImageURL:s,tags:e,likes:o,views:l,comments:v,downloads:F})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="gallery-info">
            <li>
              <span class="info-label">Likes</span>
              <span class="info-value">${o}</span>
            </li>
            <li>
              <span class="info-label">Views</span>
              <span class="info-value">${l}</span>
            </li>
            <li>
              <span class="info-label">Comments</span>
              <span class="info-value">${v}</span>
            </li>
            <li>
              <span class="info-label">Downloads</span>
              <span class="info-value">${F}</span>
            </li>
          </ul>
        </li>`).join("");m.insertAdjacentHTML("beforeend",r),M.refresh()},R=()=>{m.innerHTML=""},y=()=>{h.classList.remove("is-hidden")},L=()=>{h.classList.add("is-hidden")},b=()=>{g.classList.remove("is-hidden")},w=()=>{g.classList.add("is-hidden")},S={searchForm:document.querySelector(".js-form"),loadMoreBtn:document.querySelector(".load-more")};let c="",i=1,d=0;const O=async t=>{t.preventDefault();const{currentTarget:r}=t,a=r.elements["search-text"].value.trim();if(a===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}c=a,i=1,R(),w(),y();try{const s=await p(c,i);if(d=s.totalHits,s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"});return}f(s.hits),i*u>=d?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{L(),r.reset()}},$=async()=>{i+=1,w(),y();try{const t=await p(c,i);f(t.hits),x(),i*u>=d?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b()}catch(t){n.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(t)}finally{L()}},x=()=>{const t=document.querySelector(".gallery .gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})};S.searchForm.addEventListener("submit",O);S.loadMoreBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
