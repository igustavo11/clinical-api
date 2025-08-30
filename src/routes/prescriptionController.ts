import express from "express";
import prescriptionService from "../services/prescriptionService";

let router = express.Router();

router.get('/prescriptions', async (req, res) => {
    try{
        const prescriptions = await prescriptionService.getAllPrescriptions();
        res.status(200).json(prescriptions);
    }catch(error){
        console.error('Error retrieving prescriptions:', error);
        res.status(500).json({message: 'Error retrieving prescriptions', error});
    }
});

router.get('/prescriptions/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const prescription = await prescriptionService.getPrescription(id);
        if(prescription){
            res.status(200).json(prescription);
        }else{
            res.status(404).json({message: 'Prescription not found'});
        }
    }catch(error){
        console.error(`Error retrieving prescription with ID ${id}:`, error);
        res.status(500).json({message: 'Error retrieving prescription', error});
    }
});

router.post('/prescriptions', async (req, res) => {
    const newPrescription = req.body;
    try{
        const savedPrescription = await prescriptionService.savePrescription(newPrescription);
        res.status(201).json(savedPrescription);
    }catch(error){
        console.error('Error saving prescription:', error);
        res.status(500).json({message: 'Error saving prescription', error});
    }
});

router.put('/prescriptions/:id', async (req, res) => {
    const id = req.params.id;
    const updatedPrescription = req.body;
    try{
        const prescription = await prescriptionService.updatePrescription(id, updatedPrescription);
        if(prescription){
            res.status(200).json(prescription);
        }else{
            res.status(404).json({message: 'Prescription not found'});
        }
    }catch(error){
        console.error(`Error updating prescription with ID ${id}:`, error);
        res.status(500).json({message: 'Error updating prescription', error});
    }
});

router.delete('/prescriptions/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const prescription = await prescriptionService.deletePrescription(id);
        if(prescription){
            res.status(200).json({message: 'Prescription deleted successfully'});
        }else{
            res.status(404).json({message: 'Prescription not found'});
        }
    }catch(error){
        console.error(`Error deleting prescription with ID ${id}:`, error);
        res.status(500).json({message: 'Error deleting prescription', error});
    }
});

export default router;