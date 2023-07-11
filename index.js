//console.log("Hello World");

//Simple web server

const express=require('express');
const app= express();

let notes=[
    {
        id:1,
        content:"Content1",
        important:true
    },
    {
        id:2,
        content:"Content2",
        important:true
    },
    {
        id:3,
        content:"Content3",
        important:true
    }
];

//set the endpoints (set the / routes)
// app.get('/',(request,response)=>{
//     response.send("<h1>Hello world</h1>");
// });

//set the endpoints to get all the notes

app.get('/api/notes',(request,response)=>{
    response.json(notes);
;})

const PORT =3001;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});

