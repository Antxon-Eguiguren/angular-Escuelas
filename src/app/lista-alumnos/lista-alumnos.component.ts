import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: [];

  constructor(private alumnosService: AlumnosService) {
  }

  ngOnInit() {
    this.alumnosService.getAll()
      .then(response => {
        this.alumnos = response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  manejarClickBorrar(pAlumnoId) {
    this.alumnosService.delete(pAlumnoId)
      .then(async response => {
        console.log(response);
        this.alumnos = await this.alumnosService.getAll();
      })
      .catch(err => {
        console.log(err);
      });
  }

}
