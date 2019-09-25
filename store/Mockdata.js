const dataFromServer = {
    tasks: [
        {
            heading: 'Ferdigstille app!',
            todos: [
              {
                text: 'Koding',
                done: true,
              },
              {
                text: 'Styling',
                done: true,
              },
              {
                text: 'Break it..',
                done: true, 
              }
            ]
        },
        {
            heading: 'Vinne i Lotto',
            todos: [
              {
                text: 'Kjøpe kupong',
                done: true,
              },
              {
                text: 'Fylle ut kupong',
                done: true,
              },
              {
                text: 'Sende inn kupong',
                done: true,
              },
              {
                text: 'Vinne',
                done: false,
              }
            ]
        },
        {
            heading: 'Hooks',
            todos: [
                {
                    text: 'Motivasjon',
                    done: false,
                },
                {
                    text: 'Bruksområder',
                    done: false,
                },
                {
                    text: 'Custom hooks',
                    done: false,
                }
            ]
        },
        {
            heading: 'Gå gjennom hooks i praksis',
            todos: [
              {
                text: 'useState',
                done: false,
              },
              {
                text: 'useEffect',
                done: false,
              },
              {
                text: 'useContext',
                done: false,
              },
              {
                text: 'useMemo',
                done: false,
              },
              {
                text: 'useReducer',
                done: false,
              },
            ]
        }
    ],
}

export const slideContent = [
    {
        heading: 'Motivasjon',
        bullets: [
            'Entydig tilnærming til komponentutvikling',
            'Fra klasse til funksjons-paradigme',
            'Fra stateless til stateful funksjonskomponenter',
            'Følge utviklingen mot AOT-kompilering',
        ]
    },
    {
        heading: 'Bruksområder',
        bullets: [
            'Gjenbruk av stateful logikk',
            'Kontroll på side effects',
            'Deling og manipulasjon av state uten prop drilling',
            'Nyttige "Plug and Play" tredjeparts hooks',
            'Egenutviklede gjenbrukbare custom hooks (demo)',
        ]
    },
    {
        heading: 'Custom hooks',
        bullets: [
            'Hooks er funksjoner som alle kan utvikle',
            'Kan løse både generelle og spesielle oppgaver',
            'Øker i omfang og bruksområder',
            'Redux har kommet med egne custom hooks',
        ]
    },
    {
        heading: 'useState',
        bullets: [
            'Enkel hook for å opprette og tilordne state',
            'Bør holdes så grunn som mulig',
            'Kan betraktes som et getter/setter-par',
            'Mulig opprette så mange man vil',
            'Ved større kompleksitet bør useReducer benyttes',
        ]
    },
    {
        heading: 'useEffect',
        bullets: [
            'Hook for å holde kontroll på sideeffekter',
            'Erstatter i stor grad life cycle functions',
        ]
    },
    {
        heading: 'useReducer',
        bullets: [
            'Kan sammenliknes med hvordan Redux fungerer',
            'Tilordnes med en initial state og man benytter en dispatch-funksjon for å manipulere',
            'Bør benyttes sammen med Immer.js for immutability',
            'Velegnet til å holde kontroll på tilstandsflyt i UI og til å organisere forretningslogikk',
        ]
    },
    {
        heading: 'useContext',
        bullets: [
            'Benyttes React sitt Context API',
            'Velegnet til deling av state mellom komponenter',
            'Går veldig godt i lag med useReducer',
        ]
    },
    {
        heading: 'useMemo',
        bullets: [
            'Har mye til felles med useEffect',
            'Invokes på bakgrunn av endring i tilordnede avhengigheter',
            'Kan benyttes til ressurskrevende operasjoner',
        ]
    }
]

export const fetchDataFromServer = () => {
    return dataFromServer;
}

