const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target //Gives us what we had submitted
  const name = f.personName.value
  document.querySelector('h1').textContent = name //Changes the h1

  const colorName = f.colorName.value
  console.log('colorName')
}

personForm.addEventListener('submit', handleSubmit)
