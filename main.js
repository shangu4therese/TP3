function addLi(){
    const loickSelect = document.getElementById('loickSelect');
    const newLiValue = prompt("Ajoutez une tache");

    if(newLiValue!== null && newLiValue.trim()!=""){
        const newLiElement = document.createElement("li");
        newLiElement.value = newLiValue;
        newLiElement.textContent = newLiValue;

        loickSelect.appendChild(newLiElement);
        }
}