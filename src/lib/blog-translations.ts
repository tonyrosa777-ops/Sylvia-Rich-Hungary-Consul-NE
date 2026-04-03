/**
 * src/lib/blog-translations.ts
 * Hungarian (HU) body translations for all blog posts.
 * Formal register throughout: "Ön", official consular terminology.
 * Keyed by post id — merged into BlogPost.bodyHu at export time in blog.ts.
 */

import { type ContentBlock } from "./blog";

export const bodyHuMap: Record<string, ContentBlock[]> = {

  // ─── Post 1: What Does an Honorary Consul Actually Do? ─────────────────────
  "what-does-honorary-consul-do": [
    {
      type: "paragraph",
      text: "A leggyakoribb kérdés, amit kapunk — mielőtt valaki egyáltalán elmondaná, mire van szüksége — ez: Ez egy igazi konzulátus? A rövid válasz: igen. A Magyar Tiszteletbeli Konzulátus — Új-Anglia egy hivatalosan kinevezett diplomáciai képviselet, amelyet a Washingtoni Magyar Nagykövetség hatalmazott fel a konzuli kapcsolatokról szóló bécsi egyezmény alapján.",
    },
    {
      type: "paragraph",
      text: "A hosszabb válasz egy megkülönböztetést igényel, amelyet a legtöbb amerikainak még soha nem kellett tennie: a különbséget a teljes konzulátus és a tiszteletbeli konzulátus között. E különbség megértése megmutatja, mivel tud ez a hivatal segíteni Önnek, és mi az, aminek New Yorkon keresztül kell mennie.",
    },
    {
      type: "heading",
      text: "Teljes konzulátus vs. tiszteletbeli konzulátus: amit tudnia kell",
    },
    {
      type: "paragraph",
      text: "Egy teljes konzulátus — mint a New York-i Magyar Főkonzulátus — a magyar kormány által alkalmazott hivatásos diplomatákkal működik. A tiszteletbeli konzulátust ugyanezek a tisztviselők nevezik ki, és felhatalmazást kap meghatározott konzuli feladatok ellátására olyan régiókban, ahol a teljes konzulátusnak nincs fizikai jelenléte.",
    },
    {
      type: "paragraph",
      text: "Maine, Vermont, New Hampshire, Rhode Island és Massachusetts állam magyar állampolgárai és kettős állampolgárai számára a Magyar Tiszteletbeli Konzulátus — Új-Anglia az egyetlen diplomáciai hatóság a régióban. A legközelebbi teljes konzulátus New York Cityben van — ez jelentős távolság az észak-új-angliai emberek számára. Ez a hivatal éppen ennek a hiánynak a pótlására jött létre.",
    },
    {
      type: "heading",
      text: "Mivel tud segíteni ez a konzulátus",
    },
    {
      type: "paragraph",
      text: "A tiszteletbeli konzulátus — amelyet az Új-Angliában élő magyarok vehetnek igénybe — a dokumentum- és hitelesítési szolgáltatások széles körét nyújtja. Ezek nem másodrangú szolgáltatások — ugyanolyan jogi érvénnyel bírnak, mint a New York-i Főkonzulátuson végzett szolgáltatások.",
    },
    {
      type: "list",
      items: [
        "Magyar nyelvű dokumentumok és aláírások közjegyzői hitelesítése a magyarországi jogi eljárásokban való felhasználáshoz",
        "Dokumentumok hitelesítése a Magyarországon való felhasználáshoz (az USA által kiállított dokumentumok konzuli hitelesítése)",
        "Magyar dokumentumok hiteles másolatainak igazolása",
        "Nyilatkozatok és eskü alatti vallomások hitelesítése a magyarországi bíróságok, anyakönyvek és intézmények számára",
        "Életigazolványok kiállítása az Új-Angliában élő magyar nyugdíjasok számára",
        "Segítségnyújtás a konzuli levelezésben és a magyar bürokratikus eljárásokban való eligazodásban",
        "Útmutatás és átirányítás a magyar útlevélkérelmekkel és -megújítással kapcsolatban (New Yorkon keresztül intézendő)",
        "Segítségnyújtás az anyakönyvi bejegyzésekkel: születés, házasságkötés és haláleset a magyar anyakönyvbe",
      ],
    },
    {
      type: "heading",
      text: "Ami New Yorkon vagy Budapesten keresztül intézendő",
    },
    {
      type: "paragraph",
      text: "Az átláthatóság ennek a hivatalnak az alapelve. Vannak olyan szolgáltatások, amelyeket a tiszteletbeli konzulátusok nem jogosultak elvégezni — és Önnek tudnia kell ezekről, mielőtt megteszi az utat.",
    },
    {
      type: "list",
      items: [
        "Magyar útlevél kiállítása és megújítása (a New York-i Főkonzulátuson igényelhető — a biometrikus adatfelvétel kötelező)",
        "Sürgős úti okmányok és laissez-passer",
        "Állampolgársági kérelemhez szükséges személyes biometrikus adatfelvétel",
        "Magyar ingatlan-nyilvántartási és örökösödési eljárások (magyarországi közjegyző szükséges)",
        "Vízum kiállítása nem magyar állampolgárok számára (a Washingtoni Nagykövetségen vagy a New York-i Főkonzulátuson intézendő)",
      ],
    },
    {
      type: "blockquote",
      text: "Ha van egy formanyomtatványa, amelyet nem tud elolvasni, egy határidője, amelyet nem mulaszthat el, vagy egy kérdése, amelyre egyetlen amerikai hivatal sem tud válaszolni — ide kell jönnie.",
    },
    {
      type: "heading",
      text: "Ki vezeti ezt a hivatalt",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia élén Sylvia Rich tiszteletbeli konzul áll, akit a Magyar Nagykövetség nevezett ki. Sylviának mély gyökerei vannak mind a magyar-amerikai közösségben, mind az Új-Angliai régióban. A fogadóórákat ugyanolyan formalitással és jogi szigorral tartja, mint bármely teljes konzulátus — mert az itt előállított dokumentumokat pontosan erre a standardra tartó magyarországi hatóságok elé kell terjeszteni.",
    },
    {
      type: "heading",
      text: "Az időpontok csak hétfői napokon lehetségesek",
    },
    {
      type: "paragraph",
      text: "A konzuli fogadóórák csak hétfőn tarthatók, a derry-i (NH) helyszínen. Hozza magával a dokumentumait, egy érvényes, fényképes személyi igazolványt és a fizetséget (készpénz vagy Sylvia Rich nevére kiállított csekk). A legtöbb találkozó 15–20 percet vesz igénybe az általános szolgáltatásoknál.",
    },
    {
      type: "paragraph",
      text: "Ha nem biztos abban, hogy ügye a hatáskörünkbe tartozik, az időpontfoglalás előtt használja a kapcsolatfelvételi ûrlapot. Érthetően megerősítjük, mit tudunk és mit nem tudunk elvégezni — mielőtt megtenné az utat.",
    },
  ],

  // ─── Post 2: Authentication vs. Apostille vs. Notarization ────────────────
  "authentication-vs-apostille": [
    {
      type: "paragraph",
      text: "Amikor egy magyarországi hatóság arra kéri Önt, hogy hitelesített dokumentumot nyújtson be, a kérés ritkán pontosítja, hogy melyik hitelesítési módszert igényli. Ez a bizonytalanság okozza a legtöbb dokumentum-elutasítást — és a telefonhívások nagy részét. A dokumentumhitelesítés és az apostille közötti különbség az, amellyel az amerikai igénylők figyelmeztetés nélkül találkoznak, legtöbbször a legrosszabb pillanatban.",
    },
    {
      type: "paragraph",
      text: "Három különböző eljárás létezik. Annak megértése, hogy melyik vonatkozik az Ön esetére, heteket takaríthat meg az újrabeküldéstől, és sok esetben megelőzheti a jogi határidők elmulasztását.",
    },
    {
      type: "heading",
      text: "1. Közjegyzői hitelesítés",
    },
    {
      type: "paragraph",
      text: "A közjegyzői hitelesítés a dokumentum-tanúsítás legalapvetőbb szintje. Az amerikai közjegyző tanúsítja az aláírást, igazolja az Ön személyazonosságát és rányomja a pecsétjét. Ez belső american ügyletekhez megfelelő — önmagában nem bír független jogi érvénnyel Magyarországon.",
    },
    {
      type: "paragraph",
      text: "Mikor elegendő a közjegyzői hitelesítés? Ha egy magyarországi intézmény kifejezetten egy US dokumentum hitelesített fordítását kéri — együtt a hitelesítésre elhelyezett apostille-lel. A közjegyző rábélyegzi a fordítást; az apostille rábélyegzi a közjegyzőt. Magyarország mindkettőt látja.",
    },
    {
      type: "subheading",
      text: "Amit ez a konzulátus tehet a közjegyzői hitelesítés terén:",
    },
    {
      type: "paragraph",
      text: "Ez a hivatal tanúsíthatja az aláírásokat és nyilatkozatokat magyar konzuli kontextusban — ami nagyobb súlyt képvisel, mint a szokásos amerikai közjegyzői hitelesítés a Magyarországra szánt dokumentumoknál. Ha esküt kell tennie, nyilatkozatot kell kiadnia, vagy Magyarország számára hitelesített aláírásra van szüksége, foglaljon időpontot itt, ne egy sima US közjegyzőnél.",
    },
    {
      type: "heading",
      text: "2. Apostille",
    },
    {
      type: "paragraph",
      text: "Az apostille egy szabványosított tanúsítvány, amelyet általában az állami titkár (Secretary of State) nevű US állami hatóság bocsát ki, és amely igazolja egy közjegyző pecsétjének vagy egy köztisztviselő aláírásának hitelességét. Magyarország tagja a Hágai Apostille Egyezménynek, ami azt jelenti, hogy bármely US állam által kiállított apostille-eket Magyarország további hitelesítés nélkül automatikusan elfogad.",
    },
    {
      type: "paragraph",
      text: "Mikor kell apostille? Amikor US által kiállított dokumentumot nyújt be magyarországi hatóságnak. Tipikus példák: születési anyakönyvi kivonatok, házassági anyakönyvi kivonatok, halotti anyakönyvi kivonatok, válási határozatok, iskolai oklevelek, büntetlen előéleti igazolások és bírósági határozatok. Az apostille magára az US dokumentumra kerül, vagy annak hitelesített fordítására.",
    },
    {
      type: "subheading",
      text: "Hogyan szerezhető be apostille Új-Angliában:",
    },
    {
      type: "list",
      items: [
        "Massachusetts: A Commonwealth Titkárságának Irodája, Apostille és Hitelesítési Osztály, Boston — postai átfutási idő általában 2–3 hét",
        "New Hampshire: Állami titkár, Anyakönyvi Hivatal, Concord — általában 1–2 hét",
        "Maine: Állami titkár, Társaságok Osztálya, Augusta — általában 2–4 hét",
        "Vermont: Állami titkár, Montpelier — általában 1–3 hét",
        "Rhode Island: Állami titkár, Providence — általában 2–3 hét",
      ],
    },
    {
      type: "paragraph",
      text: "A legtöbb állam sürgős apostille feldolgozást kínál pótdíj ellenében. Ha magyarországi határideje van, számoljon 4–6 hetes átfutási idővel attól a pillanattól, hogy kérelmezi az apostille-t — és még többel, ha fordítás is szükséges.",
    },
    {
      type: "heading",
      text: "3. Konzuli hitelesítés (legalizáció)",
    },
    {
      type: "paragraph",
      text: "A konzuli hitelesítést — más néven konzuli legalizációt — ez a hivatal vagy a New York-i Főkonzulátus végzi. Ez tanúsítja, hogy egy dokumentum érvényes a magyarországi felhasználáshoz, az azon szereplő tisztviselő vagy közjegyző megbízható, és a dokumentum megfelel a magyar követelményeknek.",
    },
    {
      type: "paragraph",
      text: "Mikor kell konzuli hitelesítés? Akkor szükséges, ha egy magyarországi hatóság kifejezetten kéri — jellemzően hagyatéki eljárások, egyes jogi ügyek esetén, valamint akkor, ha az apostille útvonal nem fogadható el. Akkor is alkalmazzák, ha nem hágai tagállam dokumentumait kell Magyarországon hitelesíteni, vagy ha egy magyarországi intézmény kifejezetten konzuli pecsétet kér.",
    },
    {
      type: "blockquote",
      text: "A leggyakoribb és legköltségesebb hiba: apostille-t szereznek be, miközben a magyarországi hatóság konzuli hitelesítést akart — vagy fordítva. A dokumentum megérkezik, elutasítják, és hetek vesznek el. Mindig ellenőrizze az igénylő intézménynél pontosan, mit igényelnek, mielőtt elindulna.",
    },
    {
      type: "heading",
      text: "Döntési útmutató: melyik hitelesítési útvonal a helyes?",
    },
    {
      type: "list",
      items: [
        "Magyarországi anyakönyv, bíróság vagy intézmény US által kiállított dokumentum hitelesített másolatát kéri → szerezzen apostille-t az állami titkártól, majd fordíttassa le a dokumentumot",
        "Magyarországi hatóság konzuli pecsétet, konzuli hitelesítést vagy konzuli legalizációt kér → foglaljon időpontot ennél a hivatalnál",
        "Aláírástanúsításra vagy nyilatkozatkiadásra van szüksége magyarországi jogi célokra → ez a hivatal konzuli kontextusban hitelesíthet (foglaljon időpontot)",
        "Magyarországról kapott egy nyomtatványt, amelyet nem tud elolvasni → a lépések megtétele előtt vegye fel a kapcsolatot ezzel a hivatallal — egy félreértett utasítás hónapokat vesz igénybe",
        "Nem biztos, melyik útvonal a helyes → írja le helyzetét a kapcsolatfelvételi ûrlapon; pontosan megmondjuk, mit kell tennie",
      ],
    },
    {
      type: "heading",
      text: "Megjegyzés a fordításról",
    },
    {
      type: "paragraph",
      text: "Az apostille és a konzuli hitelesítés sem fordítás. A magyarországi hatóságok magyar nyelvű dokumentumokat igényelnek. Ha az US dokumentuma angol nyelvű, a szükséges hitelesítésen túl hitelesített magyar fordításra is szüksége lesz. Ez a hivatal tud Önnek tapasztalt fordítókat ajánlani.",
    },
    {
      type: "paragraph",
      text: "Készen áll a továbblépésre? Foglaljon hétfői időpontot, vagy írja le a dokumentumát és az azt igénylő intézményt a kapcsolatfelvételi ûrlapon. Érthetően megmondjuk a helyes útvonalat, mielőtt egyetlen dollárt is költ a feldolgozási díjakra.",
    },
  ],

  // ─── Post 3: Hungarian Dual Citizenship in New England ────────────────────
  "hungarian-dual-citizenship-new-england": [
    {
      type: "paragraph",
      text: "A magyar kettős állampolgárság Új-Angliában a legtöbb ember számára elérhetőbb, mint gondolná. Magyarország állampolgársági törvénye alapján — különösen a 2010-es egyszerűsített honosítási rendelkezések szerint — bárki, akinek legalább egy magyar felmenője volt, jogosult lehet a magyar állampolgárságra anélkül, hogy le kellene mondania az amerikai állampolgárságáról. Az Egyesült Államok lehetővé teszi a kettős állampolgárságot, Magyarország pedig kiterjesztette az állampolgárságot a külföldön élő etnikai magyarokra.",
    },
    {
      type: "paragraph",
      text: "Maine, Vermont, New Hampshire, Rhode Island és Massachusetts állam lakói számára a Magyar Tiszteletbeli Konzulátus — Új-Anglia a regionális forrás az eljárás megértéséhez és lebonyolításához. Ez a cikk ismerteti a magyar állampolgárság megszerzésének három fő útját, az egyes utak követelményeit, és hogy a Tiszteletbeli Konzulátus hol illeszkedik a kérelembe.",
    },
    {
      type: "heading",
      text: "Ön esetleg már magyar állampolgár?",
    },
    {
      type: "paragraph",
      text: "A kérelem benyújtása előtt meg kell állapítani, hogy Ön már rendelkezik-e magyar állampolgársággal — vagy azt kell igényelnie. Ez két különböző helyzet, amelyekre nagyon eltérő eljárások vonatkoznak.",
    },
    {
      type: "paragraph",
      text: "Valószínűleg már magyar állampolgár, ha legalább egy magyar szülőtől született, és az a szülő anyakönyveztette a születését a Magyar Polgári Anyakönyvben. A magyar állampolgárság vér szerinti jogon (jus sanguinis) öröklődik — nem évül el, és nem feltétele, hogy Magyarországon élt volna. Ha már állampolgár, nyilvántartásba vételre és útlevélre van szüksége, nem állampolgársági kérelemre.",
    },
    {
      type: "heading",
      text: "A három út a magyar állampolgársághoz",
    },
    {
      type: "subheading",
      text: "1. út: Állampolgárság születéssel (jus sanguinis)",
    },
    {
      type: "paragraph",
      text: "Ha születésekor legalább az egyik szülője magyar állampolgár volt, születésétől fogva magyar állampolgár, függetlenül attól, hogy hol született. Ez akkor is érvényes, ha az Egyesült Államokban született. A kulcslépés az állampolgárság nyilvántartásba vétele — ami a szülő magyar állampolgárságának és az Ön ezzel való kapcsolatának igazolását igényli.",
    },
    {
      type: "list",
      items: [
        "Jellemzően szükséges dokumentumok: születési anyakönyvi kivonat, a szülő magyar születési anyakönyvi kivonata és állampolgársági dokumentumai, néveltérés esetén házassági anyakönyvi kivonatok",
        "Minden US által kiállított dokumentumhoz apostille és magyar fordítás szükséges",
        "A kérelmet ezen a konzulátuson keresztül kell benyújtani, és a Magyar Polgári Anyakönyvhöz továbbítják",
        "Az ügyintézési idő általában 3–6 hónap",
      ],
    },
    {
      type: "subheading",
      text: "2. út: Egyszerűsített honosítás etnikai magyarok számára",
    },
    {
      type: "paragraph",
      text: "Ha a magyar felmenője távolabbi — például nagyszülő vagy dédszülő —, a Magyarország 2010-es egyszerűsített honosítási törvénye alapján jogosult lehet az igénylésre. Ez az út a magyar felmenők igazolását és alapszintű magyar nyelvtudást igényel. Nem szükséges Magyarországon élni.",
    },
    {
      type: "list",
      items: [
        "A magyar felmenőket igazoló dokumentumok szükségesek (születési, házassági és állampolgársági iratok, amelyek az Öntől a magyar felmenőig vezető láncot igazolják)",
        "A konzulátuson lefolytatott alapszintű magyar nyelvvizsgára van szükség — társalgási szint, nem folyékony tudás",
        "A kérelmet ezen a konzulátuson keresztül kell benyújtani, és Magyarországra továbbítják",
        "Az állampolgárság eskütételével jár, miután a kérelmet jóváhagyták",
        "Az ügyintézési idő általában 6–12 hónap",
      ],
    },
    {
      type: "subheading",
      text: "3. út: Általános honosítás (honosítás)",
    },
    {
      type: "paragraph",
      text: "Az általános honosítás azok számára szól, akik megfelelő ideig Magyarországon éltek és teljesítik a lakóhelyi követelményeket. Ez az út ritkán releváns olyan Új-Angliában élők számára, akik nem éltek Magyarországon, és nem ezen a hivatalon keresztül intézhető.",
    },
    {
      type: "heading",
      text: "Mit biztosít a magyar kettős állampolgárság",
    },
    {
      type: "list",
      items: [
        "Magyar útlevél — teljes értékű EU úti okmány, amely vízummentes beutazást biztosít az Európai Unióba és a Schengeni Övezetbe",
        "EU jog bármely EU tagállamban való tartózkodáshoz és munkavállaláshoz vízum vagy munkavállalási engedély nélkül",
        "Szavazati jog a magyar választásokon",
        "Hozzáférés a világ minden táján a magyar konzuli szolgáltatásokhoz",
        "A magyar állampolgárság átörökítésének lehetősége a gyermekekre",
        "A magyarországi öröklési és tulajdonjogok egyszerűsítése és tisztázása",
      ],
    },
    {
      type: "blockquote",
      text: "A magyar útlevél a világ egyik legerősebb úti okmánya — vízummentes vagy érkezéskor megszerezhető vízummal több mint 180 országba beléphetőséget biztosít. Az Új-Angliában élő, magyar gyökerű családok számára ez egy születési jog, amelyhez csupán papírmunka szükséges.",
    },
    {
      type: "heading",
      text: "A Tiszteletbeli Konzulátus szerepe a kérelemben",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia a regionális beviteli pont Maine, Vermont, New Hampshire, Rhode Island és Massachusetts állam lakóinak állampolgársági kérelmei és nyilvántartásba vételei számára. Áttekintjük a dokumentumcsomagot, hitelesítjük, ami konzuli hitelesítést igényel, és a kész kérelmeket az illetékes magyarországi hatósághoz továbbítjuk.",
    },
    {
      type: "paragraph",
      text: "Az egyszerűsített honosítást kérelmezőknek lefolytatjuk a magyar nyelvvizsgát is. Ez nem egy formális vizsga — ez egy beszélgetés. Ha képes megbeszélni a családtörténetét magyarul, valószínűleg megfelel a szükséges szintnek.",
    },
    {
      type: "heading",
      text: "Hol kezdje el",
    },
    {
      type: "paragraph",
      text: "Az első lépés egy tanácsadás — nem egy dokumentumgyűjtési roham. Vegye fel a kapcsolatot ezzel a hivatallal a kapcsolatfelvételi ûrlapon, és írja le helyzetét: hogyan kapcsolódik a magyar állampolgársághoz (melyik felmenő, melyik generáció), milyen dokumentumai vannak, és mi a célja. Megmondjuk, melyik útvonal vonatkozik Önre, milyen dokumentumokat kell összegyűjtenie, és milyen sorrendben. Egyértelmű útvonal nélkül kezdeni időt és pénzt pazarol.",
    },
  ],

  // ─── Post 4: Hungarian Passport Renewal in New England ────────────────────
  "hungarian-passport-renewal-new-england": [
    {
      type: "paragraph",
      text: "A magyar útlevél megújítása Új-Angliában személyes megjelenést igényel a New York-i Magyar Főkonzulátuson. Ez szigorú követelmény — a biometrikus adatokat (ujjlenyomatok és fénykép) olyan speciális berendezésekkel kell felvenni, amelyeket kizárólag hivatásos konzulátusok üzemeltetnek. Egyetlen tiszteletbeli konzulátus sem végezheti ezt a feladatot. Ha máshol talál olyan szolgáltatást, amely ezt állítja, legyen szkeptikus.",
    },
    {
      type: "paragraph",
      text: "Amit ez a hivatal megtehet: megbizonyosodhat arról, hogy amikor Ön megjelenik New Yorkban, a kérelme teljes és a dokumentumai rendben vannak. A hiányos, lejárt vagy helytelenül hitelesített dokumentumokkal benyújtott kérelmek késedelmet szenvednek — néha hónapokig. Egy 30 perces tanácsadás itt ezt megakadályozza.",
    },
    {
      type: "heading",
      text: "Mikor indítsa el a megújítási folyamatot",
    },
    {
      type: "paragraph",
      text: "Ne várja meg, amíg a magyar útlevele lejár. A New York-i Főkonzulátus jelenleg 4–8 hetes előjegyzési várakozással működik, és az időpont utáni feldolgozás további 4–8 hetet vesz igénybe. Ha Magyarországra — vagy bárhová az EU-ba a magyar útlevelével — tervez utazni, kezdje el a megújítási folyamatot legalább négy-öt hónappal az utazás előtt.",
    },
    {
      type: "paragraph",
      text: "Fontos tudnivaló: a magyar kettős állampolgárok jogilag kötelesek a magyar útlevelükkel belépni és kilépni Magyarországra. Ha a magyar útlevele külföldön lejár, bonyolultabb visszatérési helyzetbe kerülhet. A lejárat előtti megújítás mindig a helyes megoldás.",
    },
    {
      type: "heading",
      text: "A magyar útlevél megújításához szükséges dokumentumok",
    },
    {
      type: "list",
      items: [
        "Jelenlegi magyar útlevele (még ha lejárt is — hozza magával)",
        "Kitöltött útlevélkérelem-nyomtatvány (a New York-i Főkonzulátustól szerezhető be)",
        "Egy biometrikus fénykép, amely megfelel a magyar útlevél fényképspecifikációinak (pontos méretek és háttérszín — nem ugyanaz, mint a szokásos US útlevél fényképspecifikáció)",
        "Magyar állampolgársági igazolás, ha az állampolgárság még nem szerepel a Magyar Polgári Anyakönyvben",
        "Az útlevéldíj megfizetése az időpontja idején a Főkonzulátus által meghatározott összegben",
        "18 év alatti gyermekek esetén: mindkét szülő hozzájárulása, vagy az egyedüli szülői jogkör dokumentálása",
      ],
    },
    {
      type: "heading",
      text: "Első útlevél vs. megújítás: a főbb különbségek",
    },
    {
      type: "subheading",
      text: "Első útlevél (korábban soha nem volt magyar útlevele):",
    },
    {
      type: "paragraph",
      text: "Ha először igényel magyar útlevelet — mert nemrégiben regisztrálták állampolgárként, vagy mert vér szerinti jogon állampolgár, de korábban soha nem igényelt —, additional dokumentumokra lesz szüksége a magyar állampolgárság igazolásához. Ez magában foglalhatja a magyarországi születési bejegyzést, a szülők állampolgársági dokumentumait és az állampolgárság polgári anyakönyvi feljegyzését. Ez a hivatal segíthet összeállítani és hitelesíteni ezt a csomagot a New York-i időpontja előtt.",
    },
    {
      type: "subheading",
      text: "Megújítás (korábban már volt magyar útlevele):",
    },
    {
      type: "paragraph",
      text: "A megújítás egyszerűbb. Az állampolgársága már be van jegyezve. Szükséges a lejárt vagy lejáró útlevél, egy aktuális fénykép és a kitöltött nyomtatvány. A megújítási kérelmeknél leggyakoribb hiba a helytelen fénykép — a magyar útlevél fényképspecifikáció eltér az US útlevél specifikációjától. A fénykép elkészítése előtt ellenőrizze a specifikációkat közvetlenül a Főkonzulátusnál.",
    },
    {
      type: "heading",
      text: "Gyermekek esetén: nyilvántartásba vétel az útlevélkérelem előtt",
    },
    {
      type: "paragraph",
      text: "Ha US-ban született gyermeke számára igényel magyar útlevelet, a gyermeket először be kell jegyezni a Magyar Polgári Anyakönyvbe, mielőtt az útlevelet kiadhatják. Ez az útlevélkérelemtől elkülönülő folyamat. Ez a hivatal intézi az Új-Angliában élők születési bejegyzését — lásd a gyermek születésének Magyarországgal való anyakönyvezéséről szóló külön útmutatónkat. A nyilvántartásba vétel 4–8 hetet vesz igénybe; ezt számítsa bele az útlevél ütemterv-tervébe.",
    },
    {
      type: "heading",
      text: "Amiben ez a hivatal segíthet",
    },
    {
      type: "list",
      items: [
        "Dokumentumcsomagjának áttekintése a New York-i időpontja előtt a hibák kiszûrésére, mielőtt azok elutasítást okoznának",
        "Konzuli hitelesítést igénylő dokumentumok hitelesítése vagy autentikálása",
        "Magyar polgári anyakönyvi ügyekben való segítségnyújtás, amelyeket az útlevélkérelem előtt kell rendezni",
        "A folyamattal kapcsolatos kérdések megválaszolása, amelyeket a Főkonzulátus telefonos ügyfélszolgálata nem tud kezelni",
        "Hitelesített magyar fordítók ajánlása, ha bármely dokumentumot le kell fordítani",
      ],
    },
    {
      type: "blockquote",
      text: "A New York-i út egy napot vesz igénybe. A kérelem elutasítása és az újraütemezés hónapokat. Egy rövid tanácsadás itt, mielőtt elindul, a legjobb befektetés, amelyet ebbe a folyamatba tehet.",
    },
    {
      type: "heading",
      text: "Hogyan foglaljon időpontot a Főkonzulátuson",
    },
    {
      type: "paragraph",
      text: "A New York-i Magyar Főkonzulátus az útlevél-időpontokat az online foglalási rendszerén keresztül kezeli. Az időpontok elérhetősége gyakran változik — foglaljon korán, amint lehetséges. Az útlevélidőpontok különösen hetekkel előre betelhetnek.",
    },
    {
      type: "paragraph",
      text: "Vegye fel a kapcsolatot ezzel a hivatallal, ha kérdése van a dokumentumkövetelményekkel kapcsolatban, dokumentumot kell hitelesíteni az időpontja előtt, vagy nem biztos abban, hogy az állampolgárságát megfelelően bejegyezték-e. Hétfőnként vagyunk elérhetők Derryben, NH-ban.",
    },
  ],

  // ─── Post 5: Registering Your Child's Birth with Hungary ──────────────────
  "registering-childs-birth-hungary": [
    {
      type: "paragraph",
      text: "A magyar állampolgársági jog alapján a legalább egy magyar szülőtől született gyermek — bárhol a világon — születésétől fogva magyar állampolgár. A magyarországi anyakönyvezés nem automatikus. Ez egy külön jogi folyamat, és a legtöbb szülő nem is tud a létezéséről, amíg a gyermeke sokkal idősebb nem lesz.",
    },
    {
      type: "paragraph",
      text: "A gyermek születésének Magyarországgal való anyakönyvezésére nincs jogi határidő, de a korai anyakönyvezésnek jelentős gyakorlati előnyei vannak: a gyermek magyar útlevelet (EU úti okmányt) igényelhet, és az anyakönyvezési folyamat lényegesen egyszerűbb, amíg mindkét szülő iratai aktuálisak, elérhetők és vitatlanok. A nagyszülő elhalálozásáig vagy az iratok nehezen megszerezhetővé válásáig való várakozás bonyolítja azt a folyamatot, amelynek nem kellene bonyolultnak lennie.",
    },
    {
      type: "heading",
      text: "Mit jegyeznek be",
    },
    {
      type: "paragraph",
      text: "A gyermek születését a Magyar Polgári Anyakönyvbe (Anyakönyv) jegyezik be. Ez létrehoz egy magyarországi születési feljegyzést — amely teljesen különálló az US születési anyakönyvi kivonattól —, és a gyermek magyar állampolgárságát a hivatalos nyilvántartásban rögzíti. E nélkül a bejegyzés nélkül a gyermek nem igényelhet magyar útlevelet, nem szavazhat a magyarországi választásokon, és nem gyakorolhatja más magyar állampolgári jogait.",
    },
    {
      type: "heading",
      text: "Szükséges dokumentumok",
    },
    {
      type: "list",
      items: [
        "A gyermek US születési anyakönyvi kivonata — az állam titkárának apostille-jével ellátva",
        "A magyar szülő magyar születési anyakönyvi kivonata és érvényes magyar személyi igazolványa vagy útlevele",
        "A szülők házassági anyakönyvi kivonata (ha vonatkozik) — apostille-lel, ha US-ban állítják ki, vagy hitelesített másolattal, ha Magyarországon állítják ki",
        "Ha a magyar szülő az USA-ban született: saját magyarországi születési bejegyzési dokumentumok, amelyek igazolják az állampolgárságukat",
        "Minden US által kiállított dokumentum hitelesített magyar fordítása",
        "Kitöltött magyarországi polgári anyakönyvi kérelem-nyomtatványok (ez a hivatal segít ezekkel)",
      ],
    },
    {
      type: "heading",
      text: "Az eljárás lépésről lépésre",
    },
    {
      type: "subheading",
      text: "1. lépés: US dokumentumok összegyûjtése és apostille-k megszerzése",
    },
    {
      type: "paragraph",
      text: "Kérje a gyermek születési anyakönyvi kivonatát az állam anyakönyvi hivatalától. Majd vigye vagy postán küldje el az állam titkárának az apostille megszerzéséhez. Ez általában 2–6 hetet vesz igénybe, az állam függvényében. Egyes államok pótdíj ellenében gyorsított feldolgozást kínálnak.",
    },
    {
      type: "subheading",
      text: "2. lépés: A magyar szülő dokumentumainak előkészítése",
    },
    {
      type: "paragraph",
      text: "Keresse meg a magyar szülő dokumentumait. Ha azok eredeti, Magyarországon kiállított iratok, esetleg nem igényelnek apostille-t — de szükség lehet hitelesített másolatokra. Ha a dokumentumok régiek, megkopottak, vagy a szülő emigrálása előtt állították ki, további lépések szükségesek a magyarországi anyakönyvből való pótláshoz. Ha nem biztos abban, hogy rendelkezik-e a szükséges iratokkal, vegye fel a kapcsolatot ezzel a hivatallal.",
    },
    {
      type: "subheading",
      text: "3. lépés: Hitelesített fordítások elkészítése",
    },
    {
      type: "paragraph",
      text: "Minden US által kiállított dokumentumot hitelesített fordítóval kell magyarra fordítani. Ez a hivatal tud Önnek tapasztalt fordítókat ajánlani. Ne vegyen igénybe általános fordítási szolgáltatást — a fordítás formátuma is számít.",
    },
    {
      type: "subheading",
      text: "4. lépés: Konzuli időpont ennél a hivatalnál",
    },
    {
      type: "paragraph",
      text: "Foglaljon hétfői időpontot a derryi (NH) helyszínen. Hozza magával az összes eredeti dokumentumot a fordításokkal együtt. Áttekintjük a csomagot, hitelesítjük a konzuli hitelesítést igénylő dokumentumokat, kitöltjük a kérelem-nyomtatványokat, és a Magyar Polgári Anyakönyvhöz továbbítjuk a kérelmet.",
    },
    {
      type: "subheading",
      text: "5. lépés: Magyarországi feldolgozás és anyakönyvi válasz",
    },
    {
      type: "paragraph",
      text: "A Magyar Polgári Anyakönyv feldolgozza a bejegyzést. Ez általában 4–8 hetet vesz igénybe. A bejegyzés után a gyermek kap egy magyarországi polgári anyakönyvi azonosítót, amelyre szükség van a magyar útlevél igényléséhez és a jövőbeli magyar állampolgári jogok gyakorlásához.",
    },
    {
      type: "blockquote",
      text: "A legfontosabb dolog, amit a legtöbb szülő nem tud: a gyermekének már van magyar állampolgársága. Az anyakönyvezés nem adományoz állampolgárságot — hanem rögzíti azt. A különbség lényeges. A gyermek jogai a születés pillanatától fennállnak. Az anyakönyvezés csupán lehetővé teszi e jogok gyakorlását — beleértve az EU útlevélhez való jogot.",
    },
    {
      type: "heading",
      text: "Idősebb vagy felnőtt gyermek anyakönyvezése",
    },
    {
      type: "paragraph",
      text: "A soha be nem jegyzett felnőttek ezt a folyamatot saját nevükben is elvégezhetik. A dokumentumkövetelmények azonosak; a kérelmet saját nevükben nyújtják be. Sok 30-as és 40-es éveikben járó felnőtt teljesíti ezt a folyamatot ma — often ösztönözve az Európában való élés vagy munkavállalás vágyától, vagy a magyar família örökségéhez való visszatérés igényétől.",
    },
    {
      type: "heading",
      text: "Készen áll az elindulásra?",
    },
    {
      type: "paragraph",
      text: "Vegye fel a kapcsolatot ezzel a hivatallal a kapcsolatfelvételi ûrlapon. Írja le helyzetét: melyik szülő magyar, a gyermek születési állama, és körülbelül milyen dokumentumok állnak rendelkezésre. Megmondjuk pontosan, mire van szüksége, mielőtt bármit összegyűjt — megspórolva az időt és megelőzve a leggyakoribb hibákat.",
    },
  ],

  // ─── Post 6: Life Certificate for Pension Recipients ─────────────────────
  "life-certificate-hungary-pension": [
    {
      type: "paragraph",
      text: "A magyar életigazolás — életigazolvány — egy olyan hivatalos dokumentum, amely igazolja, hogy Ön él és külföldön tartózkodik. A Magyar Nyugdíjfolyósító Igazgatóság (NYUFIGAZGATÓSÁG) minden egyes Magyarországon kívül élő nyugdíjastól évente kéri ezt a dokumentumot. Ha az igazolást nem kapják meg időben, a nyugdíjkifizetések felfüggesztésre kerülnek, amíg azt be nem nyújtják.",
    },
    {
      type: "paragraph",
      text: "Az Új-Angliában élő, magyar életigazolásra szoruló nyugdíjasok számára ez a hivatal a legközelebbi és legegyszerűbb lehetőség. Nincs szükség New York-i időpontra. Nincs postai folyamat. Egy hétfői időpont Derryben (NH) kevesebb, mint 20 percet vesz igénybe.",
    },
    {
      type: "heading",
      text: "Kinek van szüksége életigazolásra",
    },
    {
      type: "paragraph",
      text: "Életigazolásra van szüksége, ha az alábbiak valamelyikét kapja Magyarországról: öregségi nyugdíj (öregségi nyugdíj), rokkantsági ellátás, özvegyi nyugdíj, vagy bármely más, a Magyar Nyugdíjfolyósító Igazgatóság által kezelt ellátás. Az éves követelmény nem megtárgyalható — a magyar nyugdíjrendszer feltételezi, hogy a nem reagáló kedvezményezettek vagy elköltöztek, elérhetetlenné váltak, vagy elhunyta.",
    },
    {
      type: "heading",
      text: "Mikor esedékes az igazolás",
    },
    {
      type: "paragraph",
      text: "A Magyar Nyugdíjfolyósító Igazgatóság évente értesítést küld — jellemzően postai úton a magyarországi nyilvántartott címére. Az értesítés meghatározza a határidőt. Az Egyesült Államokban élő sok kedvezményezett nem kapja meg megbízhatóan ezt az értesítést, vagy késve kapja meg. Ne várjon az értesítésre. Ha magyar nyugdíjban részesül, és az elmúlt 12 hónapban nem nyújtott be életigazolást, feltételezze, hogy egy esedékes, és vegye fel a kapcsolatot ezzel a hivatallal.",
    },
    {
      type: "heading",
      text: "Mit hozzon magával az időpontra",
    },
    {
      type: "list",
      items: [
        "Érvényes, fényképes személyi igazolvány — US útlevél, jogosítvány vagy magyar személyazonosító igazolvány",
        "A magyar személyi azonosítószáma (személyazonosító igazolvány száma vagy adóazonosító szám), ha rendelkezik vele",
        "Minden értesítés, amelyet a Magyar Nyugdíjfolyósító Igazgatóságtól kapott, ha rendelkezik ilyennel — hozza magával még akkor is, ha nem tudja elolvasni",
        "A Magyar Nyugdíjfolyósító Igazgatóság által kiállított életigazolvány-nyomtatvány — ez a hivatal tartalmaz szabványos nyomtatványokat, ha nincs ilyenje",
      ],
    },
    {
      type: "heading",
      text: "Mi történik az időpont alatt",
    },
    {
      type: "paragraph",
      text: "Ön személyesen megjelenik. A tiszteletbeli konzul a fényképes személyi igazolványa alapján igazolja a személyazonosságát, tanúsítja az aláírását az életigazolvány-nyomtatványon, és rányomja a hivatalos konzuli pecsétet. A kész igazolást ezután Ön közvetlenül elküldheti a Magyar Nyugdíjfolyósító Igazgatóságnak, vagy segíthetünk a postázási cím meghatározásában, ha nem tudja, hová kell küldeni.",
    },
    {
      type: "paragraph",
      text: "A teljes folyamat 15–20 percet vesz igénybe. A konzuli hitelesítésért szolgáltatási díjat számítunk fel — kérjük, ellenőrizze az aktuális díjszabást a kapcsolatfelvételi oldalunkon, vagy érdeklődjön előre.",
    },
    {
      type: "heading",
      text: "Ha a nyugdíja már felfüggesztésre került",
    },
    {
      type: "paragraph",
      text: "Ha a nyugdíját hiányzó életigazolás miatt felfüggesztették, az újraindítás folyamata azonos: jelenjen meg személyesen, töltse ki az életigazolást, és nyújtsa be a Magyar Nyugdíjfolyósító Igazgatóságnak. Az újraindítás általában 4–8 hetet vesz igénybe, miután az igazolást Magyarországon befogadják. A legtöbb esetben a felfüggesztett kifizetéseket visszamenőlegesen teljesítik, miután az igazolást feldolgozzák.",
    },
    {
      type: "blockquote",
      text: "Ne hagyja, hogy egy adminisztratív határidő megszakítsa a megszolgált juttatást. Az időpont 20 percet vesz igénybe. Foglalja le azt a pillanatban, amikor megtudja, hogy esedékes.",
    },
    {
      type: "heading",
      text: "Ha nem tud Derrybe utazni",
    },
    {
      type: "paragraph",
      text: "Az életigazolások személyes személyazonosság-ellenőrzést igényelnek — postai úton vagy távolról nem dolgozhatók fel. Ha egészségügyi vagy mozgáskorlátozottsági okokból nem tud eljutni a derryi (NH) irodánkba, vegye fel velünk a kapcsolatot az alternatívák megvitatásához. Kivételes esetekben alternatív megoldások lehetségesek.",
    },
    {
      type: "paragraph",
      text: "Foglaljon hétfői időpontot az online foglalási rendszerünkön keresztül, vagy használja a kapcsolatfelvételi ûrlapot kérdések feltevéséhez, mielőtt bejön.",
    },
  ],

  // ─── Post 7: Power of Attorney for Property Matters ───────────────────────
  "power-of-attorney-hungary-property": [
    {
      type: "paragraph",
      text: "A magyarországi ingatlanügyletekhez szükséges meghatalmazás — meghatalmazás — felhatalmazást ad valakinek Magyarországon, hogy az Ön nevében eljárjon jogi, pénzügyi vagy ingatlanügyekben. Ha Magyarországon ingatlana van, részt vesz egy örökösödési eljárásban, vagy bármilyen jogi ügyet kell intéznie Magyarországon anélkül, hogy fizikailag jelen lenne, szüksége van erre a dokumentumra. És helyesen kell elkészíteni, különben egy magyarországi bíróság, közjegyző vagy anyakönyvi hivatal elutasítja.",
    },
    {
      type: "paragraph",
      text: "A jó hír: nem kell Budapestre repülnie a magyar meghatalmazás aláírásához. Ez a hivatal — a Magyar Tiszteletbeli Konzulátus — Új-Anglia — tanúsíthatja és hitelesítheti az aláírását a meghatalmazás dokumentumon Derryben (NH). Az eredmény egy olyan dokumentum, amelyet a magyarországi hatóságok elfogadnak.",
    },
    {
      type: "heading",
      text: "Mire használják a meghatalmazást Magyarországon",
    },
    {
      type: "list",
      items: [
        "Családtag, ügyvéd vagy megbízott felhatalmazása Magyarországon ingatlan vételére vagy eladására az Ön nevében",
        "Felhatalmazás az örökösödési eljárás (hagyatéki eljárás) intézésére a fizikai jelenlét nélkül",
        "Valaki meghatalmazása a magyarországi bírósági eljárásokban való képviseletére",
        "Felhatalmazás adása szerződések aláírására, bankszámlák elérésére vagy ingatlanok az Ön nevében való kezelésére",
        "Képviselő meghatalmazása a magyarországi kormányhivatalokkal, anyakönyvi irodákkal és adóhatóságokkal való kapcsolattartásra az Ön nevében",
      ],
    },
    {
      type: "heading",
      text: "A magyar meghatalmazás jogi érvényességéhez szükséges feltételek",
    },
    {
      type: "paragraph",
      text: "Az amerikás kontextusban működő meghatalmazás nem biztos, hogy automatikusan működik Magyarországon. A magyar jog meghatározott elemeket ír elő, és a magyarországi közjegyzők és bíróságok stricten ragaszkodnak ezekhez.",
    },
    {
      type: "list",
      items: [
        "A dokumentumnak magyar nyelvűnek kell lennie, vagy hitelesített magyar fordítással kell rendelkeznie",
        "Pontosan meg kell határoznia a felhatalmazás terjedelmét — a homályos, általános meghatalmazásokat gyakran kifogásolják",
        "Az aláírást konzuli tisztviselőnek (ezen hivatal) vagy magyarországi közjegyzőnek kell tanúsítania",
        "Az aláírás hitelesítéséhez konzuli pecsétet kell alkalmazni",
        "Kifejezetten ingatlanügyletekhez: a magyar jog gyakran megköveteli, hogy a meghatalmazás közokirat formájában készüljön — a magyarországi ügyvéd vagy közjegyző tájékoztatja erről a követelményről",
      ],
    },
    {
      type: "heading",
      text: "Az eljárás lépésről lépésre",
    },
    {
      type: "subheading",
      text: "1. lépés: Kérje a dokumentum elkészítését Magyarországon",
    },
    {
      type: "paragraph",
      text: "A legbiztonságosabb megközelítés, ha a meghatalmazást magyarországi ügyvéddel (ügyvéd) vagy közjegyzővel készítteti el — aki pontosan tudja, mit igényel a magyarországi ügylete. A helyes jogi formátumban elkészítik a dokumentumot, és e-mailben elküldhetik aláírásra. Ne készítsen meghatalmazást maga egy angol nyelvű sablon alapján; az elutasítás kockázata nagyon magas.",
    },
    {
      type: "subheading",
      text: "2. lépés: Foglaljon időpontot ennél a hivatalnál",
    },
    {
      type: "paragraph",
      text: "Hozza el a kinyomtatott, aláíratlan dokumentumot a hétfői időpontjára Derrybe (NH). Hozzon magával érvényes, fényképes személyi igazolványt is. Ne írja alá a dokumentumot az időpontja előtt — az aláírást a Tiszteletbeli Konzulnak személyesen kell tanúsítania.",
    },
    {
      type: "subheading",
      text: "3. lépés: Aláírás és konzuli hitelesítés",
    },
    {
      type: "paragraph",
      text: "Az időpont alatt a Tiszteletbeli Konzul igazolja a személyazonosságát, tanúsítja az aláírását, és alkalmazza a hivatalos konzuli hitelesítést. Ez hitelesíti az aláírást eredetiként, és megerősíti, hogy Ön önkéntesen hajtotta végre a dokumentumot egy konzuli tisztviselő jelenlétében.",
    },
    {
      type: "subheading",
      text: "4. lépés: A dokumentum elküldése Magyarországra",
    },
    {
      type: "paragraph",
      text: "Postán vagy futárral küldje el a hitelesített dokumentumot a magyarországi képviselőjének — vagy az ügyletet intéző magyarországi ügyvédnek vagy közjegyzőnek. Ilyen jellegű dokumentumokhoz nyomkövetős nemzetközi futárszolgálat használatát javasoljuk. Tartson meg egy fénymásolatot saját nyilvántartásába.",
    },
    {
      type: "blockquote",
      text: "A helyesen elkészített meghatalmazás az a kulcs, amely lehetővé teszi a magyarországi ügyletet az Ön távolléte esetén is. A helytelenül elkészített meghatalmazás hónapos késedelmet okoz. Ne írjon alá semmit az időpont előtt, és ne használjon átnézetlen sablont.",
    },
    {
      type: "heading",
      text: "Különleges megjegyzés: öröklési eljárások",
    },
    {
      type: "paragraph",
      text: "A magyar öröklési jog (öröklési jog) megköveteli, hogy az örökösök személyesen vegyenek részt a hagyatéki eljárásban (hagyatéki eljárás), vagy megfelelően meghatalmazott képviselőn keresztül. Ha Ön Új-Angliában élő örökös, aki nem tud Magyarországra utazni az eljárás összes szakaszában, a konzulilag hitelesített meghatalmazás az a mechanizmus, amely lehetővé teszi az eljárás Ön nélkül való lefolytatását.",
    },
    {
      type: "paragraph",
      text: "A magyarországi öröklési határidők szűkek lehetnek. Ha tudomást szerzett egy öröklési helyzetről, haladéktalanul vegye fel a kapcsolatot ezzel a hivatallal a meghatalmazási folyamat megvitatásához — a dokumentum aláírásának késedelme közvetlenül az örökösödési eljárás késedelmét okozza.",
    },
    {
      type: "heading",
      text: "Foglaljon időpontot",
    },
    {
      type: "paragraph",
      text: "Írja le a helyzetét a kapcsolatfelvételi ûrlapon az időpontfoglalás előtt — beleértve, hogy mire szolgál a meghatalmazás, és hogy a dokumentumot már elkészítették-e. Megmondjuk, mit kell hoznia, és válaszolunk a kérdéseire a hétfői időpontja előtt.",
    },
  ],

  // ─── Post 8: Honorary Consul vs. Consulate General ────────────────────────
  "honorary-consul-vs-consulate-general": [
    {
      type: "paragraph",
      text: "Állandóan felmerül a kérdés: Az Új-Angliai hivatalt hívjam, vagy menjek New Yorkba? A hat új-angliai állam magyar állampolgárai és kettős állampolgárai számára ennek a kérdésnek a egyértelmű ismerete jelentős időt és pénzt takarít meg. A New York-i Magyar Főkonzulátus és a Magyar Tiszteletbeli Konzulátus — Új-Anglia ugyanazt a közösséget szolgálják, de különböző ügyeket intéznek.",
    },
    {
      type: "paragraph",
      text: "Ez a cikk feltérképezi, hogy melyik hivatal mivel foglalkozik, így Ön a kezdetektől a megfelelő helyet keresi fel — ahelyett, hogy New Yorkba utazna valamiért, amit Derryben is el lehet intézni, vagy hónapokig várna az Új-Angliai időpontra valamiért, amelyhez New York szükséges.",
    },
    {
      type: "heading",
      text: "Amit csak a New York-i Főkonzulátus tud elvégezni",
    },
    {
      type: "paragraph",
      text: "A Főkonzulátus hivatásos magyar diplomatákkal működő teljes körű diplomáciai képviselet. Olyan felszerelése és jogi felhatalmazása van, amellyel a tiszteletbeli konzulátusok nem rendelkeznek. A következő szolgáltatások csak New Yorkon keresztül érhetők el:",
    },
    {
      type: "list",
      items: [
        "Magyar útlevél kiállítása és megújítása (biometrikus adatfelvétel szükséges — speciális felszerelés a helyszínen)",
        "Sürgős úti okmányok és laissez-passer sürgetős utazáshoz",
        "Magyar nemzeti személyazonosító igazolvány (személyigazolvány) kiállítása",
        "Személyes biometrikus adatfelvétel az állampolgársági kérelmekhez",
        "Vízumfeldolgozás bizonyos kategóriájú nem magyar állampolgárok számára",
        "Magyar jogosítvány csereszolgáltatások",
      ],
    },
    {
      type: "heading",
      text: "Amit az Új-Angliai Tiszteletbeli Konzulátus intéz",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia fel van hatalmazva a dokumentum- és hitelesítési szolgáltatások jelentős körének intézésére — hétfői időpontokkal Derryben (NH), ahelyett, hogy egy teljes napot kellene New York Citybe utazni.",
    },
    {
      type: "list",
      items: [
        "US által kiállított dokumentumok konzuli hitelesítése és legalizálása a magyarországi felhasználáshoz",
        "Aláírások és dokumentumok közjegyzői hitelesítése magyar konzuli kontextusban",
        "Magyar dokumentumok hiteles másolatainak igazolása",
        "Életigazolványok (életigazolás) kiállítása a magyar nyugdíjasoknak",
        "Magyar szülőktől született, US-ban született gyermekek születési bejegyzése",
        "Meghatalmazás aláírásának tanúsítása és hitelesítése magyarországi ingatlan- és jogi ügyekhez",
        "Nyilatkozatok tanúsítása és eskü alatti vallomások a magyarországi eljárásokhoz",
        "Útmutatás és kérelem-támogatás a vér szerinti állampolgárság és az egyszerűsített honosítás esetén",
        "Dokumentumcsomag előzetes áttekintése a New York-i Főkonzulátus látogatásának előkészítéséhez",
      ],
    },
    {
      type: "blockquote",
      text: "Gondoljon így erre: New Yorknak van felszerelése a személyazonossági okmányok kiadásához. Új-Angliának van felhatalmazása és hozzáférése minden más intézésére — és egy órányira van Bostontól, nem négyre.",
    },
    {
      type: "heading",
      text: "Ha mindkettőre szüksége van",
    },
    {
      type: "paragraph",
      text: "Egyes helyzetek mindkét hivatal szolgáltatásait igénylik — és a sorrend lényeges. Például: ha új magyar útlevélre van szüksége, és egy gyermek születési bejegyzését is el kell végeznie, először a születési bejegyzést kell elvégezni (amelyet ez a hivatal intéz), mielőtt a New York-i Főkonzulátus útlevelet adhat ki a gyermek nevére. Rossz sorrendben elindítva mindkét folyamat késedelmet szenved.",
    },
    {
      type: "paragraph",
      text: "Ha nem biztos, melyik hivatalt keresse fel először, használja az itteni kapcsolatfelvételi ûrlapot. Írja le, mit szeretne elérni — ne azt a szolgáltatást, amelyre szüksége van, hanem a célt. Megmondjuk, melyik hivatal intézi, és milyen sorrendben kell eljárni.",
    },
    {
      type: "heading",
      text: "A New York-i Főkonzulátus elérhetősége",
    },
    {
      type: "paragraph",
      text: "A New York-i Magyar Főkonzulátus a New England-i Egyesült Államok egész területén élő magyar állampolgárokat szolgálja. Az időpontok elérhetősége gyakran változik; foglaljon az online rendszerükön keresztül, amilyen korán csak lehetséges. Különösen az útlevél-időpontok hetekkel előre betelhetnek.",
    },
    {
      type: "paragraph",
      text: "Az Új-Angliában élők számára irodánk az első hívás a konzuli igények túlnyomó többségéhez. A New York-i utat tartsa fenn azokra a szolgáltatásokra, amelyek valóban szükségessé teszik.",
    },
  ],

  // ─── Post 9: What to Bring to Your Consulate Appointment ─────────────────
  "document-checklist-consulate-appointment": [
    {
      type: "paragraph",
      text: "Hogy mit vigyen magával a konzulátusi időpontra — ez az a kérdés, amelyet az ütemezett látogatás előtti héten a legtöbbször felvetnek. Hiányos dokumentumcsomaggal érkezni azt jelenti, hogy vagy újra kell ütemezni, vagy második utat kell tenni — egyik sem kényelmes, ha arra szervezte magát, hogy egy hétfőn Derrybe (NH) jön.",
    },
    {
      type: "paragraph",
      text: "Ez az ellenőrzőlista szolgáltatástípus szerint van rendezve. Keresse meg a szükséges szolgáltatást, erősítse meg, hogy rendelkezik minden felsorolt elemmel, és érkezzen magabiztosan. Ha bármilyen kétség merül fel egy adott dokumentummal kapcsolatban, használja a kapcsolatfelvételi ûrlapot az időpontja előtt — előre megmondjuk.",
    },
    {
      type: "heading",
      text: "Minden időpontra: általános követelmények",
    },
    {
      type: "list",
      items: [
        "Érvényes, fényképes személyi igazolvány — US útlevél, jogosítvány vagy magyar személyazonosító igazolvány. Aktuálisnak és nem lejártnak kell lennie.",
        "Hitelesítendő, közjegyzileg hitelesítendő vagy hitelesítésre kerülő dokumentum(ok) — csak eredeti. A legtöbb szolgáltatásnál a másolatok nem fogadhatók el.",
        "Fizetség — készpénz vagy Sylvia Rich nevére kiállított csekk. A díj a szolgáltatástól függ; ha nem biztos az összegben, előre érdeklődjön.",
        "Minden, magyarországi hatóságtól kapott, az ügyére vonatkozó levelezés, még ha nem is tudja elolvasni — hozza magával mindenképpen.",
      ],
    },
    {
      type: "heading",
      text: "Életigazolvány (életigazolás) a magyar nyugdíjhoz",
    },
    {
      type: "list",
      items: [
        "Érvényes, fényképes személyi igazolvány",
        "Az életigazolvány-nyomtatvány a Magyar Nyugdíjfolyósító Igazgatóságtól (NYUFIGAZGATÓSÁG) — vagy kérje, hogy ez a hivatal biztosítson nyomtatványt az időpontján",
        "A magyar személyi azonosítószáma (ha ismert)",
        "A kapott nyugdíjfolyósítói értesítés (ha kapott)",
      ],
    },
    {
      type: "heading",
      text: "US dokumentum konzuli hitelesítése",
    },
    {
      type: "list",
      items: [
        "Eredeti US dokumentum (születési anyakönyvi kivonat, házassági anyakönyvi kivonat, halotti anyakönyvi kivonat, bírósági végzés, iskolai oklevél stb.)",
        "Az állami titkár által már rányomott apostille — ha a befogadó magyarországi hatóság előbb apostille-t igényel",
        "A dokumentum hitelesített magyar fordítása (szükséges a magyarországi intézményeknél való benyújtáshoz)",
        "A magyarországi hatóság levele vagy nyomtatványa, amely leírja, mire van szükségük — ez segít helyesen hitelesíteni",
        "Érvényes fényképes személyi igazolvány",
      ],
    },
    {
      type: "heading",
      text: "Meghatalmazás magyarországi ingatlan- vagy jogi ügyekhez",
    },
    {
      type: "list",
      items: [
        "A meghatalmazás dokumentum, amelyet egy magyarországi ügyvéd állított össze magyarul — kinyomtatva, aláíratlanul. Ne írja alá az időpontja előtt.",
        "Érvényes fényképes személyi igazolvány",
        "A dokumentumot összeállító magyarországi ügyvéd vagy közjegyző elérhetősége, esetleges kérdéseink esetén",
      ],
    },
    {
      type: "heading",
      text: "Gyermek születési bejegyzése Magyarországon",
    },
    {
      type: "list",
      items: [
        "A gyermek US születési anyakönyvi kivonata — az állami titkár apostille-jével ellátva",
        "A magyar szülő születési anyakönyvi kivonata és érvényes magyar útlevele vagy személyi igazolványa",
        "A szülők házassági anyakönyvi kivonata (ha vonatkozik) — US kiállítás esetén apostille-lel ellátva",
        "Minden US dokumentum hitelesített magyar fordítása",
        "Kitöltött Magyar Polgári Anyakönyvi kérelem-nyomtatványok — ez a hivatal az időponton segíthet ezekkel",
      ],
    },
    {
      type: "heading",
      text: "Állampolgársági kérelem-támogatás / egyszerűsített honosítás",
    },
    {
      type: "list",
      items: [
        "A magyar felmenők igazolása: születési anyakönyvi kivonatok, házassági anyakönyvi kivonatok és az Öntől a magyar felmenőig vezető láncot igazoló állampolgársági iratok",
        "Apostille-ek a lánc összes US által kiállított dokumentumán",
        "Minden US dokumentum hitelesített magyar fordítása",
        "Érvényes fényképes személyi igazolvány",
        "Minden korábbi magyar dokumentum, amellyel rendelkezik — útlevelek, személyi igazolványok, korábbi polgári anyakönyvi iratok",
      ],
    },
    {
      type: "heading",
      text: "Nyilatkozat vagy eskü alatti vallomás magyarországi eljáráshoz",
    },
    {
      type: "list",
      items: [
        "A nyilatkozat vagy vallomás szövege — ha lehetséges, magyarul fogalmazva, vagy angolul hitelesített fordítással",
        "A nyilatkozatban hivatkozott bármely alátámasztó dokumentum",
        "Érvényes fényképes személyi igazolvány",
      ],
    },
    {
      type: "blockquote",
      text: "Ha kétség merül fel e lista bármely elemével kapcsolatban, küldjön üzenetet az időpontja előtt. A helyzet leírása öt percet vesz igénybe. A hiányzó dokumentum miatti újraütemezés heteket vesz igénybe.",
    },
    {
      type: "heading",
      text: "Gyakorlati tanácsok az időpontra",
    },
    {
      type: "list",
      items: [
        "Érkezzen néhány perccel korábban — a konzuli időpontok menetrend szerint zajlanak, és a késői kezdés befolyásolhatja a nyújtott szolgáltatásokat",
        "Hozzon eredetiket ÉS jó minőségű fénymásolatokat minden dokumentumból. Egyes szolgáltatások megkövetelik, hogy megtartsunk egy másolatot.",
        "Ha a neve különbözőképpen szerepel a különböző dokumentumokon (leánykori név, középső nevek, névváltoztatások), hozzon dokumentációt az eltérés magyarázatára",
        "Ha más személy nevében jár el, hozza magával az erre vonatkozó meghatalmazás dokumentációját",
        "A gyermekeknek személyesen jelen kell lenniük az irataikat érintő bármely időponton, kivéve, ha rendelkezik dokumentált felhatalmazással az ő nevükben való eljárásra",
      ],
    },
    {
      type: "paragraph",
      text: "Foglalja le hétfői időpontját az online ütemező rendszeren keresztül, vagy vegye fel a kapcsolatot ezzel a hivatallal kérdések esetén. Azért vagyunk itt, hogy ezt a folyamatot a lehető legzökkenőmentesebbé tegyük.",
    },
  ],

  // ─── Post 10: The Hungarian Community in New England ──────────────────────
  "hungarian-community-new-england": [
    {
      type: "paragraph",
      text: "Új-Angliában a magyar közösség gyökerei mélyebbek, mint a legtöbben gondolják. Új-Anglia a huszadik század eleji nagy bevándorlási hullámok idején a magyarok egyik elsődleges úticélja volt — a régió textilüzemeiben, gyáraiban és bányáiban munkát kereső munkások vonzotta. Leszármazottaik ma is itt élnek, hat állam között szétszórva, és sokan most fedezik fel vagy fedezik újra ezt az örökséget értelmes módon.",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia ennek a közösségnek a szolgálatára jött létre. Ennek a szolgálatnak része a közösség magáról való tájékoztatása is — a történelemről, a szervezetekről és a régió magyar örökségéhez való kapcsolódás lehetőségeiről.",
    },
    {
      type: "heading",
      text: "A magyarok Új-Angliába való bevándorlásának rövid története",
    },
    {
      type: "paragraph",
      text: "A magyarok Új-Angliába való bevándorlása több jól elkülöníthető hullámban zajlott. Az első nagy hullám 1880 és 1920 között érkezett — mezőgazdasági és ipari munkások, sokan olyan régiókból, amelyek ma Szlovákia, Románia és Ukrajna területén fekszenek, de akkor a Magyar Királyság részei voltak. Az ipari városokban telepedtek le: Bridgeportban és New Britainban (Connecticut); Worcesterben, Lowellben és Springfieldben (Massachusetts); és kisebb bányászvárosokban a régióban.",
    },
    {
      type: "paragraph",
      text: "Egy második, nagyon eltérő hullám érkezett az 1956-os sikertelen Magyar Forradalom után. Ezek képzett szakemberek, értelmiségiek és politikai menekültek voltak, akik a szovjet elnyomás elől menekültek, és az Egyesült Államok egész területén, köztük Új-Angliában is letelepedtek. Sokan kerültek állásba egyetemeken, kórházakban és kutatóintézetekben. Gyermekeik és unokáik a régió mai magyar-amerikai értelmiségi közösségének jelentős részét alkotják.",
    },
    {
      type: "paragraph",
      text: "Egy harmadik, folyamatosan zajló hullám 2004 óta érkezik, amikor Magyarország csatlakozott az Európai Unióhoz, és különösen a 2010-es évek gazdasági változásai óta — szakemberek, diákok és a két ország között egyidejűleg kapcsolatot tartó családok.",
    },
    {
      type: "heading",
      text: "Magyar-amerikai szervezetek Új-Angliában",
    },
    {
      type: "subheading",
      text: "Kulturális és örökségmegőrző szervezetek",
    },
    {
      type: "paragraph",
      text: "Több szervezet is őrzi és ünnepli a magyar kultúrát Új-Angliában. Magyar-amerikai kulturális klubok, néptánc-csoportok és örökségmegőrző társaságok működnek Massachusetts és Connecticut nagyobb városaiban. Sokan szerveznek éves eseményeket Szent István napja (augusztus 20.) köré, a magyar nemzeti ünnep alkalmából, valamint az 1956-os Forradalom évfordulója (október 23.) körül. Ha a legközelebbi szervezetet keresi, vegye fel a kapcsolatot ezzel a konzulátussal — naprakész elérhetőségeket tartunk a regionális közösségről.",
    },
    {
      type: "subheading",
      text: "Magyar Református Egyházi Közösségek",
    },
    {
      type: "paragraph",
      text: "A Magyar Református Egyház történelmileg az Egyesült Államokban élő magyar közösségek egyik legfontosabb intézménye volt. Új-Angliában több gyülekezet is tart istentiszteleteket magyarul, és társadalmi-kulturális központként szolgálja a magyar-amerikai családokat. Ezek a közösségek kapcsolatot tartanak a magyarországi egyházakkal, és kapcsolódási pontot jelentenek az újonnan érkezők és a többgenerációs családok számára egyaránt.",
    },
    {
      type: "subheading",
      text: "Magyar Nyelviskolák és Oktatás",
    },
    {
      type: "paragraph",
      text: "Több szombati magyar nyelviskolán is működik a nagy-bostoni térségben és Connecticutban, a magyar szülők gyermekei és a nyelvet megőrizni vagy visszaszerezni kívánó unokák számára. A magyar kormány Collegium Hungaricum és kapcsolódó programjai szintén kínálnak forrásokat a magyar nyelvet tanulóknak. A nyelvismeretnek közvetlen relevanciája van az egyszerűsített honosítás keretében benyújtott állampolgársági kérelmek esetén — lásd az állampolgársági útmutatónkat a részletekért.",
    },
    {
      type: "heading",
      text: "A Tiszteletbeli Konzulátus szerepe a közösségi életben",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia nem csupán dokumentumfeldolgozó iroda. Hat állam hivatalos magyar diplomáciai képviseletja, és ennek a szerepnek része a közösség közösségként való támogatása — nem csupán az egyéni bürokratikus igényekkel rendelkező személyek kiszolgálása.",
    },
    {
      type: "list",
      items: [
        "Részt veszünk az Új-Angliában tartott magyar-amerikai közösségi eseményeken",
        "Tájékoztatást és ajánlásokat tudunk adni közösségi szervezetekről, nyelvi forrásokról és kulturális programokról",
        "Segíthetünk a közösségi szervezeteknek a magyar kulturális és diplomáciai ügyekkel kapcsolatos kérdéseiben",
        "Szívesen fogadjuk azok megkeresését, akik a magyar örökséggel szeretnének kapcsolatba kerülni Új-Angliában — az állampolgársági és dokumentumszolgáltatások igénybevétele nem feltétele a kapcsolatfelvételnek",
      ],
    },
    {
      type: "blockquote",
      text: "Magyarország nem felejtette el a diaszpóráját. Az itt élő közösség — akár három generációval távolabb, akár frissen érkezett — a nemzet történetének része. Ez a hivatal azért létezik, hogy ezt a kapcsolatot életben tartsa és működőképessé tegye.",
    },
    {
      type: "heading",
      text: "Újrakapcsolódás a magyar örökséghez",
    },
    {
      type: "paragraph",
      text: "Sokan először azért keresik fel ezt a hivatalt, mert egy szülőjük vagy nagyszülőjük elhunyt, és magyar dokumentumokat, ingatlant vagy megoldatlan jogi kérdéseket hagyott hátra. A magyar bürokráciával való ez a kapcsolatfelvételi pillanat sokszor az örökséggel való szélesebb körű újrakapcsolódássá válik — a nyelv megtanulása, a családtörténet megismerése, a kettős állampolgárság megszerzése.",
    },
    {
      type: "paragraph",
      text: "Ha Ön ennél a kiindulópontnál tart — bizonytalan a magyar örökségét, az esetleg meglévő jogait vagy dokumentumait, vagy a kapcsolat lehetőségét illetően —, vegye fel a kapcsolatot. Az ezen a webhelyen lévő kapcsolatfelvételi ûrlap a helyes kiindulópont. Írja le a családi hátterét, amit tud, és ami érdekli. Megmondjuk, mi lehetséges.",
    },
    {
      type: "heading",
      text: "Országos Magyar-Amerikai Erőforrások",
    },
    {
      type: "list",
      items: [
        "Amerikai Magyar Szövetség (AHF) — az Egyesült Államok legrégebbi és legnagyobb magyar-amerikai érdekképviseleti szervezete",
        "Magyar-Amerikai Koalíció — politikai és kulturális érdekképviselet Washingtonban, DC-ben",
        "Balassi Intézet (Collegium Hungaricum) — több US városban működő magyar kulturális központok; magyar nyelvi képzés és kulturális programok",
        "Washingtoni Magyar Nagykövetség — politikai szintű együttműködés és konzuli felügyelet",
        "New York-i Magyar Főkonzulátus — teljes körű konzuli szolgáltatások az USA északkeleti részén",
      ],
    },
    {
      type: "paragraph",
      text: "Ez a hivatal az Ön helyi kapcsolattartási pontja. Legyen szó okmányhitelesítésről, életigazolvány kiadásáról, vagy csupán egy beszélgetésről arról, mit jelent 2026-ban magyarnak lenni Amerikában — hétfőnként itt vagyunk Derryben (NH).",
    },
  ],

  // ─── Post 11: Apostille in New England ────────────────────────────────────
  "apostille-new-england-guide": [
    {
      type: "paragraph",
      text: "A magyar dokumentumfeldolgozás egyik leggyakoribb — és legköltségesebb — hibája az apostille összetévesztése a konzuli hitelesítéssel. Hasonlóan néznek ki, mindkettő hivatalos pecséttel jár, és a magyarországi hatóságok néha ugyanazon dokumentumhoz mindkettőt igényelnek. A különbség megértése az iratok összegyűjtése előtt heteket takaríthat meg az újramunkálatokban, és egyes esetekben megelőzheti az elmulasztott jogi határidőt.",
    },
    {
      type: "paragraph",
      text: "Ez az útmutató elmagyarázza, mi az apostille, mi a konzuli hitelesítés, mikor kell melyiket, és — gyakorlatilag — hol szerezhető be apostille Új-Angliában.",
    },
    {
      type: "heading",
      text: "Mi az apostille?",
    },
    {
      type: "paragraph",
      text: "Az apostille egy szabványosított hitelesítési tanúsítvány, amelyet a külföldi közokiratok hitelesítési kötelezettségének eltörléséről szóló 1961-es Hágai Egyezmény hozott létre. Amikor egy hatósági dokumentumot az egyik országban állítanak ki, és azt egy másik, szintén a Hágai Egyezmény tagállamának számító országban kell felhasználni, az apostille tanúsítja, hogy a kiállító hatóság jogosult, és az okiratot aláíró tisztviselőnek joga volt arra.",
    },
    {
      type: "paragraph",
      text: "New Hampshire-ben az apostille-t a New Hampshire-i Állami Titkár állítja ki. Az eljárás a New Hampshire-i kormányzati hatóság által kiállított bármely dokumentumra vonatkozik — születési anyakönyvi kivonatok az NH Anyakönyvi Irodától, bírósági végzések, közjegyzi hitelesítésű dokumentumok és hasonló közokiratok. Az apostille nem igazolja a dokumentum tartalmát; a hivatalos aláírás és pecsét hitelességét tanúsítja.",
    },
    {
      type: "heading",
      text: "Mi a konzuli hitelesítés?",
    },
    {
      type: "paragraph",
      text: "A konzuli hitelesítés — más névena konzuli legalizáció — konzuli tisztviselő végzi, és tanúsítja, hogy egy dokumentum hiteles és alkalmas egy adott ország céljaira való felhasználásra. Amikor ez a hivatal Magyarország céljaira hitelesít egy US dokumentumot, a dokumentum eredetiségét és jogszerűségét erősítjük meg diplomáciai szempontból. Ez a Magyar Kormány hatályát tükrözi, és a magyarországi bíróságok, közjegyzők, anyakönyvi irodák és intézmények elismerik.",
    },
    {
      type: "paragraph",
      text: "A konzuli hitelesítést a Magyar Tiszteletbeli Konzulátus — Új-Anglia végzi. Ez különbözik az apostille-től, és sok esetben a magyarországi hatóságok az egyiket, a másikat, vagy mindkettőt kérik — a dokumentum jellegétől és felhasználásától függően.",
    },
    {
      type: "heading",
      text: "Apostille vs. konzuli hitelesítés: mikor melyikre van szükség",
    },
    {
      type: "subheading",
      text: "Csak apostille",
    },
    {
      type: "paragraph",
      text: "Ha Magyarország elfogad egy szokásos US közokiratot, és nem igényel további konzuli bevonást, általában elegendő az apostille az állami titkártól. Ez a leggyakrabban a magyarországi polgári anyakönyvi célokra benyújtott US születési anyakönyvi kivonatokra és magyarországi közigazgatási eljárásokhoz benyújtott US házassági anyakönyvi kivonatokra vonatkozik. Magyarország a Hágai Egyezmény tagja, így az érvényes apostille-lel ellátott US dokumentumokat általában hitelesnek ismerik el további konzuli hitelesítés nélkül.",
    },
    {
      type: "subheading",
      text: "Csak konzuli hitelesítés",
    },
    {
      type: "paragraph",
      text: "Ha egy dokumentumot olyan magyarországi hatóságnak nyújt be, amely kifejezetten konzuli hitelesítést igényel — például a konzulátuson tanúsított meghatalmazást, vagy egy magyar konzuli tisztviselő által hitelesített aláírt nyilatkozatot —, az apostille nem a releváns lépés. A konzuli pecsét és aláírás ettől a hivatal biztosítja azt a hitelesítést, amelyre a magyarországi hatóságnak szüksége van.",
    },
    {
      type: "subheading",
      text: "Mindkettő: apostille és konzuli hitelesítés",
    },
    {
      type: "paragraph",
      text: "Egyes magyarországi eljárások mindkettőt megkövetelik. Tipikus példa a vér szerinti állampolgárság igazolásához benyújtott US születési anyakönyvi kivonat: a dokumentumhoz jellemzően előbb apostille szükséges (amelyet valódi US közokiratként tanúsít), ezt követi a konzuli áttekintés, és egyes esetekben ennek a hivatalnak egy további tanúsítványa, hogy a dokumentum megfelel az adott kérelem követelményeinek. A dokumentumot igénylő magyarországi ügyvéd vagy hatóság határozza meg, milyen hitelesítési láncot igényelnek.",
    },
    {
      type: "heading",
      text: "Mely országok fogadnak el apostille-t — és melyek igényelnek teljes legalizálást",
    },
    {
      type: "paragraph",
      text: "A Hágai Apostille Egyezménynek 2026-ban 124 tagállama van. Az ezen országokban való felhasználáshoz szükséges dokumentumok esetén az apostille felváltja a korábban szükséges hosszabb hitelesítési láncot. Magyarország tagállam. Az EU tagállamok többsége tagállam. Az új-angliai emberek által leggyakrabban dokumentumokat benyújtó országok — Magyarország, Németország, Franciaország, Olaszország, Portugália — lefedettnek számítanak.",
    },
    {
      type: "paragraph",
      text: "Nem hágai tagállamok esetén az eljárás eltérő: teljes lánc-legalizálás szükséges, amely magában foglalja az USA Külügyminiszterét, az USA Külügyminisztériumát, majd a fogadó ország USA-ban működő nagykövetségét vagy konzulátusát. Ha olyan országba nyújt be dokumentumot, amely nem szerepel a Hágai Egyezmény listáján — bizonyos közel-keleti, afrikai vagy ázsiai országok —, teljesen más eljárásra lesz szüksége. Vegye fel a kapcsolatot ezzel a hivatallal vagy a fogadó ország USA-ban működő konzulátusával a helyes eljárás megerősítéséhez.",
    },
    {
      type: "heading",
      text: "Gyakorlati példák",
    },
    {
      type: "subheading",
      text: "Magyarországi ingatlan eladása",
    },
    {
      type: "paragraph",
      text: "Ha Új-Angliából ad el magyarországi ingatlant, és a dokumentumokat alá kell írnia, jellemzően meghatalmazást kell aláírnia ennél a konzulátuson (konzuli hitelesítés). A magyarországi ügyvéd meghatározza, hogy a kísérő dokumentumokhoz szükséges-e apostille is.",
    },
    {
      type: "subheading",
      text: "EU-ban felhasználandó dokumentum",
    },
    {
      type: "paragraph",
      text: "A legtöbb EU tagállamban egy US közokirat apostille-lel a megfelelő állami titkártól általában elegendő. A konzuli hitelesítés egy additional lépés, amelyre szükség lehet, vagy nem — az adott intézménytől és országtól függően.",
    },
    {
      type: "subheading",
      text: "Nem hágai tagállamban felhasználandó dokumentum",
    },
    {
      type: "paragraph",
      text: "A Hágai Egyezményen kívüli országok esetén sem az apostille, sem az ezzel a hivatal által végzett konzuli hitelesítés nem lesz elegendő. A lánc-legalizálási eljárásnak az USA Külügyminisztériumán és a fogadó ország USA-ban működő nagykövetségén kell átmennie. Ha az ügy nem hágai tagállamot érint, vegye fel velünk a kapcsolatot, és a megfelelő irányba mutatunk.",
    },
    {
      type: "heading",
      text: "Hol szerezhető be apostille Új-Angliában",
    },
    {
      type: "list",
      items: [
        "New Hampshire: NH Állami Titkár, Apostille és Hitelesítési Osztály — Concord, NH. Az átfutási idők változnak; sürgős feldolgozás elérhető.",
        "Massachusetts: A Commonwealth Titkárságának Irodája, Apostille és Hitelesítési Szolgáltatások — Boston, MA. Online és személyes kérelmek elfogadottak.",
        "Vermont: Vermont Állami Titkár, Hitelesítési Iroda — Montpelier, VT.",
        "Rhode Island: Rhode Island Állami Titkár — Providence, RI. Postán benyújtott kérelmek.",
        "Maine: Maine Állami Titkár, Társaságok, Választások és Megbízások Osztálya — Augusta, ME.",
        "Connecticut: Connecticut Állami Titkár — Hartford, CT. Személyes és postai benyújtás elfogadott.",
      ],
    },
    {
      type: "paragraph",
      text: "Minden állam titkára csak az adott államban kiállított dokumentumokra állít ki apostille-t. Ha a dokumentumát más államban állították ki, mint ahol jelenleg él, az apostille-t a dokumentumot kiállító állam titkárától kell megszereznie — nem a jelenlegi lakóhelye szerinti állam titkárától.",
    },
    {
      type: "blockquote",
      text: "A legfontosabb szabály: apostille ott, ahol a dokumentumot kiállították, nem ott, ahol él. Egy New Hampshire-i apostille nem hitelesíthet massachusettsi születési anyakönyvi kivonatot.",
    },
    {
      type: "heading",
      text: "Nem biztos, melyik útvonal vonatkozik az Ön helyzetére?",
    },
    {
      type: "paragraph",
      text: "A helyes útvonal a dokumentumtípustól, a fogadó magyarországi intézménytől és attól függ, amit kifejezetten kértek. Ha van levelezése vagy nyomtatványa egy magyarországi hatóságtól, amely leírja, mire van szükségük, hozza el az időpontjára vagy küldje el nekünk a kapcsolatfelvételi ûrlapon — áttekintjük, és pontosan megmondjuk, milyen lépések szükségesek, milyen sorrendben, mielőtt bármit is megtesz.",
    },
  ],

  // ─── Post 12: Inheriting Property from Hungary ────────────────────────────
  "inheriting-property-from-hungary": [
    {
      type: "paragraph",
      text: "Magyarországi ingatlan öröklése amerikaiként az egyik legbonyolultabb eljárás, amellyel egy magyar-amerikai család szembesülhet. Két különálló jogrendszert érint — a magyar öröklési jogot és az US jogi követelményeket —, amelyek nem képeznek közvetlen megfelelőket egymás között. A folyamat kezelhető, de csak akkor, ha megérti, melyik ország mit intéz, és milyen sorrendben.",
    },
    {
      type: "paragraph",
      text: "Ez az útmutató ismerteti a magyarországi örökösödési eljárást, hogy milyen dokumentumokra lehet szüksége az amerikaiak örökösnek, hogy mi ebben az ügyben ez a konzulátus által nyújtható segítség, és mi az, aminek magyarországi jogi csatornákon kell mennie. Olvassa el ezt, mielőtt bármilyen hatósághoz fordul vagy bármit aláír.",
    },
    {
      type: "heading",
      text: "A magyarországi örökösödési eljárás nem azonos az amerikai hagyatéki eljárással",
    },
    {
      type: "paragraph",
      text: "Az Egyesült Államokban az ingatlan öröklése jellemzően egy állami hagyatéki bíróságon megy keresztül. Magyarországon az eljárás más: a magyarországi hagyatékokat az elhunyt vagyonának elhelyezkedése alapján kijelölt magyarországi közjegyző (közjegyző) kezeli. Nincs hagyatéki bíróság az amerikai értelemben. A magyarországi közjegyző kizárólagos joghatósággal rendelkezik a hagyatéki eljárás (hagyatéki eljárás) felett, és végül kiadja a hagyatéki átadó végzést, amely az örökösökre ruházza a tulajdonjogot.",
    },
    {
      type: "paragraph",
      text: "Ez azért fontos, mert az amerikai ügyvédek — bármilyen kiválóak az US jogban — nem tudnak kezelni egy magyarországi hagyatéki eljárást. Szüksége van egy magyarországi ügyvédre vagy a kijelölt magyarországi közjegyzőre a magyarországi oldal intézéséhez. Ennek a konzulátusnak a szerepe az, hogy segítsen Önnek felkészíteni és hitelesíteni azokat az US-oldali dokumentumokat, amelyeket a magyarországi eljárás igényel.",
    },
    {
      type: "heading",
      text: "Dokumentumok, amelyekre az örökösnek jellemzően szüksége van",
    },
    {
      type: "paragraph",
      text: "A hagyatékhoz rendelt magyarországi közjegyző pontosan meghatározza, mit igényel minden örököstől. A következő dokumentumok szinte minden esetben szükségesek az amerikai örökösök esetén:",
    },
    {
      type: "list",
      items: [
        "Az elhunyt halotti anyakönyvi kivonata — ha Magyarországon állították ki, a Magyar Polgári Anyakönyv hitelesített másolata; ha az USA-ban állították ki, az illetékes állami titkár apostille-jével ellátott eredeti",
        "Az elhunytal való kapcsolatának igazolása — saját születési anyakönyvi kivonata (apostille-lel, ha US-ban állítják ki), az elhunyt születési anyakönyvi kivonata, és a közvetlen rokonsági viszony megállapításához szükséges házassági anyakönyvi kivonatok",
        "Érvényes személyazonosítás — US útlevél vagy fényképes személyi igazolvány",
        "Magyarországi képviselőnek szóló meghatalmazás — ha nem tud személyesen megjelenni Magyarországon az eljárás összes szakaszában, meg kell hatalmaznia valakit (ügyvédet vagy megbízható magyarországi rokonát), hogy az Ön nevében eljárjon",
        "Örökösödési nyilatkozat vagy affidavit egyes esetekben — amely megerősíti a jogi örökösi státuszát a magyar jog szerint",
      ],
    },
    {
      type: "heading",
      text: "Amit ez a konzulátus tehet",
    },
    {
      type: "paragraph",
      text: "A Magyar Tiszteletbeli Konzulátus — Új-Anglia több konkrét módon is segíthet az amerikai örökösöknek:",
    },
    {
      type: "list",
      items: [
        "Az aláírás hitelesítése a magyarországi meghatalmazáson — felhatalmazva egy képviselőt, hogy az Ön nevében eljárjon az egész örökösödési eljárásban",
        "US által kiállított dokumentumok (például születési anyakönyvi kivonat vagy házassági anyakönyvi kivonat) másolatainak hitelesítése a magyarországi közjegyzőhöz való benyújtáshoz",
        "A magyarországi közjegyző által kért örökösödési nyilatkozatok és eskü alatti vallomások tanúsítása és hitelesítése",
        "Dokumentumcsomagok áttekintése a benyújtás előtt a teljességük megerősítéséhez",
        "Útmutatás az apostille-folyamathoz azon dokumentumok esetén, amelyek konzuli hitelesítés előtt apostille-t igényelnek",
      ],
    },
    {
      type: "blockquote",
      text: "Ennek a hivatalnak az örökösödési helyzetben a legértékesebb dolga az, amit tehet: egy megfelelően hitelesített meghatalmazás elkészítése — hogy a magyarországi eljárás az Ön nélkül is folytatódhasson anélkül, hogy minden egyes szakaszhoz Budapestre kellene repülnie.",
    },
    {
      type: "heading",
      text: "Mi az, ami Magyarországon kell, hogy megtörténjen",
    },
    {
      type: "paragraph",
      text: "A következő lépések csak a magyarországi jogi csatornákon keresztül végezhetők el — Új-Angliából nem kezelhetők vagy gyorsíthatók fel:",
    },
    {
      type: "list",
      items: [
        "A magyarországi közjegyző hagyatéki leltára (hagyatéki leltár)",
        "Az örökösödési tárgyalás (hagyatéki tárgyalás) — amelyen a megfelelően meghatalmazott magyarországi képviselője jelenhet meg az Ön nevében",
        "A közjegyző által kibocsátott hagyatéki átadó végzés — ez az a dokumentum, amely jogilag az örökösökre ruházza a hagyatékot",
        "Ingatlan-nyilvántartási frissítések (ingatlan-nyilvántartás) a tulajdonosváltozás tükrözésére — a hagyatéki átadó végzés kibocsátása után a magyarországi ingatlan-nyilvántartáson keresztül intézendő",
        "Minden örökléshez kapcsolódó magyarországi adóbevallás — a magyar öröklési adó szabályai érvényesek a Magyarországon elhelyezkedő vagyonra, az örökös állampolgárságától függetlenül",
      ],
    },
    {
      type: "heading",
      text: "Reális időkeret",
    },
    {
      type: "paragraph",
      text: "A magyarországi örökösödési eljárások időtartama jelentősen változik a hagyaték bonyolultságától, az örökösök számától és attól függően, hogy minden dokumentum időben megérkezik-e. Egy egyszerű eset, ahol egy örökös, egyértelmű tulajdonjog és teljes dokumentáció áll rendelkezésre, négy-nyolc hónap alatt rendezhető. A több örökössel, különböző országokban, vitatott igényekkel vagy hiányzó dokumentumokkal rendelkező esetek két évre vagy tovább is elhúzódhatnak.",
    },
    {
      type: "paragraph",
      text: "Az USA-oldali leggyakoribb késés a lassú dokumentumgyûjtési folyamat — hat hétig tartó apostille-k, majd további négy hétig tartó fordítások, és egy meghatalmazás, amely hónapokig aláíratlan marad, mert az örökös bizonytalan a teendőkkel kapcsolatban. Az USA-oldal gyors intézése az egyik kevés változó, amelyet Ön irányíthat.",
    },
    {
      type: "heading",
      text: "Költségszempont",
    },
    {
      type: "paragraph",
      text: "Több kategóriájú költséggel kell számolni. A magyarországi oldalon: magyarországi közjegyzői díjak (jogilag szabályozottak, a hagyaték értéke alapján), magyarországi ügyvédi díjak, ha magánügyvédet fogad az érdekeinek képviseletéhez (összetett hagyatékok esetén ajánlott), és magyarországi öröklési adó, ha alkalmazandó. Az USA-oldalon: apostille-díjak minden dokumentumra (jellemzően 10–30 dollár dokumentumonként, az állam függvényében), hitelesített fordítási költségek minden US dokumentumhoz, amelyet a magyarországi közjegyzőhöz nyújtanak be, és konzuli szolgáltatási díjak ennél a hivatalnál a dokumentumhitelesítések és meghatalmazás-aláírások elvégzéséért.",
    },
    {
      type: "paragraph",
      text: "Magyarországi ingatlanátruházási adók és regisztrációs díjak szintén figyelembe veendők, ha az ingatlan az Ön nevére kerül bejegyzésre. Egy magyarországi ügyvéd reális költségbecslést tud adni a hagyaték értéke és szerkezete alapján.",
    },
    {
      type: "heading",
      text: "Hol kezdje el",
    },
    {
      type: "paragraph",
      text: "Ha nemrégiben tudomást szerzett egy örökösödési helyzetről, vegye fel a kapcsolatot ezzel a hivatallal a kapcsolatfelvételi ûrlapon. Írja le a helyzetet: az elhunyt tartózkodási helye, az érintett vagyontárgyak típusa (ingatlan, bankszámla, személyes vagyon), és hogy egy magyarországi közjegyző már ki lett-e jelölve. Ha az eljárás már folyamatban van, küldje el a magyarországi közjegyzőtől kapott minden levelezést — még akkor is, ha nem tudja elolvasni. Áttekintjük, és pontosan megmondjuk, milyen US-oldali dokumentumokra van szüksége, és milyen lépéseket kell először megtennie.",
    },
  ],

  // ─── Post 13: Which US Documents Need Authentication ──────────────────────
  "us-documents-valid-in-hungary": [
    {
      type: "paragraph",
      text: "Amikor egy magyarországi intézmény, bíróság, közjegyző vagy anyakönyvi hivatal arra kéri Önt, hogy nyújtson be egy american dokumentumot, nem azt a dokumentumot kérik, ahogy az az USA-ban létezik. Azt kérik, hogy az a dokumentum olyan módon legyen hitelesítve, hogy jogilag felismerhető legyen a magyar jog alapján. Ez a gyakorlatban a dokumentumtípustól függ — és a helytelen eljárás elutasítást, újrabenyújtást és késedelmet jelent.",
    },
    {
      type: "paragraph",
      text: "Ez az útmutató ismerteti a magyarországi eljárásokban benyújtott US dokumentumok leggyakoribb kategóriáit, és mindegyiknél meghatározza: szükséges-e apostille, konzuli hitelesítés, vagy mindkettő — és milyen sorrendben.",
    },
    {
      type: "heading",
      text: "A kétlépéses szabály",
    },
    {
      type: "paragraph",
      text: "A Magyarországon felhasznált US dokumentumok általános elve: apostille először, konzuli hitelesítés másodszor (ha szükséges). Az állami titkár apostille-je tanúsítja, hogy a dokumentum valódi US közokirat, amelyet elismert hatóság állított ki. Ennek a hivatalnak konzuli hitelesítése biztosítja azt az additional magyar diplomáciai tanúsítványt, amelyet egyes eljárások megkövetelnek. Ha mindkettő szükséges, a sorrendet nem lehet megfordítani — az apostille-nek a helyén kell lennie a konzuli áttekintés előtt.",
    },
    {
      type: "heading",
      text: "Anyakönyvi iratok: születési, házassági és halotti anyakönyvi kivonatok",
    },
    {
      type: "list",
      items: [
        "US születési anyakönyvi kivonat: Apostille szükséges a születés helye szerinti állam titkárától. A magyarországi állampolgársági kérelmekhez, polgári anyakönyvi bejegyzésekhez és Magyarországon való születési anyakönyvezésekhez az apostille-lel ellátott születési anyakönyvi kivonat jellemzően az elsődleges dokumentum. Hitelesített magyar fordítás is szükséges.",
        "US házassági anyakönyvi kivonat: Apostille a házasságot bejegyző állam titkárától. Szükséges a magyarországi polgári anyakönyvi frissítésekhez, névváltoztatási eljárásokhoz, és az örökösödési vagy állampolgársági ügyekben alátámasztó dokumentumként.",
        "US halotti anyakönyvi kivonat: Apostille a haláleset bejegyzési helye szerinti állam titkárától. Szükséges, ha az USA-ban tartózkodó személy halála magyarországi jogi eljárást indít (öröklés, nyugdíjigény lezárása, polgári anyakönyvi frissítés).",
        "Minden anyakönyvi iratnál: az apostille-lel ellátott dokumentum hitelesített magyar fordítása szükséges bármely magyarországi intézményhez való benyújtás előtt.",
      ],
    },
    {
      type: "heading",
      text: "Jogi dokumentumok: végrendeletek, meghatalmazások, eskü alatti vallomások",
    },
    {
      type: "list",
      items: [
        "US végrendelet vagy testamentum: Ha egy US által kiállított végrendeletet nyújtanak be magyarországi örökösödési eljárásban, apostille és — a magyarországi közjegyző követelményeitől függően — hitelesített fordítás szükséges. Egy US végrendelet nem kormányozza automatikusan a magyarországi vagyont — a magyarországi öröklési jog vonatkozik a Magyarországon elhelyezkedő ingatlanokra. Konzultáljon magyarországi ügyvéddel.",
        "Az USA-ban aláírt meghatalmazás: Ha US közjegyző előtt írja alá (nem ennél a konzulátuson), közjegyzői apostille-lánc szükséges — a dokumentumot közjegyzileg hitelesítik, a közjegyző aláírását az állam apostille-leli. Ha ennél a konzulátuson hajtják végre, a konzuli hitelesítés felváltja az apostille-láncot a magyarországi célokra.",
        "Eskü alatti vallomások és nyilatkozatok: US közjegyző által hitelesítve, majd apostille-lel ellátva. A konkrétan egy magyarországi hatóság vagy bíróság által kért nyilatkozatok esetén az ezzel a konzulátuson (és nem US közjegyző előtt) való aláírás közvettlenebbül jogi érvénnyel bír.",
      ],
    },
    {
      type: "heading",
      text: "Iskolai oklevelek: diplomák és tantárgylisták",
    },
    {
      type: "list",
      items: [
        "Főiskolai és egyetemi diplomák: Apostille szükséges (az egyetem helye szerinti állam titkárától) a magyarországi oktatási hatóságok vagy munkáltatók általi elismeréshez. Hitelesített magyar fordítás szükséges.",
        "Hivatalos tantárgylisták: Azonos eljárás — apostille a megfelelő államtól, hitelesített fordítás. Egyes magyarországi egyetemek és akkreditációs szervezetek additional ellenőrzési lépéseket igényelhetnek; a benyújtás előtt ellenőrizze a befogadó intézménynél.",
        "Szakmai képesítések: Apostille és hitelesített fordítás. A Magyarországon szabályozott szakmák esetén a megfelelő magyarországi szakmai szervezeten keresztül további elismerési eljárások lehetnek szükségesek.",
      ],
    },
    {
      type: "heading",
      text: "Pénzügyi dokumentumok: bankszámlakivonatok és számlaigazolások",
    },
    {
      type: "list",
      items: [
        "Bankszámlakivonatok és számlalevelek: Ezek jellemzően nem közokiratok, ezért nem apostille-lázhatók ugyanúgy. Általában közjegyzileg hitelesített tanúsítvánnyal fogadják el azokat valódiként, amelyre apostille kerül. Hitelesített magyar fordítás szükséges.",
        "Pénzügyi eskü alatti vallomások (vízum- vagy tartózkodási kérelmekhez): Notarizálás US közjegyzővel, az aláírás apostille-lel ellátása, fordítás. Egyes magyarországi tartózkodással vagy befektetéssel kapcsolatos eljárásokhoz ez a hivatal közvetlenül hitelesítheti az eskü alatti vallomást.",
        "Adódokumentumok és jövedelemigazolás: Azonos eljárás, mint a pénzügyi eskü alatti vallámoknál. A magyarországi hatóságok, amelyek jogi vagy közigazgatási eljárás részeként kérik ezeket, meghatározzák a szükséges formátumot.",
      ],
    },
    {
      type: "heading",
      text: "Üzleti dokumentumok",
    },
    {
      type: "list",
      items: [
        "Vállalati határozatok és alapszabályok: Állami hatóság (állami titkár) által kiállítva, ezek általában közvetlenül apostille-lázhatók. Hitelesített fordítás szükséges.",
        "US bírósági végzések és ítéletek: Apostille az állami bíróság tanúsító hatóságától. Ahhoz, hogy egy US bírósági végzés Magyarországon hatályos legyen, külön magyarországi elismerési eljárás (a bírósági határozat elismerése) szükséges — ez egy jogi eljárás, amely különbözik a dokumentumhitelesítéstől.",
        "Az USA-ban megkötött szerződések: Nem közokiratok, így nem apostille-lázhatók közvetlenül. Közjegyzileg hitelesítsék az aláírásokat, az aláírásokra apostille kerüljön, fordítás szükséges. Egyes magyarországi szerződéses helyzetekben az egész dokumentumot közjegyzileg kell hitelesíteni, nem csupán az aláírásokat.",
      ],
    },
    {
      type: "blockquote",
      text: "A leghasznosabb dolog, amit bármely dokumentum összegyûjtése előtt megtehet: küldje el ennek a hivatalnak a magyarországi hatóság levelét vagy kérelmét. Meghatározzák, pontosan mire van szükségük. Mi feltérképezzük a helyes hitelesítési eljárást — apostille, konzuli, vagy mindkettő — mielőtt feleslegesen utazna az állami titkárhoz.",
    },
    {
      type: "heading",
      text: "A helyes lépések sorrendje",
    },
    {
      type: "paragraph",
      text: "Ha mind az apostille, mind a konzuli hitelesítés szükséges, a sorrend mindig: (1) szerezze be az eredeti dokumentumot a kiállító US hatóságtól, (2) szerezze be az apostille-t a kiállítás helye szerinti állam titkárától, (3) szerezze be a hitelesített magyar fordítást, (4) hozza el az apostille-lel ellátott eredetit és a fordítást erre a konzulátusra a konzuli hitelesítés elvégzéséhez. A rossz sorrendben elvégzett lépések az elejéről való újrakezdést igényelnek.",
    },
    {
      type: "heading",
      text: "Ha nem biztos, mire van szükség",
    },
    {
      type: "paragraph",
      text: "Ha egy magyarországi hatóság dokumentumkérelmet küldött Önnek, és nem biztos, mely hitelesítési lépések vonatkoznak rá, használja az ezen az oldalon lévő kapcsolatfelvételi ûrlapot. Ossza meg a kapott kérelmet — beleértve a magyarországi intézmény nevét és a benyújtás célját. Megerősítjük a helyes utat, mielőtt bármilyen lépést tenne.",
    },
  ],
};
