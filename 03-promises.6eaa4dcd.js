!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){var t=function(t){var n,o,i,l=Number(e.target.elements.step.value)*t+Number(e.target.elements.delay.value);(n=t+1,o=l,i=Math.random()>.3,new Promise((function(e,t){setTimeout((function(){i?e("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):t("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)}))).then((function(e){r.Notify.success(e),console.log(e)})).catch((function(e){r.Notify.failure(e),console.log(e)})).finally((function(){Number(e.target.elements.amount.value)-t==1&&e.target.lastElementChild.removeAttribute("disabled")}))};e.preventDefault(),e.target.lastElementChild.setAttribute("disabled","");for(var n=0;n<Number(e.target.elements.amount.value);n+=1)t(n)}))}();
//# sourceMappingURL=03-promises.6eaa4dcd.js.map
