/* Two reversible UI locales. User playlist names and real song titles stay intact. */
(function(root){
 const english={
 'Pridėk YouTube nuorodą':'Add a YouTube link','Tavo YouTube miksai':'Your YouTube mixes','Pervadinti dainą':'Rename track','Dainos pavadinimas':'Track title','Daina nepasiekiama.':'Track unavailable.','Išvalyti šį grojaraštį?':'Clear this playlist?','YouTube API nepasiekiama. Patikrink internetą ir naršyklės plėtinius.':'YouTube API unavailable. Check your connection and browser extensions.',
 'Grojaraščiai ir nustatymai saugomi tik šioje naršyklėje. Tarp įrenginių juos perkelk eksportuodamas ir importuodamas JSON kopiją.':'Playlists and settings are stored only in this browser. Use JSON export and import to move them between devices.',
 'Eksportas saugo pasirinkto grojaraščio YouTube nuorodas, pavadinimus ir nustatymus. Importas prideda dainas prie pasirinkto sąrašo.':'Export saves the selected playlist’s YouTube links, titles and settings. Import adds tracks to the selected playlist.',
 'TOLIAU GROS':'NEXT UP','SEKANTI DAINA':'NEXT TRACK','↻ KARTOJAMA':'↻ REPEAT ONE','⤨ SHUFFLE':'⤨ SHUFFLE',
 'Kalba':'Language','DJ pultas':'DJ console','Atkūrimas':'Playback','DECK A':'DECK A','DECK B':'DECK B','LAUKIA':'IDLE','PARUOŠTA':'READY','GROJA':'PLAYING','KRAUNAMA':'LOADING',
 'Pasiruošęs tavo muzikai':'Ready for your music','Kita daina laukia čia':'Your next track waits here','DABAR GROJA':'NOW PLAYING','Tavo miksas prasideda čia':'Your mix starts here','Pridėk nuorodą arba garso failą':'Add a link or an audio file',
 'Bendras garsumas':'Master volume','Vilk aukštyn / žemyn, suk ratuką arba naudok rodykles':'Drag up / down, scroll, or use arrow keys',
 'Shuffle nustatymai':'Shuffle settings','Kartojimo nustatymai':'Repeat settings','Crossfade nustatymai':'Crossfade settings','Ankstesnė daina':'Previous track','Kita daina':'Next track','Dainos pozicija':'Track position','Groti':'Play','Pauzė':'Pause','Paleidžiama…':'Starting…',
 'TAVO KOLEKCIJA':'YOUR COLLECTION','Grojaraštis':'Playlist','Mano muzika':'My music','Mano grojaraščiai':'My playlists','Pasirink grojaraštį':'Choose a playlist','＋ Naujas grojaraštis':'＋ New playlist','Naujas grojaraštis':'New playlist','Pervadinti grojaraštį':'Rename playlist','Šalinti grojaraštį':'Delete playlist','Grojaraščio pavadinimas':'Playlist name','Atšaukti':'Cancel','Išsaugoti':'Save',
 'Išsaugoma naršyklėje':'Saved in this browser','✓ Išsaugota šiame įrenginyje':'✓ Saved on this device','! Nepavyko išsaugoti':'! Could not save','Grojaraščio valdymas':'Playlist tools',
 'Įklijuok YouTube nuorodą…':'Paste a YouTube link…','YouTube nuoroda':'YouTube link','＋ Pridėti':'＋ Add','♫ Garso failai':'♫ Audio files',
 'Vilk dainą už ⠿ arba naudok rodykles. Įprastu režimu grojama žemyn nuo pasirinktos dainos.':'Drag a track by ⠿ or use the arrows. Normal playback continues down from the selected track.',
 'Tavo scena tuščia. Pridėk pirmą dainą.':'Your stage is empty. Add your first track.','Paruošta muzikai.':'Ready for music.','YouTube + tavo garso failai':'YouTube + your audio files','Vilk dainą':'Drag track','Perkelti aukštyn':'Move up','Perkelti žemyn':'Move down',
 'VIETINIS · IŠSAUGOTAS':'LOCAL · SAVED','VIETINIS · ŠI SESIJA':'LOCAL · THIS SESSION','FAILĄ REIKIA PRIDĖTI IŠ NAUJO':'ADD THE FILE AGAIN','Vietinis garso failas':'Local audio file','Vietinis failas':'Local file','YouTube įrašas':'YouTube track','Pavadinimas nepasiekiamas':'Title unavailable',
 'GROJIMO TVARKA':'PLAYBACK ORDER','Atsitiktinis grojimas be pasikartojimų, kol sugroja visas sąrašas.':'Random playback without repeats until the whole playlist has played.','Maišyti dainas':'Shuffle tracks','Uždaryti':'Close',
 'DAR VIENĄ KARTĄ':'ONE MORE TIME','Kartojimas':'Repeat','Kartojimo režimas':'Repeat mode','Išjungtas':'Off','Visas grojaraštis':'Whole playlist','Viena daina':'One track','„Kita“ perjungia dainą ir tada, kai įjungtas vienos dainos kartojimas.':'Next skips to another track even when repeat one is enabled.',
 'SUKURK SAVO PERĖJIMĄ':'SHAPE YOUR TRANSITION','Trukmė':'Duration','Garsumo kreivė':'Volume curve','Equal power · pilnesnis vidurys':'Equal power · fuller midpoint','Linear · tolygus perėjimas':'Linear · even transition','Smooth · minkšti kraštai':'Smooth · soft edges','Persidengimas':'Overlap',
 'Mažesnis persidengimas vėliau įveda kitą dainą ir anksčiau prigesina ankstesnę. 0 sekundžių išjungia crossfade. Pakeitimai taikomi kitam perėjimui.':'Less overlap brings the next track in later and fades the outgoing track earlier. 0 seconds disables crossfade. Changes apply to the next transition.',
 'TAVO MUZIKA':'YOUR MUSIC','YouTube nuorodos, tvarka ir nustatymai išsaugomi šioje naršyklėje. Vietiniai garso failai saugomi tik šiame įrenginyje naudojant IndexedDB; naršyklė gali juos pašalinti išvalius svetainės duomenis.':'YouTube links, order and settings are saved in this browser. Local audio files are stored on this device using IndexedDB; clearing site data removes them.',
 'Eksportuoti nuorodas (.json)':'Export links (.json)','Importuoti grojaraštį':'Import playlist','Eksportas saugo YouTube nuorodas ir nustatymus. Garso failai į eksportą neįtraukiami.':'Export includes YouTube links and settings. Audio files are not included.','Išvalyti grojaraštį…':'Clear playlist…',
 'Grojaraštis atvertas.':'Playlist opened.','Grojaraštis pašalintas.':'Playlist deleted.','Grojaraštis išvalytas.':'Playlist cleared.','Grojaraštis baigtas.':'Playlist finished.','Daina pridėta.':'Track added.','Perėjimas baigtas.':'Transition complete.',
 'Tvarka pakeista. Toliau gros pagal naują sąrašą.':'Order updated. Playback will follow the new order.','Naršyklė neleido išsaugoti grojaraščio. Naudok eksportą.':'The browser could not save the playlist. Export a backup.',
 'Failas nepasiekiamas. Pridėk jį iš naujo.':'File unavailable. Add it again.','Šį vietinį failą reikia pridėti iš naujo.':'Add this local file again.','YouTube dar kraunasi. Pabandyk po akimirkos.':'YouTube is loading. Try again in a moment.',
 'Atkūrimas neprasidėjo. Bandyk „Groti“ dar kartą.':'Playback did not start. Try Play again.','Kita daina nepradėjo groti. Paspausk „Kita“ arba bandyk dar kartą.':'The next track did not start. Press Next or try again.',
 'Failai pridėti, bet jų išsaugoti nepavyko. Jie veiks tik šioje sesijoje.':'Files added, but could not be saved. They are available for this session only.','Failai pridėti ir išsaugoti šiame įrenginyje.':'Files added and saved on this device.',
 'Vietinių failų saugykla nepasiekiama. Failai veiks tik šioje sesijoje.':'Local file storage is unavailable. Files will work for this session only.','Nepavyko atkurti ankstesnio sąrašo. Galima importuoti JSON kopiją.':'Could not restore the previous playlist. You can import a JSON backup.',
 'Įklijuok galiojančią YouTube vaizdo įrašo nuorodą.':'Paste a valid YouTube video link.','YouTube grojaraščio kopija eksportuota.':'YouTube playlist backup exported.','Failas per didelis.':'File is too large.','Netinkamas grojaraščio formatas.':'Invalid playlist format.','Faile nėra YouTube dainų.':'No YouTube tracks found in the file.',
 'Išvalyti visą grojaraštį ir šiame įrenginyje išsaugotus jo garso failus?':'Clear this playlist and its locally stored audio files?',
 'Pašalinti šį grojaraštį ir jo įrašus? Kiti grojaraščiai liks.':'Delete this playlist and its tracks? Other playlists will remain.',
 'Naršyklė blokavo atkūrimą. Paspausk pagrindinį „Groti“ dar kartą.':'The browser blocked playback. Press the main Play button again.','YouTube API nepasiekiama. Vietiniai failai gali groti toliau.':'YouTube API is unavailable. Local files can still play.'
 };
 function translate(text,locale='en'){
  if(locale!=='en')return text;
  if(english[text])return english[text];
  const prefixes={'Groja: ':'Playing: ','Groti ':'Play ','Pašalinti ':'Remove ','Nepavyko perskaityti garso failo: ':'Could not read audio file: ','Perėjimas nepavyko: ':'Transition failed: ','Importas nepavyko: ':'Import failed: '};
  for(const [lt,en] of Object.entries(prefixes))if(text.startsWith(lt))return en+translate(text.slice(lt.length),locale);
  let m=text.match(/^Importuota (\d+) dainų\.$/);if(m)return 'Imported '+m[1]+' tracks.';
  m=text.match(/^YouTube klaida (\d+)\. Įrašas gali būti nepasiekiamas arba neleidžiamas įterpti\.$/);if(m)return 'YouTube error '+m[1]+'. The video may be unavailable or embedding may be disabled.';
  m=text.match(/^YouTube klaida (\d+)\. Patikrink įrašo leidimus ir kad puslapis atvertas per localhost\.$/);if(m)return 'YouTube error '+m[1]+'. Check video permissions and open the player through localhost.';
  return text;
 }
 if(typeof module!=='undefined'&&module.exports){module.exports={translate,english};return;}
 let locale='lt';try{locale=localStorage.getItem('crossfade-language')==='en'?'en':'lt';}catch{}
 const textMemory=new WeakMap(),attributeMemory=new WeakMap();
 function localized(value,memory){const source=memory&&value===memory.rendered?memory.source:value;const trim=source.trim();const rendered=source.replace(trim,translate(trim,locale));return {source,rendered};}
 function localize(){
  document.documentElement.lang=locale;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
  while((node=walker.nextNode())){if(node.parentElement?.closest('script,style,[data-no-i18n]'))continue;const state=localized(node.nodeValue,textMemory.get(node));textMemory.set(node,state);if(node.nodeValue!==state.rendered)node.nodeValue=state.rendered;}
  for(const element of document.querySelectorAll('[aria-label],[title],[placeholder]')){if(element.closest('iframe'))continue;let memory=attributeMemory.get(element);if(!memory){memory={};attributeMemory.set(element,memory);}for(const key of ['aria-label','title','placeholder'])if(element.hasAttribute(key)){const value=element.getAttribute(key),state=localized(value,memory[key]);memory[key]=state;if(value!==state.rendered)element.setAttribute(key,state.rendered);}}
 }
 root.I18n={t:text=>translate(text,locale),localize,get locale(){return locale;},setLocale(value){locale=value==='en'?'en':'lt';try{localStorage.setItem('crossfade-language',locale);}catch{}document.getElementById('language').value=locale;localize();}};
 document.getElementById('language').value=locale;
 document.getElementById('language').addEventListener('change',e=>root.I18n.setLocale(e.target.value));
 let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;localize();});}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});
 localize();
})(typeof window!=='undefined'?window:globalThis);
