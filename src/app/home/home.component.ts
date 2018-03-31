import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	numero = 6;
	mostrar = true;
	arreglo = [1,2,3,4];
    arreglo2 =["ana","jose","nicolas","chelo"];
    familia=["carl", "estefa", "delf"];

  constructor() { }

  mostrare(){ 
  	this.mostrar = !this.mostrar;
  }

  ngOnInit() {
  }

incrementar(){ //incrementar es una funcion, y siempre se colocan con this.
	this.numero= this.numero +6;

}
decrementar(){
	this.numero= this.numero -3;
}
mostrarNombres(){
	this.mostrar= !this.mostrar;
}
mostrarFam(){
	this.mostrar= !this.mostrar;
}

}


