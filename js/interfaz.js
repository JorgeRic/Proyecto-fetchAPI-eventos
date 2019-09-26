'use strict'
class Interfaz{
  constructor(){
    this.init();
    this.resultadoEventos = document.querySelector('#resultado-eventos')
  }

  init(){
    this.imprimirCategorias()
  }
  imprimirCategorias(){
  const listaCategorias = eventBrite.obtenerCategorias()
    .then(categorias => {
      const categ = categorias.categorias.categories;
      const listadoCategorias = document.querySelector('#listado-categorias');
      categ.forEach(cat => {
        const options = document.createElement('option');
        options.value = cat.id;
        options.appendChild(document.createTextNode(cat.name))
        options.classList = 'options'
        listadoCategorias.appendChild(options)
      })
    })
  }

  mostrarEventos(eventos){
      const listaEventos = eventos.events;
      console.log(listaEventos)
      listaEventos.forEach(lista =>{
        this.resultadoEventos.innerHTML += 
        `
        <div class="col-md-4 mb-4">
        <div class="card">
        <div class="card-body">
        <img class="img-fluid mb-2" src="${lista.logo.url}></img>"
        </div>
        <div class="card-body">
        <div class="card-rext">
        <h2 class="text-center color-red">${lista.name.text}</h2>
        <p clss="lead text-info"><h4 class="text-center">Información del evento: </4>${lista.description.text.substring(0,250)}...</p>
        <p>Fecha y hora: ${lista.start.local}</p>
        <a href="${lista.url}" target="_blanck" class="btn btn-primary btn-block mt-4">Comprar tickets</a>
        </div>
        </div>
        </div>
        </div>
        `
      })
    }

  mostrarOcultarSpinner(vista){
    const spinner = document.querySelector('.contenido-spinner');
    spinner.style.display = vista;
   }


   limpiarResultados(){
     this.resultadoEventos.innerHTML = '';
    }
    
    mostrarMensaje(mensaje, tipo){
      const div = document.createElement('div');
      div.className = tipo;
      div.appendChild(document.createTextNode(mensaje));
      const buscador = document.querySelector('#buscador');
      buscador.appendChild(div);
      setTimeout(()=>{
        document.querySelector('.alert').remove();
      }, 2000)
    }
    
  }
