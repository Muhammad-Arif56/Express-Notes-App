const noteModel = require('../models/noteModel')


//Create Different APIs ===> (Crud method)
//Create notes
const CreateNotes= async(req,res)=>{
    const {title, description}= req.body
    try {
        const newNotes= await noteModel.create(
            {
                title:title,
                description:description
            })
            return res.status(201).json(newNotes)
    } catch (error) {
        return res.status(404).send("Something went wrong" +error)
    }
}



//get all notes
const getAllNotes= async(req,res)=>{
    try {
    const allNotes= await noteModel.find({user: req.userid})
    return res.status(200).json(allNotes)
} catch (error) {
        return res.status(404).send("Something went wrong"+error)
}
}





//Edit/update notes by id
const updateNotes= async(req, res)=>{
    const id= req.params.id
    const{title, description}= req.body
    try {
        const existingNote= await noteModel.findById({id:id})
        if(!existingNote){
            return res.status(400).send("note does not exist by given id")
        }
        const updatedNotes= await noteModel.findByIdAndUpdate(id,{title:title, description:description})
        return res.status(200).json(updatedNotes)
    } catch (error) {
        return res.status(404).send("Something went wrong")
    }
}



//delete notes by user id
const deleteNote= async(req, res)=>{
    const id= req.params.id
    try {
        const deletedNote= await noteModel.findByIdAndDelete(id)
        return res.status(200).json(deletedNote)
    } catch (error) {
        return res.status(404).send("Something went wrong "+ error)
    }
}

module.exports= {CreateNotes, getAllNotes, updateNotes, deleteNote}