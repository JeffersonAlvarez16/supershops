export default {
    name: "patrocinios",
    title: "Patrocinios",
    type: "document",
    fields: [{
            title: 'Categoria',
            name: 'categoria',
            type: 'reference',
            to: [{ type: 'categorias' }]
        },
        {
            title: 'Tienda',
            name: 'tienda',
            type: 'reference',
            to: [{ type: 'tiendas' }]
        },

    ],

}