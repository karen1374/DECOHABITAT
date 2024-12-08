import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  categorias = [
    {
      nombre: 'Salas',
      imagen: 'img/sal1.jpeg',//esta es la imagen o portada de la categoria
      imagenes: ['img/sala2.jpeg','img/sal1.jpeg','img/sala3.jpeg', 'img/sala4.jpeg', 'img/sala5.jpeg', 'img/sala6.jpeg','img/sala7.jpeg',
        'img/sala9.jpeg', 'img/sala9.jpeg', 'img/sala10.jpeg', 'img/sala11.jpeg', 'img/sala12.jpeg', 'img/sala13.jpeg', 'img/sala14.jpeg', 'img/sala15.jpeg', 'img/sala16.jpeg',
        'img/sala17.jpeg', 'img/sala18.jpeg', 'img/sala19.jpeg', 'img/sala20.jpeg', 'img/sala21.jpeg', 'img/sala22.jpeg', 'img/sala23.jpeg','img/sala24.jpeg', 'img/sala25.jpeg',
        'img/sala26.jpeg', 'img/sala27.jpeg', 'img/sala28.jpeg', 'img/sal29.jpeg', 'img/sala30.jpeg'
      ], // Rutas de imágenes que se mostrara al hacer clik en la categoria
    },
    {
      nombre: 'Habitaciones',
      imagen: 'img/h30.jpeg',
      imagenes: ['img/h1.jpeg', 'img/h2.jpeg', 'img/h3.jpeg', 'img/h4.jpeg', 'img/h5.jpeg', 'img/h6.jpeg', 'img/h7.jpeg', 'img/h8.jpeg', 'img/h9.jpeg','img/h10.jpeg', 'img/h11.jpeg', 'img/h12.jpeg','img/h13.jpeg',
        'img/h14.jpeg', 'img/h15.jpeg', 'img/h16.jpeg', 'img/h17.jpeg', 'img/h18.jpeg','img/h19.jpeg','img/h20.jpeg','img/h21.jpeg','img/h22.jpeg','img/h23.jpeg','img/h24.jpeg','img/h25.jpeg','img/h26.jpeg',
        'img/h27.jpeg', 'img/h28.jpeg', 'img/h29.jpeg', 'img/h30.jpeg',
      ],
    },
    {
      nombre: 'Comedores',
      imagen: 'img/c3.jpeg',
      imagenes: ['img/c1.jpeg', 'img/c2.jpeg', 'img/c3.jpeg', 'img/c4.jpeg', 'img/c5.jpeg', 'img/c6.jpeg','img/c7.jpeg','img/c8.jpeg','img/c9.jpeg','img/c10.jpeg','img/c11.jpeg','img/c12.jpeg','img/c13.jpeg',
        'img/c14.jpeg', 'img/c15.jpeg', 'img/c16.jpeg', 'img/c17.jpeg', 'img/c18.jpeg', 'img/c19.jpeg', 'img/c20.jpeg', 'img/c21.jpeg', 'img/c22.jpeg', 'img/c23.jpeg', 'img/c24.jpeg','img/c25.jpeg',
        'img/c26.jpeg', 'img/c27.jpeg', 'img/c28.jpeg', 'img/c29.jpeg', 'img/c30.jpeg',
      ],
    },
    {
      nombre: 'Cocinas',
      imagen: 'img/co7.jpeg',
      imagenes: ['img/co1.jpeg', 'img/co2.jpeg', 'img/co3.jpeg', 'img/co4.jpeg', 'img/co5.jpeg', 'img/co6.jpeg','img/co7.jpeg','img/co8.jpeg','img/co9.jpeg','img/co10.jpeg','img/co11.jpeg','img/co12.jpeg','img/co13.jpeg',
        'img/co14.jpeg', 'img/co15.jpeg', 'img/co16.jpeg', 'img/co17.jpeg', 'img/co18.jpeg', 'img/co19.jpeg', 'img/co20.jpeg', 'img/co21.jpeg', 'img/co22.jpeg', 'img/co23.jpeg', 'img/co24.jpeg','img/co25.jpeg',
        'img/co26.jpeg', 'img/co27.jpeg', 'img/co28.jpeg', 'img/co29.jpeg', 'img/co30.jpeg',
      ],
    },
    {
      nombre: 'Baños',
      imagen: 'img/b1.jpeg',
      imagenes: ['img/b1.jpeg', 'img/b2.jpeg', 'img/b3.jpeg', 'img/b4.jpeg', 'img/b5.jpeg', 'img/b6.jpeg','img/b7.jpeg','img/b8.jpeg','img/b9.jpeg','img/b10.jpeg','img/b11.jpeg','img/b12.jpeg','img/b13.jpeg',
        'img/b14.jpeg', 'img/b15.jpeg', 'img/b16.jpeg', 'img/b17.jpeg', 'img/b18.jpeg', 'img/b19.jpeg', 'img/b20.jpeg', 'img/b21.jpeg', 'img/b22.jpeg', 'img/b23.jpeg', 'img/b24.jpeg','img/b25.jpeg',
        'img/b26.jpeg', 'img/b27.jpeg', 'img/b28.jpeg', 'img/b29.jpeg', 'img/b30.jpeg',
      ],
    },
    {
      nombre: 'Infantiles',
      imagen: 'img/i1.jpeg',
      imagenes: ['img/i1.jpeg', 'img/i2.jpeg', 'img/i3.jpeg', 'img/i4.jpeg', 'img/i5.jpeg', 'img/i6.jpeg','img/i7.jpeg','img/i8.jpeg','img/i9.jpeg','img/i10.jpeg','img/i11.jpeg','img/i12.jpeg','img/i13.jpeg',
        'img/i14.jpeg', 'img/i15.jpeg', 'img/i16.jpeg', 'img/i17.jpeg', 'img/i18.jpeg', 'img/in19.jpeg', 'img/i20.jpeg', 'img/i21.jpeg', 'img/i22.jpeg', 'img/i23.jpeg', 'img/i24.jpeg','img/i25.jpeg',
        'img/i26.jpeg', 'img/i27.jpeg', 'img/i28.jpeg', 'img/i29.jpeg', 'img/i30.jpeg',
      ],
    },
    {
      nombre: 'Casas',
      imagen: 'img/ca1.jpeg',
      imagenes: ['img/ca1.jpeg', 'img/ca2.jpeg', 'img/ca3.jpeg', 'img/ca4.jpeg', 'img/ca5.jpeg', 'img/ca6.jpeg','img/ca7.jpeg','img/ca8.jpeg','img/ca9.jpeg','img/ca10.jpeg','img/ca11.jpeg','img/ca12.jpeg','img/ca13.jpeg',
        'img/ca14.jpeg', 'img/ca15.jpeg', 'img/ca16.jpeg', 'img/ca17.jpeg', 'img/ca18.jpeg', 'img/ca19.jpeg', 'img/ca20.jpeg', 'img/ca21.jpeg', 'img/ca22.jpeg', 'img/ca23.jpeg', 'img/ca24.jpeg','img/ca25.jpeg',
        'img/ca26.jpeg', 'img/ca27.jpeg', 'img/ca28.jpeg', 'img/ca29.jpeg', 'img/ca30.jpeg',
      ],
    },
    {
      nombre: 'Oficinas',
      imagen: 'img/o2.jpeg',
      imagenes: ['img/o1.jpeg', 'img/o2.jpeg', 'img/o3.jpeg', 'img/o4.jpeg', 'img/o5.jpeg', 'img/o6.jpeg','img/o7.jpeg','img/o8.jpeg','img/o9.jpeg','img/o10.jpeg','img/o11.jpeg','img/o12.jpeg','img/o13.jpeg',
        'img/o14.jpeg', 'img/o15.jpeg', 'img/o16.jpeg', 'img/o17.jpeg', 'img/o18.jpeg', 'img/o19.jpeg', 'img/o20.jpeg', 'img/o21.jpeg', 'img/o22.jpeg', 'img/o23.jpeg', 'img/o24.jpeg','img/o25.jpeg',
        'img/o26.jpeg', 'img/o27.jpeg', 'img/o28.jpeg', 'img/o29.jpeg', 'img/o30.jpeg',
      ],
    },
    {
      nombre: 'Accesorios',
      imagen: 'img/a29.jpeg',
      imagenes: ['img/a1.jpeg', 'img/a2.jpeg', 'img/a3.jpeg', 'img/a4.jpeg', 'img/a5.jpeg', 'img/a6.jpeg','img/a7.jpeg','img/a8.jpeg','img/a9.jpeg','img/a10.jpeg','img/a11.jpeg','img/a12.jpeg','img/a13.jpeg',
        'img/a14.jpeg', 'img/a15.jpeg', 'img/a16.jpeg', 'img/a17.jpeg', 'img/a18.jpeg', 'img/a19.jpeg', 'img/a20.jpeg', 'img/a21.jpeg', 'img/a22.jpeg', 'img/a23.jpeg', 'img/a24.jpeg','img/a25.jpeg',
        'img/a26.jpeg', 'img/a27.jpeg', 'img/a28.jpeg', 'img/a29.jpeg', 'img/a30.jpeg',
      ],
    },
    
  ];
  categoriaSeleccionada: any = null;

  seleccionarCategoria(categoria: any): void {// Es una variable que almacena la categoria por el usuario
    //Inicialmente es null, lo que significa que ninguna categoría está seleccionada y se muestran todas.
    this.categoriaSeleccionada = categoria;
  }

  mostrarCategorias(): void {
    //Método para regresar a la vista inicial con todas las categorías.
    //Esto hace que en el HTMl muestre nuevamnte la lista de todas las categoria 
    this.categoriaSeleccionada = null;
  }

}
