/* ===== Pssst Bandido Düsseldorf – script ===== */
(() => {
'use strict';

/* ---------- Translations (DE default) ---------- */
const T = {
 de:{skip:'Zum Inhalt springen',nav_home:'Start',nav_menu:'Speisekarte',nav_about:'Über uns',nav_gallery:'Galerie',nav_contact:'Kontakt',nav_reserve:'Reservieren',
  hero_eyebrow:'Mexikanisches Restaurant · Düsseldorf',hero_t1:'Pssst… hier gibt’s',hero_t2:'echtes',hero_t3:'Fiesta-Feeling.',
  hero_sub:'Mexikanische Küche bei Kerzenschein, kühle Cocktails und Mariachi-Musik – mitten in Düsseldorf.',btn_reserve:'Tisch reservieren',btn_menu:'Speisekarte ansehen',hero_caption:'Auténtico · seit [JAHR]',
  fam_eyebrow:'Entdecken',fam_title:'Essen, Musik und Abende, die bleiben',fam_body:'Zwei Dinge machen uns aus: eine Küche mit Herz und eine Bühne für echte Mariachis.',
  fam1_eb:'Küche',fam1_t:'Speisekarte',fam1_p:'Tacos, Tamales, Quesadillas und hausgemachte Desserts – frisch zubereitet.',
  fam2_eb:'Musik & Feiern',fam2_t:'Mariachi & Gruppen',fam2_p:'Live-Musik, Geburtstage und Firmenfeiern – wir machen aus Ihrem Abend eine Fiesta.',more:'Mehr entdecken',
  st1:'Gerichte auf der Karte',st2:'Mariachi-Abende',st3:'Plätze auf der Terrasse',st4:'Cocktails & Margaritas',st_note:'[Platzhalter – bitte echte Zahlen eintragen.]',
  pil_eyebrow:'Unser Versprechen',pil_title:'Warum Pssst Bandido',
  p1_t:'Frisch & hausgemacht',p1_p:'Guacamole, Salsas und Tamales – mit Zeit und Liebe zubereitet.',
  p2_t:'Gemütliches Ambiente',p2_p:'Alte Holzbalken, warmes Licht und Kerzen auf jedem Tisch.',
  p3_t:'Fiesta mit Musik',p3_p:'Mariachis spielen live – für Stimmung, die man nicht vergisst.',
  ev_eyebrow:'So läuft ein Abend',ev_title:'Vom Ankommen bis zum letzten Lied',ev_body:'Ein Abend bei uns ist mehr als Essen: Sie kommen an, stoßen an und lassen sich verwöhnen.',ev_cta:'Jetzt Tisch sichern →',
  e1_t:'Ankommen',e1_p:'Kerzenschein & Terrasse',e2_t:'Aperitif',e2_p:'Margarita & Nachos',e3_t:'Hauptgang',e3_p:'Tacos, Tamales & mehr',e4_t:'Mariachi',e4_p:'Live-Musik am Tisch',
  faq_eyebrow:'Häufige Fragen',faq_title:'Gut zu wissen',
  cb_eyebrow:'Kontakt',cb_title:'Wir freuen uns auf Sie',cb_body:'Fragen, Gruppenanfragen oder Reservierungen – schreiben Sie uns oder rufen Sie an.',cb_btn:'Kontakt öffnen →',
  menu_eyebrow:'Sabores de México',menu_title:'Speisekarte',menu_lead:'„Neues aus der Küche“ – Auszug aus unserer aktuellen Karte. Preise in Euro.',
  menu_note:'Änderungen vorbehalten. Bei Allergien oder Unverträglichkeiten fragen Sie bitte unser Team.',menu_card1:'Originalkarte 1',menu_card2:'Originalkarte 2',
  tab_starters:'Vorspeisen',tab_mains:'Hauptspeisen',tab_desserts:'Nachspeisen',tab_drinks:'Getränke',veg:'vegetarisch',
  drinks_text:'Cocktails, Margaritas, Säfte und mehr – die aktuelle Getränkekarte erhalten Sie im Restaurant. [Getränkekarte und Preise bitte ergänzen.]',
  about_eyebrow:'Unsere Geschichte',about_title:'Ein Stück Mexiko im Herzen von Düsseldorf',
  about_p1:'Hinter der grünen Neon-Leuchtschrift wartet ein Restaurant wie eine kleine Hacienda: warme Wände, alte Holzbalken, flackernde Kerzen und der Duft von frisch gebackenen Tortillas.',
  about_p2:'Bei uns kommen mexikanische Klassiker und neue Ideen aus der Küche auf den Tisch. Dazu gibt es Cocktails, Margaritas und an besonderen Abenden live Mariachi-Musik.',
  about_note:'[Platzhaltertext – bitte durch die echte Geschichte des Restaurants ersetzen.]',
  ev2_eb:'¡Viva la música!',ev2_t:'Live Mariachi',ev2_p:'Gitarren, Violine und Trompete: Wenn die Mariachis aufspielen, wird das Abendessen zur Fiesta.',ev2_note:'[Termine bitte ergänzen.]',
  gr_eb:'Gruppen & Feiern',gr_t:'Gemeinsam feiern',gr_p:'Geburtstag, Firmenfeier oder Familienfest – Gruppenmenüs auf Anfrage, im Gastraum oder auf der Terrasse.',gr_cta:'Gruppe anfragen →',
  gal_eyebrow:'Impressionen',gal_title:'Galerie',
  res_eyebrow:'Reservierung',res_title:'Tisch reservieren',f_name:'Name',f_contact:'Telefon oder E-Mail',f_date:'Datum',f_time:'Uhrzeit',f_guests:'Personen',
  f_notes:'Anmerkungen (Allergien, Anlass …)',f_submit:'Anfrage senden',
  f_ok:'Danke! Ihre Anfrage ist vorbereitet. Bitte senden Sie sie per E-Mail ab oder rufen Sie uns an, um die Reservierung zu bestätigen.',f_mail:'Per E-Mail senden',f_call:'Anrufen',
  e_req:'Pflichtfeld',e_date:'Datum darf nicht in der Vergangenheit liegen',e_guests:'1 bis 40 Personen',e_contact:'Bitte Telefonnummer oder gültige E-Mail angeben',
  ri_eyebrow:'Gut zu wissen',ri_title:'Ihre Reservierung',ri_1:'Wir bestätigen Ihre Anfrage per E-Mail oder Telefon.',ri_2:'Gruppen ab [X] Personen bitte telefonisch anfragen.',ri_3:'Bitte nennen Sie uns Allergien im Voraus.',
  c_eyebrow:'Besuchen Sie uns',c_title:'Kontakt & Öffnungszeiten',c_note:'[Platzhalter – bitte echte Angaben eintragen.]',c_addr:'Adresse',c_phone:'Telefon',c_hours:'Öffnungszeiten',c_map:'Google-Maps-Einbettung hier einfügen',
  rev_eyebrow:'Gästestimmen',rev_title:'Das sagen unsere Gäste',rev_note:'[Platzhalter – bitte durch echte Bewertungen ersetzen.]',
  r1:'Platzhalter: Toller Abend mit leckerem Essen und richtig guter Stimmung.',r2:'Platzhalter: Das Ambiente ist wunderschön, und die Mariachis waren ein Highlight.',r3:'Platzhalter: Freundlicher Service und super Cocktails auf der Terrasse.',
  mail_subject:'Tischreservierung',
  mail_body:d=>`Hallo Pssst Bandido,\n\nich möchte gern reservieren:\nName: ${d.name}\nKontakt: ${d.contact}\nDatum: ${d.date}\nUhrzeit: ${d.time}\nPersonen: ${d.guests}\nAnmerkungen: ${d.notes||'-'}\n\nViele Grüße`,
  faq:[['Wie sind die Öffnungszeiten?','[Öffnungszeiten bitte eintragen.]'],['Kann ich einen Tisch reservieren?','Ja, über das Formular auf der Reservierungsseite oder telefonisch unter [TELEFON].'],['Gibt es Angebote für Gruppen?','Ja, wir bieten Gruppenmenüs und Feiern im Gastraum oder auf der Terrasse. Bitte fragen Sie uns an.'],['Was ist mit Allergien?','Bitte sagen Sie uns Bescheid, wir beraten Sie gern zu Zutaten und Alternativen.']],
  ticker:['Tacos','Nachos','Margaritas','Mariachi','Terrasse','Fiesta','Gruppen','Kerzenlicht']},
 en:{skip:'Skip to content',nav_home:'Home',nav_menu:'Menu',nav_about:'About',nav_gallery:'Gallery',nav_contact:'Contact',nav_reserve:'Reserve',
  hero_eyebrow:'Mexican restaurant · Düsseldorf',hero_t1:'Pssst… this is where',hero_t2:'real',hero_t3:'fiesta feeling lives.',
  hero_sub:'Mexican cuisine by candlelight, cool cocktails and mariachi music – in the middle of Düsseldorf.',btn_reserve:'Reserve a table',btn_menu:'View menu',hero_caption:'Auténtico · since [YEAR]',
  fam_eyebrow:'Discover',fam_title:'Food, music and evenings you remember',fam_body:'Two things define us: a kitchen with heart and a stage for real mariachis.',
  fam1_eb:'Kitchen',fam1_t:'Menu',fam1_p:'Tacos, tamales, quesadillas and homemade desserts – freshly prepared.',
  fam2_eb:'Music & celebrations',fam2_t:'Mariachi & groups',fam2_p:'Live music, birthdays and company parties – we turn your evening into a fiesta.',more:'Discover more',
  st1:'Dishes on the menu',st2:'Mariachi nights',st3:'Seats on the terrace',st4:'Cocktails & margaritas',st_note:'[Placeholder – please enter real numbers.]',
  pil_eyebrow:'Our promise',pil_title:'Why Pssst Bandido',
  p1_t:'Fresh & homemade',p1_p:'Guacamole, salsas and tamales – made with time and love.',
  p2_t:'Cozy atmosphere',p2_p:'Old wooden beams, warm light and candles on every table.',
  p3_t:'Fiesta with music',p3_p:'Mariachis play live – for an atmosphere you won’t forget.',
  ev_eyebrow:'How an evening goes',ev_title:'From arriving to the last song',ev_body:'An evening with us is more than dinner: you arrive, raise a glass and let us spoil you.',ev_cta:'Book your table →',
  e1_t:'Arrive',e1_p:'Candlelight & terrace',e2_t:'Aperitif',e2_p:'Margarita & nachos',e3_t:'Main course',e3_p:'Tacos, tamales & more',e4_t:'Mariachi',e4_p:'Live music at your table',
  faq_eyebrow:'FAQ',faq_title:'Good to know',
  cb_eyebrow:'Contact',cb_title:'We look forward to seeing you',cb_body:'Questions, group requests or reservations – write to us or give us a call.',cb_btn:'Open contact →',
  menu_eyebrow:'Sabores de México',menu_title:'Menu',menu_lead:'"Neues aus der Küche" (what’s new from the kitchen) – selection from our current menu. Prices in euros.',
  menu_note:'Subject to change. If you have allergies or intolerances, please ask our team.',menu_card1:'Original menu card 1',menu_card2:'Original menu card 2',
  tab_starters:'Starters',tab_mains:'Mains',tab_desserts:'Desserts',tab_drinks:'Drinks',veg:'vegetarian',
  drinks_text:'Cocktails, margaritas, juices and more – ask for the current drinks menu in the restaurant. [Please add drinks menu and prices.]',
  about_eyebrow:'Our story',about_title:'A piece of Mexico in the heart of Düsseldorf',
  about_p1:'Behind the green neon sign waits a restaurant like a little hacienda: warm walls, old wooden beams, flickering candles and the smell of freshly baked tortillas.',
  about_p2:'Mexican classics and new ideas come out of our kitchen. Add cocktails, margaritas and, on special evenings, live mariachi music.',
  about_note:'[Placeholder text – please replace with the restaurant’s real story.]',
  ev2_eb:'¡Viva la música!',ev2_t:'Live mariachi',ev2_p:'Guitars, violin and trumpet: when the mariachis play, dinner becomes a fiesta.',ev2_note:'[Please add dates.]',
  gr_eb:'Groups & celebrations',gr_t:'Celebrate together',gr_p:'Birthday, company party or family event – group menus on request, inside or on the terrace.',gr_cta:'Request group booking →',
  gal_eyebrow:'Impressions',gal_title:'Gallery',
  res_eyebrow:'Reservation',res_title:'Reserve a table',f_name:'Name',f_contact:'Phone or email',f_date:'Date',f_time:'Time',f_guests:'Guests',
  f_notes:'Notes (allergies, occasion …)',f_submit:'Send request',
  f_ok:'Thank you! Your request is ready. Please send it by email or call us to confirm the reservation.',f_mail:'Send by email',f_call:'Call us',
  e_req:'Required',e_date:'Date cannot be in the past',e_guests:'1 to 40 guests',e_contact:'Please enter a phone number or valid email',
  ri_eyebrow:'Good to know',ri_title:'Your reservation',ri_1:'We confirm your request by email or phone.',ri_2:'For groups of [X] or more, please call us.',ri_3:'Please tell us about allergies in advance.',
  c_eyebrow:'Visit us',c_title:'Contact & opening hours',c_note:'[Placeholder – please enter real details.]',c_addr:'Address',c_phone:'Phone',c_hours:'Opening hours',c_map:'Insert Google Maps embed here',
  rev_eyebrow:'Guest voices',rev_title:'What our guests say',rev_note:'[Placeholder – please replace with real reviews.]',
  r1:'Placeholder: A great evening with tasty food and a really good atmosphere.',r2:'Placeholder: The ambience is beautiful and the mariachis were a highlight.',r3:'Placeholder: Friendly service and great cocktails on the terrace.',
  mail_subject:'Table reservation',
  mail_body:d=>`Hello Pssst Bandido,\n\nI would like to reserve:\nName: ${d.name}\nContact: ${d.contact}\nDate: ${d.date}\nTime: ${d.time}\nGuests: ${d.guests}\nNotes: ${d.notes||'-'}\n\nBest regards`,
  faq:[['What are your opening hours?','[Please enter opening hours.]'],['Can I reserve a table?','Yes, via the form on the reservation page or by phone at [TELEFON].'],['Do you offer group bookings?','Yes, we offer group menus and celebrations inside or on the terrace. Please contact us.'],['What about allergies?','Please let us know and we will gladly advise you on ingredients and alternatives.']],
  ticker:['Tacos','Nachos','Margaritas','Mariachi','Terrace','Fiesta','Groups','Candlelight']}
};

/* ---------- Menu data (transcribed from the menu photos) ---------- */
const MENU = {
 starters:[
  {n:'Crema de chiles secos con maiz y aguacate',p:'5,90',de:'Maiscremesuppe mit mexikanischem Chilligewürz und frischer Avocado',en:'Corn cream soup with Mexican chili spices and fresh avocado'},
  {n:'Gambas rebozadas',p:'7,90',de:'Frittierte Garnelen auf Salat mit Honig-Senf-Dressing',en:'Fried prawns on salad with honey-mustard dressing'},
  {n:'Nachos con atun',p:'8,50',de:'Mit Käse gratinierte Tortilla-Chips, belegt mit Thunfisch, Zwiebeln, Koriander, Tomaten, Sauerrahm und Guacamole',en:'Cheese-baked tortilla chips topped with tuna, onions, coriander, tomatoes, sour cream and guacamole'}],
 mains:[
  {n:'Quesadilla de picadillo almendrado',p:'13,50',de:'Mit Rindgehacktem, Rosinen und gehobelten Mandeln gefüllte Maistortillas auf Salat, serviert mit Bohnen und Reis',en:'Corn tortillas filled with minced beef, raisins and flaked almonds on salad, with beans and rice'},
  {n:'Flautas de pollo con chorizo',p:'13,50',de:'Zwei Weizentortillas gefüllt mit Hähnchen und Paprikawurst auf Salat mit Tomatensalsa, Sauerrahm, Bohnen und Guacamole',en:'Two wheat tortillas filled with chicken and chorizo on salad with tomato salsa, sour cream, beans and guacamole'},
  {n:'Tacos campechanos',p:'13,90',de:'Weizentortillas gefüllt mit Nebraska Steakstreifen, Chorizo, Käse und Zwiebeln, dazu Guacamole und Tomaten-Paprikadip',en:'Wheat tortillas with Nebraska steak strips, chorizo, cheese and onions, with guacamole and tomato-pepper dip'},
  {n:'Burrito de salmon',p:'13,90',de:'Große knusprig gebackene Weizentortilla gefüllt mit gebratenen Lachswürfeln, Salat und Dilldressing, serviert mit Kartoffelecken',en:'Large crispy baked wheat tortilla with fried salmon cubes, salad and dill dressing, with potato wedges'},
  {n:'Tacos de pescado',p:'14,50',de:'Knusprig gratinierte Maistortillas gefüllt mit Garnelen und Fischfilet auf Salat mit Tomatensalsa, Reis, Bohnen und Guacamole',en:'Crispy baked corn tortillas with prawns and fish fillet on salad with tomato salsa, rice, beans and guacamole'},
  {n:'Frijol con puerco',p:'14,90',de:'Eintopf aus gewürfeltem Schweinefilet, Pintobohnen und mexikanischen Gewürzen, serviert mit Reis, Sauerrahm und Guacamole',en:'Stew of diced pork fillet, pinto beans and Mexican spices, with rice, sour cream and guacamole'},
  {n:'Tamales norteños',p:'16,20',de:'Hausgemachte Tameles (gefüllter Maisteig eingewickelt in Maisblätter) mit zwei Füllungen: Hähnchenfleisch mit grüner Tomatillosoße und Schweinefleisch mit Chilisoße, serviert mit Mais-Poblanocreme',en:'Homemade tamales (filled corn dough in corn husks) with two fillings: chicken with green tomatillo sauce and pork with chili sauce, with corn-poblano cream'}],
 desserts:[
  {n:'Pastel de naranja',p:'6,20',veg:1,de:'Klassischer mexikanischer Orangenkuchen',en:'Classic Mexican orange cake'},
  {n:'Crema de vanilla',p:'6,20',veg:1,de:'Mascarpone-Vanille-Creme auf Mandelkeksen und Himbeeren',en:'Mascarpone-vanilla cream on almond biscuits and raspberries'}]
};
const CATS=['starters','mains','desserts','drinks'];

const GALLERY=[
 ['entrance-mexicano','Neon-Eingang „Mexicano“','Neon entrance "Mexicano"'],
 ['interior-beams','Gastraum mit Holzbalken und Kerzen','Dining room with wooden beams and candles'],
 ['mariachi-terrace','Mariachis auf der Terrasse','Mariachis on the terrace'],
 ['terrace-awning','Markise mit grünem und orangem Licht','Awning with green and orange lights'],
 ['interior-fireplace','Gastraum mit Kamin und Spiegel','Dining room with fireplace and mirror'],
 ['cocktails','Bunte Cocktails mit Obstkorb','Colorful cocktails with fruit basket'],
 ['facade-bandido','Fassade mit Bandido-Schriftzug','Facade with Bandido sign'],
 ['interior-pumpkins','Heller Gastraum mit Kürbissen','Bright dining room with pumpkins'],
 ['food-plate','Teller mit Tortillas und Guacamole','Plate with tortillas and guacamole'],
 ['terrace-night','Terrasse am Abend','Terrace in the evening'],
 ['mariachi-dining','Mariachis beim Essen','Mariachis dining together'],
 ['menu-card-1','Speisekarte 1','Menu card 1'],
 ['menu-card-2','Speisekarte 2','Menu card 2']
];

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
let lang=localStorage.getItem('lang')||'de';
if(!T[lang]) lang='de';
let tab='starters';
const ROUTES=['home','menu','about','gallery','reserve','contact'];

function renderTicker(){
  const items=T[lang].ticker.map(w=>`<span>${w}</span><i>·</i>`).join('');
  $('#tickerTrack').innerHTML=items+items;
}
function renderFaq(){
  const box=$('#faq'); box.innerHTML='';
  T[lang].faq.forEach((f,i)=>{
    const item=document.createElement('div'); item.className='faq-item';
    item.innerHTML=`<button class="faq-q" id="faq-trigger-${i}" aria-expanded="false" aria-controls="faq-a-${i}">${f[0]}<span>+</span></button><div class="faq-a" id="faq-a-${i}" role="region"><div><p>${f[1]}</p></div></div>`;
    const btn=item.querySelector('button');
    btn.onclick=()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      $$('.faq-q',box).forEach(b=>b.setAttribute('aria-expanded','false'));
      btn.setAttribute('aria-expanded',String(!open));
    };
    box.appendChild(item);
  });
}
function renderMenu(){
  const t=T[lang], tabs=$('#menuTabs'), cols=$('#menuCols'); tabs.innerHTML=''; cols.innerHTML='';
  CATS.forEach(k=>{
    const b=document.createElement('button'); b.id='menu-tab-'+k; b.setAttribute('role','tab'); b.textContent=t['tab_'+k]; b.setAttribute('aria-selected',String(k===tab));
    b.onclick=()=>{tab=k; renderMenu();}; tabs.appendChild(b);
    const col=document.createElement('div'); col.className='menu-col card'+(k===tab?' active':''); col.id='menu-col-'+k;
    col.innerHTML=`<div class="col-head"><p class="eyebrow">0${CATS.indexOf(k)+1}</p><h2>${t['tab_'+k]}</h2></div>`;
    if(k==='drinks'){
      col.insertAdjacentHTML('beforeend',`<div class="drinks-box"><img src="images/cocktails.jpg" alt="${lang==='de'?'Bunte Cocktails mit Obstkorb':'Colorful cocktails with fruit basket'}" loading="lazy"><p>${t.drinks_text}</p></div>`);
    } else {
      MENU[k].forEach(d=>{
        const main=lang==='de'?d.de:d.en, alt=lang==='de'?d.en:d.de;
        col.insertAdjacentHTML('beforeend',`<div class="dish"><div class="dish-head"><h3>${d.n}${d.veg?`<span class="veg">${t.veg}</span>`:''}</h3><span class="price">${d.p} €</span></div><p>${main}</p><p class="alt">${alt}</p></div>`);
      });
    }
    cols.appendChild(col);
  });
}
function renderGallery(){
  const g=$('#galleryGrid'); g.innerHTML='';
  GALLERY.forEach((it,i)=>{
    const b=document.createElement('button'); b.type='button'; b.id='gallery-item-'+i;
    b.setAttribute('aria-label',(lang==='de'?'Vergrößern: ':'Enlarge: ')+it[lang==='de'?1:2]);
    b.innerHTML=`<img src="images/${it[0]}.jpg" alt="${it[lang==='de'?1:2]}" loading="lazy">`;
    b.onclick=()=>openLB(i); g.appendChild(b);
  });
}
function applyLang(){
  const t=T[lang];
  document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(el=>{const v=t[el.dataset.i18n]; if(typeof v==='string') el.textContent=v;});
  $$('img[data-alt-en]').forEach(img=>{ if(!img.dataset.altDe) img.dataset.altDe=img.alt; img.alt=lang==='en'?img.dataset.altEn:img.dataset.altDe; });
  $$('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  document.title=lang==='de'?'Pssst Bandido Düsseldorf – Mexikanisches Restaurant':'Pssst Bandido Düsseldorf – Mexican Restaurant';
  renderTicker(); renderFaq(); renderMenu(); renderGallery();
}
$$('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.lang; localStorage.setItem('lang',lang); applyLang();});

/* ---------- Hash router: one view at a time ---------- */
const links=$('#navLinks'), burger=$('#burger');
function route(){
  let r=(location.hash.replace(/^#\/?/,'')||'home').split('?')[0];
  if(!ROUTES.includes(r)){ if(r==='main') return; r='home'; }
  $$('.view').forEach(v=>{ v.hidden=v.dataset.view!==r; });
  $$('#navLinks a[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===r && r!=='reserve'));
  links.classList.remove('open'); burger.setAttribute('aria-expanded','false');
  scrollTo({top:0,behavior:'auto'});
  observeReveals();
}
addEventListener('hashchange',route);
burger.onclick=()=>{const o=links.classList.toggle('open'); burger.setAttribute('aria-expanded',String(o));};

const toTop=$('#toTop');
addEventListener('scroll',()=>{toTop.hidden=scrollY<600;},{passive:true});
toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
function observeReveals(){ $$('.view:not([hidden]) .reveal:not(.in)').forEach(el=>io.observe(el)); }

/* ---------- Lightbox ---------- */
const lb=$('#lightbox'), lbImg=$('#lbImg'); let cur=0,lastFocus=null;
function showLB(){const it=GALLERY[cur]; lbImg.src=`images/${it[0]}.jpg`; lbImg.alt=it[lang==='de'?1:2];}
function openLB(i){cur=i; lastFocus=document.activeElement; showLB(); lb.hidden=false; $('#lb-close').focus(); document.body.style.overflow='hidden';}
function closeLB(){lb.hidden=true; document.body.style.overflow=''; lastFocus&&lastFocus.focus();}
const step=d=>{cur=(cur+d+GALLERY.length)%GALLERY.length; showLB();};
$('#lb-close').onclick=closeLB; $('#lb-prev').onclick=()=>step(-1); $('#lb-next').onclick=()=>step(1);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB();});
addEventListener('keydown',e=>{if(lb.hidden)return; if(e.key==='Escape')closeLB(); if(e.key==='ArrowLeft')step(-1); if(e.key==='ArrowRight')step(1);});
$$('[data-card]').forEach(b=>b.onclick=()=>openLB(GALLERY.findIndex(g=>g[0]===b.dataset.card)));

/* ---------- Reservation form ---------- */
const form=$('#resForm'), dateEl=$('#f-date');
const now=new Date(); now.setMinutes(now.getMinutes()-now.getTimezoneOffset());
const todayStr=now.toISOString().slice(0,10); dateEl.min=todayStr;
function setErr(input,msg){input.classList.toggle('invalid',!!msg); input.setAttribute('aria-invalid',String(!!msg)); const s=input.parentElement.querySelector('.err'); if(s)s.textContent=msg||'';}
form.addEventListener('submit',e=>{
  e.preventDefault();
  const f=form.elements,t=T[lang]; let ok=true;
  ['name','contact','date','time','guests'].forEach(k=>{ if(!f[k].value.trim()){setErr(f[k],t.e_req);ok=false;} else setErr(f[k],''); });
  const c=f.contact.value.trim();
  if(c && !(/^\S+@\S+\.\S+$/.test(c)||/^[+()\d\s\/-]{6,}$/.test(c))){setErr(f.contact,t.e_contact);ok=false;}
  if(f.date.value && f.date.value<todayStr){setErr(f.date,t.e_date);ok=false;}
  const g=+f.guests.value; if(f.guests.value&&(g<1||g>40)){setErr(f.guests,t.e_guests);ok=false;}
  if(!ok)return;
  const d={name:f.name.value.trim(),contact:c,date:f.date.value,time:f.time.value,guests:g,notes:f.notes.value.trim()};
  $('#res-mail').href=`mailto:[E-MAIL]?subject=${encodeURIComponent(t.mail_subject)}&body=${encodeURIComponent(t.mail_body(d))}`;
  $('#resOk').hidden=false;
});

$('#year').textContent=new Date().getFullYear();
applyLang();
route();
})();
