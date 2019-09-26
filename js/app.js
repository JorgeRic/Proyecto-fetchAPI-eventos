'use strict'
const eventBrite = new EventBrite();
const ui = new Interfaz();

const buscarBtn = document.querySelector('#buscarBtn');
buscarBtn.addEventListener('click', buscarInformacion)


  function buscarInformacion(event){
    event.preventDefault();
    const evento = document.querySelector('#evento').value;
    const listadoCategorias = document.querySelector('#listado-categorias');
    const listadoCategoriasSelect = listadoCategorias.options[listadoCategorias.selectedIndex].value;
    if(evento === ''){
      ui.mostrarMensaje('Rellene los campos', 'alert alert-danger mt-4')

    }else{
      eventBrite.obtenerEventos(evento, listadoCategoriasSelect)
        .then(eventos => {
          if(eventos.eventos.events.length > 0){

            ui.limpiarResultados();
            ui.mostrarOcultarSpinner('block')
            setTimeout(()=>{
            ui.mostrarEventos(eventos.eventos)
            ui.mostrarOcultarSpinner('none');
          },2000)
          }else{
            ui.mostrarMensaje('No hay resultados','alert alert-danger mt-4');
          }
        })
      
    }
  }

