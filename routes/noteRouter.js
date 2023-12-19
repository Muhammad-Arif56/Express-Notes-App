const express= require('express')
const auth= require('../middleware/auth')
const { CreateNotes, getAllNotes, updateNotes, deleteNote } = require('../controllers/noteController')
const noteRouter= express.Router()


//Notes APIs
noteRouter.post('/', auth, CreateNotes)
noteRouter.get('/', auth, getAllNotes)
noteRouter.put('/:id', auth, updateNotes)
noteRouter.delete('/:id', auth, deleteNote)


module.exports= noteRouter