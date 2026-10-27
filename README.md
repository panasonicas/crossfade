# Crossfade Player v0.1.4 — YouTube / GitHub Pages

DJ stiliaus YouTube grotuvas: du kanalai, automatinis crossfade, išankstinė NEXT UP peržiūra, shuffle / repeat, vardiniai grojaraščiai, jų tvarkos keitimas, LT / EN ir master garsumo knobas.

**Publikavimas:** žr. [GITHUB_PAGES_INSTRUKCIJA.md](GITHUB_PAGES_INSTRUKCIJA.md). Į saugyklos šaknį įkelk išskleistus failus ir pasirink Pages: `main` + `/(root)`. Python, mokamo serverio ir API raktų nereikia.

## Pakeitimai nuo v0.1.3

- Pašalintas MP3 / vietinių garso failų pasirinkimas, atkūrimas ir IndexedDB saugykla. Šis leidimas priima tik YouTube vaizdo įrašų nuorodas.
- Pašalintas `/api/title` ir visas Python backend. Pavadinimai gaunami tiesiai iš YouTube metaduomenų; paruoštas grotuvas yra papildomas šaltinis. Pridėtas rankinis pavadinimo keitimas per ✎.
- Visi programos failų keliai santykiniai, todėl tinka `github.io/projekto-pavadinimas/` ir savo domenui.
- Pridėta turinio šaltinių politika (CSP); šriftams naudojamas įrenginio šriftų rinkinys, ne papildoma išorinė šriftų paslauga.
- Naršyklės sesija atskiriama pagal svetainės projekto kelią. Tai padeda nesumaišyti sąrašų tarp kelių to paties adreso projektų, bet nėra saugumo izoliacija tarp to paties domeno svetainių.
- Eksportas / importas suderinamas su ankstesnių versijų YouTube įrašais. Vietiniai garso failai ignoruojami.

## Ribos

- Tai paruoštas statinis leidimas; kol nepaskelbtas tikrame Pages domene, jis nėra vieša veikianti svetainė.
- Nėra paskyrų, bendros duomenų bazės ar sinchronizavimo tarp įrenginių. Sąrašai ir nustatymai lieka konkrečioje naršyklėje.
- Pavadinimų ir atkūrimo prieinamumas priklauso nuo YouTube, konkretaus įrašo, tinklo bei naršyklės. API raktų pakete nėra ir nereikia. Jei metaduomenys neprieinami, pavadinimą galima pakeisti rankiniu būdu.
- Naudojami matomi YouTube grotuvai. Garso ar vaizdo failai neparsisiunčiami saugojimui; tik garso režimas ir sisteminis EQ neįtraukti.
- Naršyklė gali riboti paleidimą be naudotojo veiksmo, veikimą fone ar užrakintame telefone. Veikimas konkrečiame telefone turi būti patikrintas po publikavimo.

Patikros rezultatai — [CHECKS.md](CHECKS.md).
