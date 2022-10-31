// SNACKS - PLAIN JS

// 1. Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const animalsList = [
    {
        nome: "Elefante",
        famiglia: "Elefantidi",
        classe: "Mammiferi",
    },
    {
        nome: "Zebra",
        famiglia: "Zebridi",
        classe: "Zebroschi"
    },
    {
        nome: "Scimmia",
        famiglia: "Primati",
        classe: "Mammiferi"
    }
]

const mammalsList = animalsList.filter((item) => item.classe === "Mammiferi");
console.log(mammalsList);


