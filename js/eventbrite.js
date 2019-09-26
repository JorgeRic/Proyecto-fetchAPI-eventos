'use strict'
class EventBrite{
  constructor(){
    this.token_auth = '5FUQ2HMQN7I7SIMFZLLO';
    this.ordenar = 'date';
  }

   async obtenerCategorias(){
    const respuestaCategoria = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
    const categorias = await respuestaCategoria.json();
    return {categorias}
   }

   async obtenerEventos(evento, categoria){
     const respuestaEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
     const eventos = await respuestaEventos.json();
     return {eventos}
   }
   
}
//https://www.eventbriteapi.com/v3/users/me?token=5FUQ2HMQN7I7SIMFZLLO