import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  personal = [
    {
      nombre: 'Juan Pérez',
      imagen: '/img/JUAN.jpeg',
      puesto: 'Gerente General',
    },
    {
      nombre: 'Ana López',
      imagen: '/img/ANA.jpeg',
      puesto: 'Diseñadora de Interiores',
    },
    {
      nombre: 'Carlos Martínez',
      imagen: 'img/CARLOS.jpeg',
      puesto: 'Asesor de Ventas',
    },
    {
      nombre: 'María Fernández',
      imagen: 'img/MARIA.jpeg',
      puesto: 'Coordinadora de Proyectos',
    },
    {
      nombre: 'Luis Gómez',
      imagen: 'img/LUIS.jpeg',
      puesto: 'Técnico Especializado',
    },
    {
      nombre: 'Laura Sánchez',
      imagen: 'img/LAURA.jpeg',
      puesto: 'Jefa de Logística',
    },
    {
      nombre: 'Pedro Castillo',
      imagen: 'img/PEDRO.jpeg',
      puesto: 'Administrador de Recursos',
    },
    {
      nombre: 'Gabriela Torres',
      imagen: 'img/GABRIELA.jpeg',
      puesto: 'Especialista en Marketing',
    },
  ];

}
