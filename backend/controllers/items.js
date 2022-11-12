const journalEntry = require('../models/Item')

module.exports = {
    getItems: async (req,res)=>{
        try{
            const journalEntries = await journalEntry.find()
            const itemsLeft = await journalEntry.countDocuments({completed: false})
            res.send([...journalEntries])
        }catch(err){
            console.log(err)
        }
    },
    getItemsTest: async (req, res) => {
        try{
        const journalItems = await journalEntry.find();
        const itemsLeft = await journalEntry.countDocuments({completed:false}) 
        res.render('todos.ejs', {todos: journalItems, left: itemsLeft})
        }
        catch (e){
            console.log(e)
        }
    },
    createItem: async (req, res)=>{
        try{
            console.log(req.body)
            await journalEntry.create({ 
                text: req.body.text, 
                completed: req.body.reminder
            })
            console.log('Entry has been added!')
            //res.send()
            res.redirect('/journal')
        }catch(err){
            console.log(err)
        }
    },
    toggleComplete: async (req, res)=>{
        try{
            console.log(req.body)
            await journalEntry.findOneAndUpdate({_id:req.body.entryID},{
                completed: req.body.completed
            })
            console.log(`Marked goal completed to: ${req.body.completed}`)
            res.json(`Marked goal completed to: ${req.body.completed}`)
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        console.log(req.body.entryID)
        try{
            await journalEntry.findOneAndDelete({_id:req.body.entryID})
            console.log(`Deleted entry ${req.body.entryID}`)
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    