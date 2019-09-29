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

export const fetchDataFromServer = () => {
    return dataFromServer;
}

