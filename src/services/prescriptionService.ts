import prescriptionRepository from "../repositores/prescriptionRepository";
import { Prescription } from "../interfaces/prescription";

const getAllPrescriptions = async () =>{
    return await prescriptionRepository.getAllPrescriptions();
}

const getPrescription = async (id: string) =>{
    return await prescriptionRepository.getPrescription(id);
}

const savePrescription = async (newPrescription: Prescription) =>{
    return await prescriptionRepository.savePrescription(newPrescription);
}

const updatePrescription = async (id: string, newPrescription: Prescription) =>{
    return await prescriptionRepository.updatePrescription(id, newPrescription);
}

const deletePrescription = async (id: string) =>{
    return await prescriptionRepository.deletePrescription(id);
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService;