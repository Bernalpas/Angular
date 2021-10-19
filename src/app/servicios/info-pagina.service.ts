import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  public equipo: any[] = [];

  constructor(private http: HttpClient) { 
    console.log('Servicio de info-pagina listo');

    this.cargarInfo();
    this.cargarEquipo();

    //Leer el archivo JSon, para ello importo en el app module el httpClientModule
    //No la ejecuta hasta que vea un suscribe
    /*    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      console.log(resp);

      //como ya es un objeto de Javascript, puedo acceder a sus propiedades
      console.log(resp.email);
      console.log(resp.nombre);

      //Luego de las pruebas, utilizo la variable resp para guardar la informacion
      this.cargada = true;
      this.info = resp;
      console.log(resp); */
      
    }

     //creamos los servicios para conectarnos a la base de datos.
  //aquí traemos todo el código del http
  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      console.log(resp);

      //como ya es un objeto de Javascript, puedo acceder a sus propiedades
      console.log(resp.email);
      console.log(resp.nombre);

      //Luego de las pruebas, utilizo la variable resp para guardar la informacion
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }

  private cargarEquipo(){

    this.http.get('https://angular-9c566-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      
      this.equipo = resp;
      console.log(resp);
  });
}

}
