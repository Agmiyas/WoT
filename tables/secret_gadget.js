function timeTravelMachine() {
    const item = document.getElementById('time_machine');
    const img = document.getElementById('gadget_8_img');
    item.innerHTML = '<a href="../contents/time_leap_machine.html">Машина для прыжков во времени</a>';
    img.innerHTML = '<img src="../images/time_leap_machine.png" title="Машина для прыжков во времени" width="200">';
}

const change_gadget = document.getElementById("time_machine");
change_gadget.addEventListener("click", timeTravelMachine)