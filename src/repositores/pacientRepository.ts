import pacient from "../models/pacient";
import { Pacient } from "../interfaces/pacient";

const getAllPacients = async () =>{
    try{
        return await pacient.find();
    }catch (error){
        console.error("Error fetching pacients:", error);
        throw error;
    }
}
const getPacient = async (id: string) =>{
    try{
        return await pacient.findById(id);
    }catch (error){
        console.error("Error fetching pacient by ID:", error);
        throw error;
    }
}
const savePacient = async (newPacient: Pacient) => {
    try {
        const pacientModel = new pacient(newPacient);
        return await pacientModel.save();
    } catch (error) {
        console.error("Error saving pacient:", error);
        throw error;
    }
}
const updatePacient = async (id: string, newPacient: Pacient) =>{
    try{
        return await pacient.findByIdAndUpdate(id, newPacient, {new: true}); 
    }catch (error){
        console.error("Error updating pacient:", error);
        throw error;
    }
}
const deletePacient = async (id: string) =>{
    try{
        return await pacient.findByIdAndDelete(id);
    }catch (error){
        console.error("Error deleting pacient:", error);
        throw error;
    }
}

const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient

}

export default pacientRepository;