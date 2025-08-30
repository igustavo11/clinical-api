import appointmentsRepository from "../repositores/appointmentRepository";
import { Appointment } from "../interfaces/appointment";

const getAllAppointments = async () =>{
    return await appointmentsRepository.getAllAppointments();
}
const getAppointment = async (id: string) =>{
    return await appointmentsRepository.getAppointment(id);
}
const saveAppointment = async (newAppointment: Appointment) =>{
    return await appointmentsRepository.saveAppointment(newAppointment);
}
const updateAppointment = async (id: string, newAppointment: Appointment) =>{
    return await appointmentsRepository.updateAppointment(id, newAppointment);
}
const deleteAppointment = async (id: string) =>{
    return await appointmentsRepository.deleteAppointment(id);
}

const appointmentsService ={
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentsService;