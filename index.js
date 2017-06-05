const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target //Gives us what we had submitted
  const name = f.personName.value
  //document.querySelector('h1').textContent = name //Changes the h1

  const colorName = f.colorName.value
  document.querySelector('h1').textContent = "Hi " + name + "!" + " Your favorite color is " + colorName + "."
  document.querySelector('p.empty-paragraph').textContent = "Now click your mouse!"
}

personForm.addEventListener('submit', handleSubmit)

const colorChange = document.querySelector('.empty-paragraph')

function changeColor(){
  document.body.style.backgroundColor = '#FFC926'
}

colorChange.addEventListener('click', changeColor, false)
