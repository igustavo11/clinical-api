import { Pacient } from "../interfaces/pacient.ts";
import pacientRepository from "../repositores/pacientRepository.ts";

const getAllPacients = async () =>{
    return await pacientRepository.getAllPacients();
}
const getPacient = async (id: string) =>{
    return await pacientRepository.getPacient(id);
}
const savePacient = async (newPacient: Pacient) =>{
    return await pacientRepository.savePacient(newPacient);
}
const updatePacient = async (id: string, newPacient: Pacient) =>{
    return await pacientRepository.updatePacient(id, newPacient);
}
const deletePacient = async (id: string) =>{
    return await pacientRepository.deletePacient(id);
}

const pacientService ={
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient

}

export default pacientService;