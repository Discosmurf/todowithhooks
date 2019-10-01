# Oh No! Another Todo App! (ONATA)

## Om denne appen

Denne appen er utviklet ved hjelp av rammeverket NEXT.js.
NEXT.js er en fork av React som øker jevnt i popularitet på grunn av mange gode innebygde features som
* Støtte for serverside rendring (SSR)
* Ut-av-boksen routing
* Gode og gjennomtenkte byggeverktøy som gjør deployment utrolig enkelt

Appen host'es serverless på skytjenesten ZEIT - utviklerne av NEXT-rammeverket.
Hvis man tar utgangspunkt i kildekoden, vil entrypunktet for appen være ```/pages/_app.js```
Denne wrapper alle filene i page-katalogen (foruten _document.js) som automatisk blir omgjort til egne ruter (index.js er ```/``` som default).

Filen ```/pages/_document.js``` sørger for at alle style sheets blir klargjort i de tilfellene siden rendres på serveren. Ellers vil man risikere at siden kommer til syne i browseren uten stiling i et lite øyeblikk før den hydreres med CSS.

Alle siden wrappes av ```ContextProvider``` - komponenten hvor de to kontekstene for applikasjonen, TodoContext og ModalContext, tilordnes med sine verdier.

I tillegg wrappes alle sidene i applikasjonen av en Page-komponent som sørger for enhetlig og gjennomgående stiling og at eksempelvis Headeren rendres i toppen av alle sidene.
Appen benytter seg av en rekke eksempler på bruk av React Hooks, som beskrevet i de resterende slide'ene.
Det statiske innholdet, det vil se det du leser akkurat nå, leveres via det norske headless CMS'et Sanity. 

## useState

Enkel hook for å opprette og tilordne state
Bør holdes så grunn som mulig
Kan betraktes som et getter/setter-par
Mulig å opprette så mange man vil
Ved større kompleksitet bør useReducer benyttes

### Bruk
useState eksponerer to handlere - en "getter" og en "setter" for verdien man ønsker å tilføre lokal state.

```const [value, setValue] = useState(0);```

For å endre verdien til 'value', benyttes 'setValue' med den nye verdien som parameter.

```
setValue(3);
setValue(value + 1);
setValue(prevState => prevState + 1);
```

### Eksempler fra kildekode

* [Tilstand for Header - Gjennomsiktig/Ikke gjennomsiktig](/components/Header.js)
* [Verdi for inputfelt](/components/Modal.js)

## useEffect

* Hook for å holde kontroll på sideeffekter
* Legge til/fjerne listeners
* Lytter til forandringer internt eller i "omverdenen" som skal trigge en forandring i komponenten
* Erstatter i stor grad life cycle functions

### Bruk

useEffect kan benyttes på tre hovedmetoder:

1) Denne effekten kjører en gang og kan sammenliknes med life cycle funksjonen componentDidMount. Ønsket oppførsel oppnås ved å la klammeparantesen i andre argument stå tom.

```useEffect(() => initStuff()), []);```

2) Denne utføres når en eller flere avhengigheter i klammeparantesen i andre argument endrer seg.

```useEffect(() => triggerSomething()), [whenI, orI, orWeChange]);```

3) Denne varianten utføres hver gang komponenten rendrer ettersom funksjonen ```iLikeToRunOnEveryRender()``` er eneste argument.

```useEffect(() => iLikeToRunOnEveryRender())```

## Eksempler fra kildekoden

Opprettelse og fjerning av scroll event-listener
Henting av data async
