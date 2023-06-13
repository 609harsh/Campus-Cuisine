export default {
    name:'featured',
    title:'Featured Menu Category',
    type:"document",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Category name",
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'short_description',
            type:'string',
            title:'Short Description',
            validation: (Rule)=>Rule.max(200),
        },
        {
            name:"restaurants",
            type:"array",
            title:"Restaturants",
            of:[{
                type:"reference", to:[{ type:"restaurant"}]
            }]
        },
    ]
}