/*const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target //Gives us what we had submitted
  const name = f.personName.value
  //document.querySelector('h1').textContent = name //Changes the h1

  const colorName = f.colorName.value
  document.querySelector('h1').textContent = "Hi " + name + "!" + " Your favorite color is " + colorName + "."
  document.querySelector('p.empty-paragraph').textContent = "The color of this sentence is now " + colorName + ". Now click your mouse over this sentence and the color will change again."
  document.querySelector('p.empty-paragraph').style.color = colorName
}


function changeColor() {
    document.querySelector('p.empty-paragraph').style.color = "purple"
}

function changeFont() {
  document.querySelector('p.empty-paragraph').style.fontSize = "x-large"
}

  personForm.addEventListener('submit', handleSubmit)
  personForm.addEventListener('click', changeColor)
  personForm.addEventListener('click', changeFont) */


//FOR DAY 2
  const personForm = document.querySelector('#personForm')

  function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'

    return colorDiv   //This replaces the longer version below
    // return `
    //   <div style="background-color: ${color}; width: 100px; height: 50px;"></div>
    //   `
  }

  function renderListItem(fieldName, value) {
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    return li
  }

  function renderList(personData) {
    const list = document.createElement('ul')
    Object.keys(personData).map(function(fieldName) {
        const li = renderListItem(fieldName, personData[fieldName])
        list.appendChild(li)
    })    //Returns all values from the object person as an array which could be looped over. Map does a thing to each thing in the array and returns the thing you did.
    return list
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value
    // const colorDiv = `
    //   <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
    //   `
    const person = {
      name: f.personName.value,
      favoriteColor: renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    } //This is an object literal. We put a comma in the last attribute so that if we add another attribute later, we won't forget the comma. Easier to read in git diff as well.

    details.appendChild(renderList(person))

    // const details = document.querySelector('#details')
    // details.innerHTML = `<em>${name}</em>`  //The back ticks make templates. Dollar sign curly brace means you want to put an expression in it. Makes it easier because no need for concatenation.

    //Create a DOM node
    // const em = document.createElement('em')
    // em.textContent = name
    // details.appendChild(em) // Append to the parent which is 'details'

    // details.innerHTML = `
    // <ul>
    //   <li>Name: ${name}</li>
    //   <li>Favorite Color: ${renderColor(favoriteColor).outerHTML}</li>
    //   <li>Age: ${age}</li>
    // </ul> `

    // LAB DAY 2
    // const li = document.createElement('li')
    // const liName = document.createElement('li')
    // const liAge = document.createElement('li')
    // const liColor = document.createElement('li')
    // //li.textContent = name
    // liName.textContent = name
    // liAge.textContent = age
    // liColor.textContent = colorDiv
    // details.appendChild(liName)
    // details.appendChild(liAge)
    // details.appendChild(liColor)


  }


  personForm.addEventListener('submit', handleSubmit)
