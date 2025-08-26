import { Doctor } from "../interfaces/doctor.ts";
import doctorRepository from "../repositores/doctorRepository.ts";

const getAllDoctors = async () =>{
    return await doctorRepository.getAllDoctors();
}
const getDoctor = async (id: string) =>{
    return await doctorRepository.getDoctor(id);
}
const saveDoctor = async (newDoctor: Doctor) =>{
    return await doctorRepository.saveDoctor(newDoctor);
}
const updateDoctor = async (id: string, newDoctor: Doctor) =>{
    return await doctorRepository.updateDoctor(id, newDoctor);
}
const deleteDoctor = async (id: string) =>{
    return await doctorRepository.deleteDoctor(id);
}
const getDoctorByLogin = async (login: string) =>{
    return await doctorRepository.getDoctorByLogin(login);
}


const doctorService ={
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorService;