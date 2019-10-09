

const ingredientList = document.querySelector(".ingredientList");


const addIngredient = document.querySelector(".addIngredient");

const removeIngredient = document.querySelector(".removeIngredient")


removeIngredient.addEventListener('click', (event)=> {
    event.preventDefault();
    ingredientList.removeChild(ingredientList.children[ingredientList.children.length-1])
})




addIngredient.addEventListener('click', (event) => {
    event.preventDefault()

const ingredientLi = document.createElement('li');
const ingredientLabel = document.createElement('label');
ingredientLabel.setAttribute('for', "");

const ingredientInput = document.createElement('input');
ingredientInput.setAttribute('type', 'text');
ingredientInput.setAttribute('name', "ingredients")

ingredientLi.appendChild(ingredientLabel);
ingredientLi.appendChild(ingredientInput);
ingredientList.appendChild(ingredientLi)


})

const addStep = document.querySelector(".addStep")
const removeStep = document.querySelector(".removeStep")
const stepList = document.querySelector(".stepList")

removeStep.addEventListener('click', (event) => {
    event.preventDefault()
    stepList.removeChild(stepList.children[stepList.children.length-1])
})

addStep.addEventListener('click', (event) => {
    event.preventDefault();

const stepLi = document.createElement('li');
stepLi.setAttribute('class', 'stepList')
const stepLabel = document.createElement('label');
stepLabel.setAttribute('for', "");
const stepInput = document.createElement('input');
stepInput.setAttribute('type', 'text');
stepInput.setAttribute('name', "steps")

stepLi.appendChild(stepLabel);
stepLi.appendChild(stepInput);
stepList.appendChild(stepLi)

})







