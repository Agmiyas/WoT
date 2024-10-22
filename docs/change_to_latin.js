const node_for_click = document.getElementById("for_click")

function changeToLatin() {
    const lastName = document.getElementsByTagName('b')[3];
    const firstName = document.getElementsByTagName('b')[4];
    const surname = document.getElementsByTagName('b')[5];

    console.log(lastName.innerText);
    console.log(firstName.innerText);
    console.log(surname.innerText);
    lastName.innerHTML = "<b>Bashmakov</b>";
    firstName.innerHTML = "<b>Amir</b>";
    surname.innerHTML = "<b>Saidovich</b>";
}

node_for_click.addEventListener("click",changeToLatin)