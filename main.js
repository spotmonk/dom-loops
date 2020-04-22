const assignmentCollection = [
  {
    title: 'Javascript',
    dueDate: '4-20-2020',
    topic: 'javascript',
    notes: 'do your assignment in javascript'
  },
  {
    title: 'CSS',
    dueDate: '4-21-2020',
    topic: 'Cascading Style Sheets',
    notes: 'Make things pretty with CSS'
  },
  {
    title: 'HTML',
    dueDate: '4-22-2020',
    topic: 'Hypertext Markup Language',
    notes: 'Remember to close your tags'
  },
]
const dinoCollection = [
  {
    dinoType: 'T-Rex',
    name: 'Tommy',
    age: 100
  },
  {
    dinoType: 'Stegosaurus',
    name: 'Steve',
    age: 10
  },
  {
    dinoType: 'Velocirapotor',
    name: 'Ian',
    age: 23
  },
  {
    dinoType: 'Pterodyactl',
    name: 'Paul',
    age: 2300
  }
]

const buildAssignmentCards = (assignments) => {
  //todo: build dino cards
  let domString = '';
  for (let i = 0; i < assignments.length; i++) {
    domString += `<div class="assignment">`
    domString += `<h3>${assignments[i].title}</h3>` 
    domString += `<p>This assignment is due ${assignments[i].dueDate} and is about  ${assignments[i].topic}<br>notes: ${assignments[i].notes}</p>`
    domString += `</div>`
  }
  printToDom("#assignments",domString);
}
const buildDinoCards = (dinos) => {
  //todo: build dino cards
  let domString = '';
  for (let i = 0; i < dinos.length; i++) {
    domString += `<div class="dino">`
    domString += `<h3>${dinos[i].name}</h3>` 
    domString += `<p>This dino is a ${dinos[i].dinoType} and is ${dinos[i].age} years old</p>`
    domString += `</div>`
  }
  printToDom("#dino-pen",domString);
}

const printToDom = (selector,textToPrint) =>{
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const init = () =>{
  buildDinoCards(dinoCollection);
  buildAssignmentCards(assignmentCollection);
}

init();
