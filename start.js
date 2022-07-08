const buttonOne = document.getElementById('btn')

const changeClass = () => {
    document.body.classList.toggle('green')
}

buttonOne.addEventListener('click', changeClass)