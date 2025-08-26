import  express  from "express";
import pacientService from "../services/pacientService.ts";

let router = express.Router();

router.get('/pacients', async (req, res) => {
    try{
        const pacients = await pacientService.getAllPacients();
        res.status(200).json(pacients);
    }catch(error){
        console.error('Error retrieving pacients:', error);
        res.status(500).json({message: 'Error retrieving pacients', error});
    }
}
);
router.get('/pacients/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const pacient = await pacientService.getPacient(id);
        if(pacient){
            res.status(200).json(pacient);
        }else{
            res.status(404).json({message: 'Pacient not found'});
        }
    }catch(error){
        console.error(`Error retrieving pacient with ID ${id}:`, error);
        res.status(500).json({message: 'Error retrieving pacient', error});
    }
}
);
router.post('/pacients', async (req, res) => {
    const newPacient = req.body;
    try{
        const savedPacient = await pacientService.savePacient(newPacient);
        res.status(201).json(savedPacient);
    }catch(error){
        console.error('Error saving pacient:', error);
        res.status(500).json({message: 'Error saving pacient', error});
    }
}
);
router.put('/pacients/:id', async (req, res) => {
    const id = req.params.id;
    const updatedPacient = req.body;
    try{
        const pacient = await pacientService.updatePacient(id, updatedPacient);
        if(pacient){
            res.status(200).json(pacient);
        }else{
            res.status(404).json({message: 'Pacient not found'});
        }
    }catch(error){
        console.error(`Error updating pacient with ID ${id}:`, error);  
        res.status(500).json({message: 'Error updating pacient', error});
    }
}
);
router.delete('/pacients/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const pacient = await pacientService.deletePacient(id);
        if(pacient){
            res.status(200).json({message: 'Pacient deleted successfully'});
        }else{
            res.status(404).json({message: 'Pacient not found'});
        }
    }catch(error){    
        console.error(`Error deleting pacient with ID ${id}:`, error);
        res.status(500).json({message: 'Error deleting pacient', error});
    }
}
);


export default router;