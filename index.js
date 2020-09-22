(() => {
    function onBlur() {
        dropDown.style.opacity = 0;   
    }
    function onClick() {
        new Promise((resolve, reject) => {
            input.value = this.innerHTML;
            resolve();
        }).then(() => {
            dropDown.style.display = "none";   
        });
        // Alternative way to handle this event
        // input.value = this.innerHTML;
        // document.body.removeChild(dropDown);
    }
    function onInput(e) {
        dropDown.style.opacity = 1;
        if (!this.value) {
            dropDown.style.display = "none";
            return;
        } else {
            dropDown.style.display = "block";
        }
        dropDown.innerHTML = "";
        const filterCar = cars.forEach(car => {
            if (car.toLowerCase().search(this.value.toLowerCase()) != -1) {
                const list = document.createElement("li");
                list.innerHTML = car;
                list.addEventListener('click', onClick);
                dropDown.appendChild(list);    
            }
        });   
    }
    const cars = [
        "Aston Martin", "BMW", "Mercedes Benz", "Toyota", "Honda",
        "Nissan", "Maserati", "Porsche", "Isuzu", "Ford", "Susuki", 
        "Ferrari", "Lamboghini", "Hyundai"
    ];
    const dropDown = document.querySelector("div.drop-down ul");
    const input = document.querySelector("input");
    function App() {
        input.onfocus = onInput;
        input.oninput = onInput;
        input.onblur = onBlur;
        dropDown.style.display = "none";
    }
    App();
})();