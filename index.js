const personForm = document.querySelector('#personForm')

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

//Change color of the empty paragraph when the mouse is clicked over the empty paragraph.
  document.querySelector('.empty-paragraph').onclick = changeColor;

  function changeColor() {
      document.querySelector('p.empty-paragraph').style.color = "purple";
      return false;
  }

  personForm.addEventListener('submit', handleSubmit)
