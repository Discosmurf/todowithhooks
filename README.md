# Oh No! Another Todo App! (ONATA)

https://todowithhooks.mariolovesyoshi.now.sh

## Om denne appen

Denne appen er utviklet ved hjelp av rammeverket [NEXT.js](https://nextjs.org).
NEXT.js er en fork av React som øker jevnt i popularitet på grunn av mange gode innebygde features som
* Støtte for serverside rendring (SSR)
* Ut-av-boksen routing
* Gode og gjennomtenkte byggeverktøy som gjør deployment utrolig enkelt

Appen host'es serverless på skytjenesten [ZEIT](https://zeit.co) - utviklerne av NEXT-rammeverket.
Hvis man tar utgangspunkt i kildekoden, vil entrypunktet for appen være ```/pages/_app.js```
Denne wrapper alle filene i page-katalogen (foruten _document.js) som automatisk blir omgjort til egne ruter (index.js er ```/``` som default).

Filen ```/pages/_document.js``` sørger for at alle style sheets blir klargjort i de tilfellene siden rendres på serveren. Ellers vil man risikere at siden kommer til syne i browseren uten stiling i et lite øyeblikk før den hydreres med CSS.

Alle sidene wrappes av ```ContextProvider``` - komponenten hvor de to kontekstene for applikasjonen, TodoContext og ModalContext, tilordnes med sine verdier.

I tillegg wrappes alle sidene i applikasjonen av en Page-komponent som sørger for enhetlig og gjennomgående stiling og at eksempelvis Headeren rendres i toppen av alle sidene.
Appen benytter seg av en rekke eksempler på bruk av React Hooks, som beskrevet i de resterende slide'ene.
Det statiske innholdet, det vil se det du leser akkurat nå, leveres via det norske headless CMS'et [Sanity](https://sanity.io). 

## useState

* Enkel hook for å opprette og tilordne state
* Bør holdes så grunn som mulig
* Kan betraktes som et getter/setter-par
* Mulig å opprette så mange man vil
* Ved større kompleksitet bør useReducer benyttes

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

### Eksempler fra kildekoden

* [Opprettelse og fjerning av scroll event-listener](/components/Header.js)
* [Henting av data async](/components/SlideShow.js)

## useReducer

* Kan sammenliknes med hvordan action creators og reducere i Redux fungerer
* Tilordnes med en reducer, en initial state og man benytter en dispatch-funksjon for å manipulere med actions
* Bør benyttes sammen med Immer.js for immutability
* Velegnet til å holde kontroll på tilstandsflyt i UI og til å organisere og gjenbruke forretningslogikk på tvers av komponenter.

### Bruk

```const [state, dispatch] = useReducer(reducer, initialState);```

Merk: Handlerne er ikke nødt til å hete state og dispatch. De kan navngis helt fritt.

### Eksempler fra kildekode

* [Opprettelse av state og dispatch, forvaltet av Immer.js(Linje 9-10)](/store/ContextProvider.js)
* [Reducer med Immer.js-draft.](/store/Reducers.js)
* [Dispatch for å endre status på en Todo](/components/Todo.js)

## useContext

* Benytter React sitt Context API
* useContext kan benyttes i stedet for Consumer-HOC
* Velegnet til deling av state mellom komponenter uten direkte kobling
* Lite "boilerplate" i forhold til andre tilnærmingsmetoder for forvalting av state i React
* Stort sett alt mulig kan tilordnes en context provider
  * Reducere, useState handles, memoiserte verdier (vha useMemo)
* Går veldig godt i lag med useReducer og Immer.js

### Bruk

En context opprettes enkelt og greit, gjerne eksportert fra en egen fil:

```export const MyContext = React.createContext();```

Det er også mulig å tilordne en startverdi som parameter, men det er mer praktisk å gjøre dette i forbindelse med wrappingen 
av den delen av komponenttreet man vil at konteksten skal gjelde for. 

Den delen av komponent-treet som konteksten skal gjelde for wrappes således av et Provider-element som eksponeres gjennom konteksten.

### Eksempler i kildekoden

* [Opprettelse av kontekst](/store/Context.js)
* [Wrapping og tilordning av kontekst (linje 43-55)](/store/ContextProvider.js)
* Uthenting av handles fra kontekst i autonome komponenter
  * [Modal](/components/Modal.js)
  * [Board](/components/Board.js)
  * De fleste komponentene i applikasjonen henter ut fra kontekst på en eller annen måte.

## useMemo

* Invokes på bakgrunn av endring i tilordnede avhengigheter
* Kan benyttes for å opprette memoiserte selektorer som likner de som tilbys gjennom reselect.
* Kan benyttes til ressurskrevende operasjoner.

### Bruk

```const selectLatestValue = useMemo(() => return someExpensiveOperation(value);), [value]);```

Eksempelvis er det å anbefale å memoisere alle verdier som tilordnes kontekst-providers for å unngå at disse opprettes på nytt og trigger en re-rendring av det omsluttede komponent-treet hvis de ovenforliggende komponentene re-rendres.

[(bedre forklart her under punktet "Performance Concerns")](https://hswolff.com/blog/how-to-usecontext-with-usereducer/)

### Eksempler fra kildekoden
* [Opprettelse av selektor (linje 28-40)](/store/ContextProvider.js)
* [Uthenting av memoisert selektor i komponent (linje 7)](/components/TaskCounter.js)

