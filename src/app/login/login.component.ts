import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  error: string;
  msg: boolean;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.error = '';
    this.msg = false;
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        localStorage.setItem('token', response.success);
        this.router.navigate(['/alumnos']);
      })
      .catch(err => {
        this.msg = true;
        this.error = err.error.error;
        // this.router.navigate(['/login']);
      });
  }
}
