const CLickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

CLickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
});

function addToCarritoItem(e){

    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;

    const newItem = {

        title: itemTitle,
        precio: itemPrice,
        cantidad: 1
    }
    
    addItemCarrito(newItem)

}

function addItemCarrito(newItem){

    const InputElemento = tbody.getElementsByClassName('input_elemento')
    for(let i=0; i<carrito.length ; i++)
    {
        if(carrito[i].title.trim()=== newItem.title.trim()){

            carrito[i].cantidad++;
            const inputValue = InputElemento[i]
            inputValue.value ++;
            CarritoTotal()
            return null;

        }
    }

    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(newItem){

    tbody.innerHTML=''
    carrito.map(item => {

        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content =`
        
        <th scope="row">1</th>

        <td class="table_comidas">

            <p class="title">${item.title}</p>

        </td>

        <td class="table_precio"><p>${item.precio}</p></td>
        <td class="table_cantidad">

            <input type="number" min="1" value=${item.cantidad} class="input_elemento">
            <button class="delete btn btn-danger">X</button> 

        </td>
        `
        
        tr.innerHTML = Content;
        tbody.append(tr);
        
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito) 
        tr.querySelector(".input_elemento").addEventListener('change',sumaCantidad)

    })
    CarritoTotal()
}

function CarritoTotal(){

    let total=0;
    const itemCartTotal = document.querySelector('.itemCartTotal')

    carrito.forEach((item) => {

        const precio = Number(item.precio.replace("$",''))
        total= total + precio*item.cantidad

    })

    itemCartTotal.innerHTML = `Total $${total}`
}

function removeItemCarrito (e){

    const buttonDelete = e.target
    const tr= buttonDelete.closest(".ItemCarrito")
    const title= tr.querySelector('.title').textContent;
    
    for(let i=0; i<carrito.length ; i++){

        if(carrito[i].title.trim() == title.trim()){

            carrito.splice(i,1)
        }

    }
    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e){

    const sumaInput = e.target
    const tr= sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {

        if(item.title.trim() === title){

            sumaInput.value<1? (sumaInput.value=1): sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}

$(function() { 
    $("#mybutton").click(function (event) {
        $.post("/postmethod", {

            javascript_data: JSON.stringify(newPedido = {
        
                nombre: document.getElementById('nombre').value,
                direccion: document.getElementById('direccion').value,
                carrito: carrito
                
            }) 
        });
    }); 
});