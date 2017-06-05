const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target //Gives us what we had submitted
  const name = f.personName.value
  document.querySelector('h1').textContent = name
}

personForm.addEventListener('submit', handleSubmit)
