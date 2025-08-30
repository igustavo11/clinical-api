import prescription from "../models/prescription";
import { Prescription } from "../interfaces/prescription";

const getAllPrescriptions = async () =>{
    return await prescription.find();
}

const getPrescription = async (id: string) =>{
    try{
        return await prescription.findById(id);
    }catch (error){
        console.error("Error fetching prescription by ID:", error);
        throw error;
    }
}

const savePrescription = async (newPrescription: Prescription) =>{
    try{
        const prescriptionDoc = new prescription(newPrescription);
        return await prescriptionDoc.save();
    }catch (error){
        console.error("Error saving prescription:", error);
        throw error;
    }
}

const updatePrescription = async (id: string, newPrescription: Prescription) =>{
    try{
        return await prescription.findByIdAndUpdate(id, newPrescription, {new: true});
    }catch (error){
        console.error("Error updating prescription:", error);
        throw error;
    }
}

const deletePrescription = async (id: string) =>{
    try{
        return await prescription.findByIdAndDelete(id);
    }catch (error){
        console.error("Error deleting prescription:", error);
        throw error;
    }
}

const prescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionRepository;