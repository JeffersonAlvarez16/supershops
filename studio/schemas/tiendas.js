export default {
    name: "tiendas",
    title: "Tiendas",
    type: "document",
    fields: [{
            name: "nombre",
            type: "string",
            title: "Nombre",
        },
        {
            name: "descripcion",
            type: "string",
            title: "Descripcion",
        },
        {
            title: 'Colores',
            name: 'colores',
            type: 'array',
            of: [{
              
                type: 'string',
               
            }]
        },
        {
            name: "logo",
            type: "image",
            title: "logo",
        },
        {
            title: 'Categoria',
            name: 'categoria',
            type: 'reference',
            to: [{ type: 'categorias' }]
        },
        {
            title: 'Palabras clave',
            name: 'palabra_clave',
            type: 'array',
            of: [{

                name: "palabra_clave",
                type: "string",
                title: "Palabra Clave",

            }]
        },
    ],

}