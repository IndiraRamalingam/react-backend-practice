//console.log("Hello World");

//Simple web server

const express=require('express');
const app= express();
const cors=require('cors');

//middleware
app.use(cors());
app.use(express.json());

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
app.get('/',(request,response)=>{
    response.send("<h1>Hello world</h1>");
});

//set the endpoints to get all the notes --> Read

app.get('/api/notes',(request,response)=>{
    response.json(notes);
;})

//create a new resource based on the request data --> Create
app.post('/api/notes',(request,response)=>{
   notes=notes.concat(request.body);
    // console.log(request.body);
    response.status(201).json({message:'Successfully'});
});

//fetches a single resource based on id --> Read with params
app.get('/api/notes/:id',(request,response) =>{
    const id=request.params.id;
    const note=notes.find(note=>note.id ==id);
    if(note){
        response.status(200).json(note);
    }else{
        //response.status(404).end('id does not exists)');
        response.status(404).json({message:'id does not exists'});
    }
});

//deletes a single  --> Delete 
app.delete('/api/notes/:id',(request,response) =>{
    //get the id
    const id=request.params.id;
    const note=notes.find(note => note.id ==id);
     notes=notes.filter(note=>note.id !=id);
    if(note){
        response.status(204).json(note);
    }else{
        response.status(404).json({message:'id does not exists'});
    }
});

//replaces the entire note object identified by id --> Update whole content

app.put('/api/notes/:id',(request,response)=>{
    //const id=Number(request.params.id);
    const id=request.params.id;
    const noteToReplace=request.body;
    const note=notes.find(note => note.id ==id);
    notes = notes.map(note => note.id==id ? noteToReplace :note);
    
    if(note){
        response.status(200).json({message :'note replaced'});
    }else{
        response.status(404).json({message:'id does not exists'});
    }
})

//replace the part of the object --> Updated with patch

app.patch('/api/notes/:id',(request,response)=>{
    //const id=Number(request.params.id);
    const id=request.params.id;
    const noteToReplace=request.body;

    const note=notes.find(note => note.id ==id);
    notes = notes.map(note => note.id==id ? {...note,...noteToReplace} :note);
 
    if(note){
        response.status(200).json({message :'note patched'});
    }else{
        response.status(404).json({message:'id does not exists'});
    }
})


const PORT =3001;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});

