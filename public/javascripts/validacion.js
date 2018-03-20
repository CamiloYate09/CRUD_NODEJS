$(function(){
  $('.form-nuevoproducto form').form({
      nombre : {
          identifier : 'nombre',
          rules : [
              {
                type : 'empty',
                prompt : 'Por favor ingrese un nombre'

              }

          ]

      },

      precio : {

        identifier : 'precio',
        rules : [
            {
              type : 'empty',
              prompt : 'Por favor ingrese un precio'

            },
            {
              type : 'number',
              prompt : 'El precio debe ser numerico'

            }

        ]


      },
      stock : {

        identifier : 'stock',
        rules : [
            {
              type : 'empty',
              prompt : 'Por favor ingrese el stock'

            },
            {
              type : 'integer',
              prompt : 'El stock debe ser un numero entero'

            }

        ]


      }

  });
});
