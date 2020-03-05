import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from '../alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private alumnosService: AlumnosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      edad: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
      ]),
      notamedia: new FormControl('', [
        Validators.required,
      ]),
      fecha_matricula: new FormControl('', [
        Validators.required,
      ]),
      matricula: new FormControl('', [
        Validators.required,
      ]),
      discapacidad: new FormControl('', [
        Validators.required,
      ]),
      sexo: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit() {
    this.alumnosService.add(this.formulario.value)
      .then(response => {
        this.formulario.reset();
        this.router.navigate(['/alumnos']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
