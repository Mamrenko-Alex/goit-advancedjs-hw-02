import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as u}from"./assets/vendor-651d7991.js";function a(m,e){const t=Math.random()>.5;return new Promise((s,r)=>{setTimeout(()=>{t?s({position:m,delay:e}):r({position:m,delay:e})},e)})}const o=document.querySelector(".form"),n={delay:o.elements.delay,step:o.elements.step,amount:o.elements.amount};o.addEventListener("submit",l);function l(m){m.preventDefault();const e={delay:n.delay.value,step:n.step.value,amount:n.amount.value};for(let t=Number(e.amount);t>0;t-=1)a(t,Number(e.delay)+(t-1)*Number(e.step)).then(({position:s,delay:r})=>{u.success({title:"Succes",message:`✅ Fulfilled promise ${s} in ${r}ms`})}).catch(({position:s,delay:r})=>{u.error({error:"Error",message:`❌ Rejected promise ${s} in ${r}ms`})})}
//# sourceMappingURL=commonHelpers3.js.map
