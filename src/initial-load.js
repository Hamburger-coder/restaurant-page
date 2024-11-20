let container = document.getElementById("content")


export function loadPage() {
    let innerContent = `        <h1>Sabor del Sol</h1>
        <img class="pizza-img" src="https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de comida" height="500">
        <p>Sabor del Sol is open from 11 AM to 10 PM, Monday through Saturday</p>
        <p>Check out Sabor del Sol for some awesome Mexican flavors! Every dish is all about sunshine, tradition, and great food.</p>
        `
    container.innerHTML = innerContent; 
}