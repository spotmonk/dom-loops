const instructors = [
  {
    firstName: 'Luke',
    lastName: 'Lancaster'
  },
  {
    firstName: 'Michael ',
    lastName: 'Clark'
  },
  {
    firstName: 'Matt',
    lastName: 'Gill'
  }
]

const fullNames = (arr) =>{
  let domString = ``;
  for (let i=0; i < arr.length; i++){
    domString += `<h2>${arr[i].firstName} ${arr[i].lastName}</h2>`
  }
  console.log(domString)
  names = document.createElement("div")
  names.innerHTML = domString
  document.body.appendChild(names)
}

fullNames(instructors)
