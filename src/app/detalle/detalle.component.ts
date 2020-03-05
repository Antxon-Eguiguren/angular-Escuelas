import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  alumno: {};

  constructor(private activatedRoute: ActivatedRoute, private alumnosService: AlumnosService) {
    this.alumno = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.alumno = await this.alumnosService.getById(params.alumnoId);
    });
  }

}
