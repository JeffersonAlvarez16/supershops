export default {
    name: "categorias",
    title: "Categorias",
    type: "document",
    fields: [{
            name: "titulo",
            type: "string",
            title: "Titulo",
        },
        {
            name: "descripcion",
            type: "string",
            title: "Descripcion",
        },
        {
            name: "icono",
            type: "image",
            title: "Icono",
        },
        {
            title: 'relacion',
            name: 'categorias',
            type: 'array',
            of: [{
                title: 'relacion',
                name: 'relacion',
                type: 'reference',
                to: [{ type: 'categorias' }]
            }]
        },
    ],

}