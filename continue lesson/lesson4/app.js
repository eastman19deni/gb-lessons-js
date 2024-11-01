const dropdownItem = document.querySelectorAll('.dropdown-item')

dropdownItem.forEach(item => {
    item.classList.add('super-dropdown')
})

const btnElement = document.querySelector('.btn')
if(btnElement.classList.constains('btn-secondary')){
    btnElement.classList.remove('btn-secondary')
}else{
    btnElement.classList.add('btn-secondary')
}

const menuElement = document.querySelector('.menu')
if(menuElement){
    menuElement.classList.remove('dropdown-menu')
}

const dropDownDiv = document.querySelector('.dropdown')
dropDownDiv.insertAdjacentHTML('afterend', '<a href="#"></a>')

const dropdownButton = document.getElementById('dropdownMenuButton')
if(dropdownButton){
    dropdownButton.id = 'superDropdown'
}

const ariaElement = document.querySelector('[aria-labelledby="dropdownButton"]')
if(ariaElement){
    ariaElement.dataset.dd = '3'
}

const dropdownToggle = document.querySelector('.dropdown-toggle')
if(dropdownToggle){
    dropdownToggle.removeAttribute('type')
}