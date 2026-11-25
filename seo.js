/* ===== seo.js – per-view titles/descriptions + DE/EN SEO text =====
   Loads AFTER script.js. It does not change any existing code. */
(() => {
'use strict';
const META = {
 de:{
  home:['Mexikanisches Restaurant Düsseldorf | Pssst Bandido – Tacos, Mariachi & Cocktails','Authentisch mexikanisch essen in Düsseldorf: Tacos, Tamales, Margaritas, Terrasse und Live-Mariachi bei Kerzenschein. Jetzt Tisch bei Pssst Bandido reservieren.'],
  menu:['Speisekarte: Tacos, Tamales & mehr | Pssst Bandido Düsseldorf','Mexikanische Speisekarte in Düsseldorf: Vorspeisen, Tacos, Burritos, Tamales und Desserts mit Preisen. Pssst Bandido – frisch und hausgemacht.'],
  about:['Über uns & Mariachi-Abende | Pssst Bandido Düsseldorf','Mexikanisches Restaurant mit Hacienda-Ambiente, Terrasse und Live-Mariachi in Düsseldorf. Feiern und Gruppen willkommen.'],
  gallery:['Galerie | Pssst Bandido Düsseldorf','Fotos vom mexikanischen Restaurant Pssst Bandido in Düsseldorf: Gastraum, Terrasse, Cocktails, Gerichte und Mariachis.'],
  reserve:['Tisch reservieren | Pssst Bandido Düsseldorf','Online einen Tisch im mexikanischen Restaurant Pssst Bandido in Düsseldorf anfragen – auch für Gruppen und Feiern.'],
  contact:['Kontakt, Adresse & Öffnungszeiten | Pssst Bandido Düsseldorf','So erreichen Sie das mexikanische Restaurant Pssst Bandido in Düsseldorf: Adresse, Telefon, Öffnungszeiten und Anfahrt.']},
 en:{
  home:['Mexican Restaurant Düsseldorf | Pssst Bandido – Tacos, Mariachi & Cocktails','Authentic Mexican food in Düsseldorf: tacos, tamales, margaritas, terrace and live mariachi by candlelight. Reserve your table at Pssst Bandido.'],
  menu:['Menu: Tacos, Tamales & more | Pssst Bandido Düsseldorf','Mexican menu in Düsseldorf: starters, tacos, burritos, tamales and desserts with prices. Pssst Bandido – fresh and homemade.'],
  about:['About us & Mariachi nights | Pssst Bandido Düsseldorf','Mexican restaurant with hacienda ambience, terrace and live mariachi in Düsseldorf. Groups and celebrations welcome.'],
  gallery:['Gallery | Pssst Bandido Düsseldorf','Photos of the Mexican restaurant Pssst Bandido in Düsseldorf: dining room, terrace, cocktails, dishes and mariachis.'],
  reserve:['Reserve a table | Pssst Bandido Düsseldorf','Request a table at the Mexican restaurant Pssst Bandido in Düsseldorf online – groups and celebrations welcome.'],
  contact:['Contact, address & opening hours | Pssst Bandido Düsseldorf','How to reach the Mexican restaurant Pssst Bandido in Düsseldorf: address, phone, opening hours and directions.']}
};
const H1 = {de:['Mexikanisches Restaurant in Düsseldorf:','echtes','Fiesta-Feeling.'], en:['Mexican restaurant in Düsseldorf:','real','fiesta feeling.']};
const GBP = {de:['Auf Google bewerten','Route planen'], en:['Review us on Google','Get directions']};

function setMeta(sel, attr, val){ const el=document.querySelector(sel); if(el) el.setAttribute(attr,val); }
function update(){
  const lang = localStorage.getItem('lang')==='en' ? 'en' : 'de';
  const view = (location.hash.replace(/^#\/?/,'')||'home').split('?')[0];
  const m = (META[lang][view] || META[lang].home);
  document.title = m[0];
  setMeta('meta[name="description"]','content',m[1]);
  setMeta('meta[property="og:title"]','content',m[0]);
  setMeta('meta[property="og:description"]','content',m[1]);
  document.documentElement.lang = lang;
  const h = H1[lang];
  const a=document.getElementById('seo-h1-a'), b=document.getElementById('seo-h1-b'), c=document.getElementById('seo-h1-c');
  if(a&&b&&c){ a.textContent=h[0]; b.textContent=h[1]; c.textContent=h[2]; }
  const g1=document.getElementById('gbp-reviews-text'), g2=document.getElementById('gbp-route-text');
  if(g1) g1.textContent=GBP[lang][0];
  if(g2) g2.textContent=GBP[lang][1];
}
addEventListener('hashchange', update);
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setTimeout(update,0)));
update();
})();
