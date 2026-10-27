# v0.1.4 patikra

2026-10-27.

- JavaScript sintaksės patikra.
- 11 atskirų GitHub Pages versijos automatinių testų: santykiniai failų keliai ir visų assetų buvimas; serverinių / vietinių failų priklausomybių nebuvimas; tiesioginis metaduomenų gavimas; metaduomenų nesėkmė ir rankinis pervadinimas; Play / seek; stabilus shuffle; crossfade ir NEXT UP; eilės redagavimas / repeat; vardinių sąrašų išsaugojimas pagal projekto kelią; senų YouTube duomenų migracija be MP3; tekstų saugus atvaizdavimas / URL tikrinimas; lokalės.
- Statinis serveris be jokio `/api` maršruto; svetainė atverta po projekto poaplankiu `/github-pages/`, analogiškai GitHub projekto svetainės keliui.
- Naršyklėje abiem naujai pridėtoms dainoms gauti tikri pavadinimai, įskaitant dar nekraunamą NEXT UP dainą. Python API ir API raktas nenaudoti.
- Tikras pagrindinis Play ir YouTube → YouTube perėjimas į iš anksto parodytą dainą. Po bandymo grojimas pristabdytas.
- Sąrašas, gauti pavadinimai ir EN lokalė išliko perkrovus puslapį.
- Viešo GitHub Pages domeno patikra dar neatlikta — publikavimas nėra šio paruošimo žingsnio dalis.

Automatiniai testai pagrindinio projekto aplanke: `node --test tests/pages.test.cjs`. Testų garso / YouTube objektai imituojami; tikros naršyklės patikra aprašyta atskirai.
