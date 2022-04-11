let seleccion = prompt('Seleccione un articulo para comprar \n \n - Hamburguesa \n - Milanesa \n - Papas fritas \n')

switch (seleccion.toLowerCase()) {
    case 'hamburguesa': {
        class Producto {
            constructor(articulo, precio) {

                this.articulo = articulo;
                this.precio = precio;

            }

            total() {
                document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
            }
        }

        const articulo = new Producto('Hamburguesa', 500)

        articulo.total();

        console.log(articulo);
    }

    break;

case 'milanesa':

{

    class Producto {
        constructor(articulo, precio) {

            this.articulo = articulo;
            this.precio = precio;

        }

        total() {
            document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
        }
    }

    const articulo = new Producto('Milanesa', 250)

    articulo.total();

    console.log(articulo);
}
break;

case 'papas fritas':

{
    class Producto {
        constructor(articulo, precio) {

            this.articulo = articulo;
            this.precio = precio;

        }

        total() {
            document.write('El Valor total del ' + this.articulo + ' es de ' + (this.precio * 1.19));
        }
    }

    const articulo = new Producto('Papas fritas', 150)

    articulo.total();

    console.log(articulo);
}
break;

default:

    break;
}