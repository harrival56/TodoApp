const form = document.querySelector('form');
const input = document.querySelector('input[type="text"')
const ol = document.querySelector('ol')
const remove = document.querySelector('#removeList')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = "Completed"
    li.innerText = input.value
    ol.appendChild(li)
    li.appendChild(button)
    input.value = ''
})

ol.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.classList.toggle('completed')
    }
})

remove.addEventListener('click', function(e){
    ol.remove()
    window.location.reload()
    
})