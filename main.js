!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){(()=>{const e=document.getElementById("content"),t=document.createElement("a");t.textContent="CONTACT";const n=document.createElement("li");n.setAttribute("class","contact"),n.appendChild(t);const c=document.createElement("a");c.textContent="MENU";const o=document.createElement("li");o.setAttribute("class","menu"),o.appendChild(c);const a=document.createElement("a");a.textContent="ABOUT";const d=document.createElement("li");d.setAttribute("class","about"),d.appendChild(a);const r=document.createElement("ul");r.setAttribute("class","nav navbar-nav navbar-right"),r.appendChild(d),r.appendChild(o),r.appendChild(n);const l=document.createElement("div");l.setAttribute("class","collapse navbar-collapse"),l.appendChild(r);const i=document.createElement("a");i.setAttribute("class","navbar-brand"),i.textContent="HAPPY SUSHI";const s=document.createElement("div");s.setAttribute("class","navbar-header"),s.appendChild(i);const u=document.createElement("div");u.setAttribute("class","container"),u.appendChild(s),u.appendChild(l);const m=document.createElement("div");m.setAttribute("class","navbar navbar-default navbar-fixed-top"),m.setAttribute("id","navbin"),m.appendChild(u),e.appendChild(m)})();(()=>{const e=document.getElementById("content");if(null!==document.getElementById("rest")){const t=document.getElementById("rest");e.removeChild(t)}const t=document.createElement("p");t.textContent="Home of the most delicious sushi you can find here on earth";const n=document.createElement("p");n.textContent="try it, love it, come back again, become a regular client, keep coming, lets become friends and you wont regret it";const c=document.createElement("p");c.textContent="we have it all. and the thing we dont have we find, dont be afraid to ask for your favorite dish.";const o=document.createElement("h3");o.textContent="DELICIOUS AND AFFORDABLE";const a=document.createElement("div");a.setAttribute("class","col-md-6 col-sm-6"),a.appendChild(o),a.appendChild(t),a.appendChild(n),a.appendChild(c);const d=document.createElement("img");d.setAttribute("src","/src/assets/imgs/sushi.jpg"),d.setAttribute("class","img-responsive img-bordered img-about"),d.setAttribute("alt","about img");const r=document.createElement("div");r.setAttribute("class","col-md-6 col-sm-6"),r.appendChild(d);const l=document.createElement("h1"),i=document.createElement("div");i.setAttribute("class","col-lg-12 col-md-12 col-sm-12 col-xs-12"),i.appendChild(l);const s=document.createElement("div");s.setAttribute("class","row"),s.appendChild(a),s.appendChild(r),s.appendChild(i);const u=document.createElement("div");u.setAttribute("class","container"),u.appendChild(s);const m=document.createElement("section");m.setAttribute("class","f-marg text-w"),m.setAttribute("id","pageplace"),m.appendChild(u);const p=document.createElement("div");p.setAttribute("id","rest"),p.appendChild(m),e.appendChild(p)})()}]);