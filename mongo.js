const mongoose = require('mongoose');
//console.log(process.argv);

//const url=``;

mongoose.connect(url)
    .then(() => {
        console.log("connected to MongoDB")
    })
    .catch((err) => {
        console.error(err);
    });

//save a note in the db
//define a schema

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
});

//create a model
const Note = mongoose.model('Note', noteSchema,'Notes');

// //actual data to store in the database
// const note= new Note({
//     content:'mongodb2',
//     important:true,
// });
// 
// //save a note in the db
// note.save()
//     .then((result) =>{
//         console.log("note saved");
//         mongoose.connection.close();
//     });

// //For multiple data
// let notes=[
//     {
//         content:'data1',
//         important:true,
//     },
//     {
//         content:'data2',
//         important:true,
//     }
// ];
// 
// notes.forEach((note) =>{
//     let noteModel=new Note(note);
// 
//     noteModel.save()
//     .then((result) =>{
//         console.log("note saved");
//         mongoose.connection.close();
//     });
// 
// 
// })

Note.find({}, {})
    .then(notes =>{
        console.log(notes);
        mongoose.connection.close();
    });
