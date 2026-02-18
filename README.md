Egy élménytúra során a vendégek különféle eseményeken vehetnek részt. Ezeket az adatokat tárolja a mellékelt tickets.json fájl.
Készíts egy weboldalt, amenyben a felhasználó:
Ki tudja választani, milyen eseményen szeretne részt venni - akár több eseményen is
A weboldal ezeket táblázatos formában megjeleníti, az aláján a végösszeggel!

A feladat javasolt megoldási lépései:

1: Előkészületek:
Készíts egy vite-es, TypeScript-es alkalmazást (pl. elmenytura néven)
A mellékelt JSON fájlt másold be a public mappába, ez lesz az adatforrás
Készíts TypeScript interface-t a fájl alapján (keresés: JSON to typescipt), nevezd el (pl. Ticket), helyezd önálló külön fájlba.
2: HTML:
Készíts egy űrlapot, amelyben a felhasználó megadhatja:
A nevét
A választott esemény típusát (pl. legördülő listában)
A darabszámot
Az űrlap alá helyezz egy táblázatot, három oszloppal:
Név
Esemény neve (zárójelben a jegyek száma)
Ár
A táblázat láblécébe (tfoot), a legutolsó oszlopba pedig hagyj helyet a végösszegnek!
3: Adatletöltés
Az oldal betöltésekor tölts le a JSON fájlt, és tárold el egy Tickets[] típusú listába!
A lista elemei alapján töltsd ki a legördülő listát "option" elemekkel! A value tulajdonság legyen a lista indexe.
4: Form elküldés
Minden rendelés után szúrj be egy sort a táblázatba, a megfelelő adatokkal.
A lista kiválasztott értéke alapján ki tudod olvasni a többi adatot is!
Egy "vegosszeg" változóban tartsd nyilván a végösszeget, a táblázat láblécét ez alapján frissítsd!
5: Hibaellenőrzés, validálás
Hibás adatot ne lehessen megadni (üres, negatív stb.). HTML validáció elég.
Adott jegytípusnál ne lehessen a limitnél többet venni, a "max" változó a JSON adatban ezt jelenti.
6: Formázás - ha a működés kész van

Extra feladatok:
Készíts egy osztályt, pl. "Order" néven, amely egy rendelés adatait tartalmazza - a táblázat egy sorát.
Az Order osztálynak legyen egy price getter-e, amely kiszámolja a tényleges összeget!
Rendeléskor a rendeléseket tárold el egy listában!
A végösszeget ne tárold külön változóban, hanem számold ki a lista tartalma alapján!