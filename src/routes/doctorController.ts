import  express  from "express";
import bcrypt from "bcrypt";
import doctorService from "../services/doctorService";

let router = express.Router();

router.get('/doctors', async (req, res) => {
    try{
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    }catch(error){
        console.error('Error retrieving doctors:', error);
        res.status(500).json({message: 'Error retrieving doctors', error});
    }
}
);
router.get('/doctors/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const doctor = await doctorService.getDoctor(id);
        if(doctor){
            res.status(200).json(doctor);
        }else{
            res.status(404).json({message: 'Doctor not found'});
        }
    }catch(error){
        console.error(`Error retrieving doctor with ID ${id}:`, error);
        res.status(500).json({message: 'Error retrieving doctor', error});
    }
}
);
router.post('/doctors', async (req, res) => {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const newDoctor = req.body;
    try{
        const savedDoctor = await doctorService.saveDoctor(newDoctor);
        res.status(201).json(savedDoctor);
    }catch(error){
        console.error('Error saving doctor:', error);
        res.status(500).json({message: 'Error saving doctor', error});
    }
}
);
router.put('/doctors/:id', async (req, res) => {
    const id = req.params.id;
    const updatedDoctor = req.body;
    try{
        const doctor = await doctorService.updateDoctor(id, updatedDoctor);
        if(doctor){
            res.status(200).json(doctor);
        }else{
            res.status(404).json({message: 'Doctor not found'});
        }
    }catch(error){
        console.error(`Error updating doctor with ID ${id}:`, error);  
        res.status(500).json({message: 'Error updating doctor', error});
    }
}
);
router.delete('/doctors/:id', async (req, res) => {
    const id = req.params.id;
    try{    
        const doctor = await doctorService.deleteDoctor(id);
        if(doctor){
            res.status(200).json({message: 'Doctor deleted successfully'});
        }else{
            res.status(404).json({message: 'Doctor not found'});
        }
    }catch(error){
        console.error(`Error deleting doctor with ID ${id}:`, error);
        res.status(500).json({message: 'Error deleting doctor', error});
    }
}
);

export default router;