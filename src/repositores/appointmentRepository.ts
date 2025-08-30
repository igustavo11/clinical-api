import appointment from "../models/appointment";
import { Appointment } from "../interfaces/appointment";

const getAllAppointments = async () =>{
    return await appointment.find();
}

const getAppointment = async (id: string) =>{
    try{
        return await appointment.findById(id);
    }catch (error){
        console.error("Error fetching appointment by ID:", error);
        throw error;
    }
}

const saveAppointment = async (newAppointment: Appointment) =>{
    try{
        const prescription = new appointment(newAppointment);
        return await prescription.save();
    }catch (error){
        console.error("Error saving appointment:", error);
        throw error;
    }
}

const updateAppointment = async (id: string, newAppointment: Appointment) =>{
    try{
        return await appointment.findByIdAndUpdate(id, newAppointment, {new: true});
    }catch (error){
        console.error("Error updating appointment:", error);
        throw error;
    }

}

const deleteAppointment = async (id: string) =>{
    try{
        return await appointment.findByIdAndUpdate(id);
    }catch (error){
        console.error("Error deleting appointment:", error);
        throw error;
    }
}

const appointmentsRepository = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentsRepository;