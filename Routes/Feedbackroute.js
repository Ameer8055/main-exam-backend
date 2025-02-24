const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const feedbackModel = require('../Model/FeedbackModel')

//Get one by id
router.get('item/:id', async (req, res) => {
    const id = req.params.id;
    const feedback = await feedbackModel.findById(id);
    if (!feedback) {
        return res.status(404).json({ message: "Feedback not found" });
        }
        res.json(feedback);
        
})

//All items
router.get('/items', async(req,res)=>{
    try{
        const feedback = await feedbackModel.find()
        res.send(feedback)
        }catch(err){
            res.status(500).json({message:err.message})
            }

})

//Add item
router.post("/add", async (req,res)=>{
    const formdata = req.body
    try {
        const result = await feedbackModel.create(formdata)
        res.status(201).json(result)
        } catch (error) {
            
            res.status(500).json({ message: "Error in creating feedback" })

    }
})

//EDIT item
router.put('/update/:id', async(req,res)=>{
    const formdata = req.body
    const id = req.params.id
    try {
        const result = await feedbackModel.findByIdAndUpdate(id,formdata)
        res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ message: "Error in updating feedback" })
            }

})

//Delete item
router.delete('/delete/:id', async(req,res)=>{
    try {
        const feedback = await feedbackModel.findByIdAndDelete(req.params.id);
        if (feedback) {
          res.status(200).json({ message: 'Feedback deleted successfully' });
        } else {
          res.status(404).json({ message: 'Feedback not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting Feedback' });
      }
    
})










module.exports = router ;