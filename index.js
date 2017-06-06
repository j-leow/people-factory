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

  function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value
    // const details = document.querySelector('#details')

    // details.innerHTML = `<em>${name}</em>`  //The back ticks make templates. Dollar sign curly brace means you want to put an expression in it. Makes it easier because no need for concatenation.

    //Create a DOM node
    // const em = document.createElement('em')
    // em.textContent = name
    // details.appendChild(em) // Append to the parent which is 'details'

    details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${favoriteColor}</li>
      <li>Age: ${age}</li>
    </ul>
    `
  }


  personForm.addEventListener('submit', handleSubmit)
