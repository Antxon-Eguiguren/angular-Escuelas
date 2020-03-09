import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  errors: any[];

  constructor(private usuariosService: UsuariosService) {
    this.errors = [];
    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        this.errors = err.error;
      });
  }

}
