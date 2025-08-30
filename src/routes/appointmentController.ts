import  express  from "express";
import appointmentsService from "../services/appointmentService";

let router = express.Router();

router.get('/appointments', async (req, res) => {
    try{
        const appointments = await appointmentsService.getAllAppointments();
        res.status(200).json(appointments);
    }catch(error){
        console.error('Error retrieving appointments:', error);
        res.status(500).json({message: 'Error retrieving appointments', error});
    }
}
);

router.get('/appointments/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const appointment = await appointmentsService.getAppointment(id);
        if(appointment){
            res.status(200).json(appointment);
        }else{
            res.status(404).json({message: 'Appointment not found'});
        }
    }catch(error){
        console.error(`Error retrieving appointment with ID ${id}:`, error);
        res.status(500).json({message: 'Error retrieving appointment', error});
    }
}
);

router.post('/appointments', async (req, res) => {
    const newAppointment = req.body;
    try{
        const savedAppointment = await appointmentsService.saveAppointment(newAppointment);
        res.status(201).json(savedAppointment);
    }catch(error){
        console.error('Error saving appointment:', error);
        res.status(500).json({message: 'Error saving appointment', error});
    }
}
);

router.put('/appointments/:id', async (req, res) => {
    const id = req.params.id;
    const updatedAppointment = req.body;
    try{
        const appointment = await appointmentsService.updateAppointment(id, updatedAppointment);
        if(appointment){
            res.status(200).json(appointment);
        }else{
            res.status(404).json({message: 'Appointment not found'});
        }
    }catch(error){
        console.error(`Error updating appointment with ID ${id}:`, error);
        res.status(500).json({message: 'Error updating appointment', error});
    }
}
);

router.delete('/appointments/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const appointment = await appointmentsService.deleteAppointment(id);
        if(appointment){
            res.status(200).json({message: 'Appointment deleted successfully'});
        }else{
            res.status(404).json({message: 'Appointment not found'});
        }
    }catch(error){
        console.error(`Error deleting appointment with ID ${id}:`, error);
        res.status(500).json({message: 'Error deleting appointment', error});
    }
}
);

export default router;