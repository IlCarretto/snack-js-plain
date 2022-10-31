// 2. Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const peopleList = [
    {
        nome: "Pippo",
        cognome: "Pipperoni",
        age: "16"
    },
    {
        nome: "Claudio",
        cognome: "Moneta",
        age: "41"
    },
    {
        nome: "Trundle",
        cognome: "King",
        age: "99"
    }
]

peopleList.forEach(person => console.log(`Il sig. ${person.nome} ${person.cognome} ${person.age > 18 ? 'può guidare' : 'non può guidare'}`));