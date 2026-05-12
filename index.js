import{a as d,S as f,i}from"./assets/vendor-C3hA4BqS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="https://pixabay.com/api/",g="39342201-f813eddd1adb93dcbf05db88a",h=a=>{const r={params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return d.get(m,r).then(t=>t.data)},l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionsDelay:250}),b=a=>{const r=a.map(({webformatURL:t,largeImageURL:o,tags:e,likes:s,views:n,comments:u,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="gallery-info">
            <li>
              <span class="info-label">Likes</span>
              <span class="info-value">${s}</span>
            </li>
            <li>
              <span class="info-label">Views</span>
              <span class="info-value">${n}</span>
            </li>
            <li>
              <span class="info-label">Comments</span>
              <span class="info-value">${u}</span>
            </li>
            <li>
              <span class="info-label">Downloads</span>
              <span class="info-value">${p}</span>
            </li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()},L=()=>{l.innerHTML=""},F=()=>{c.classList.remove("is-hidden")},S=()=>{c.classList.add("is-hidden")},v={searchForm:document.querySelector(".js-form")},q=a=>{a.preventDefault();const{currentTarget:r}=a,t=r.elements["search-text"].value.trim();if(t===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}L(),F(),h(t).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"});return}b(o.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{S(),r.reset()})};v.searchForm.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
