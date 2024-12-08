import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'Interiorismo',
      urlImagen: 'img/interior1.jpeg',
      descripcion: 'Creamos espacios únicos que reflejan tu estilo, combinando funcionalidad y estética para mejorar tu bienestar.',
      volteada: false // Estado de la tarjeta
    },
    {
      titulo: 'Remodelacion',
      urlImagen: 'img/remodelacion2.jpeg',
      descripcion: 'Transformamos tu espacio con soluciones innovadoras, mejorando su funcionalidad y estilo para adaptarlo a tus necesidades y gustos.',
      volteada: false
    },
    {
      titulo: 'Construcción',
      urlImagen: 'img/construccion.jpeg',
      descripcion: 'Llevamos a cabo proyectos de construcción desde la base, garantizando calidad, durabilidad y diseño a medida para cada necesidad.',
      volteada: false,
    },
    {
      titulo: 'Decoracion',
      urlImagen: 'img/decoracion.jpeg',
      descripcion: 'Creamos espacios únicos y acogedores que reflejan tu estilo personal.',
      volteada: false
    }, 
    {
      titulo: 'Asesoría en Diseño de Espacios',
      urlImagen: 'img/asesoria.jpeg',
      descripcion: 'Te ayudamos a crear ambientes funcionales y estéticamente agradables, combinando estilo, confort y eficiencia.',
      volteada: false
    }
  ];
  
   // Método que alterna la propiedad 'volteada' de un servicio
   alternarVolteo(servicio: any): void {
    servicio.volteada = !servicio.volteada; // Cambia el estado de la tarjeta (volteada o no)
  }
  
}


