const t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let r;function l(e){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,console.log(`%c Changing color to ${t.style.backgroundColor}`,`color: ${t.style.backgroundColor}`)}o.setAttribute("disabled",""),e.addEventListener("click",(function(e){l(t),r=setInterval((()=>{l(t)}),1e3),e.target.setAttribute("disabled",""),e.target.nextElementSibling.removeAttribute("disabled")})),o.addEventListener("click",(function(t){clearInterval(r),t.target.setAttribute("disabled",""),t.target.previousElementSibling.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.ca3e2925.js.map
