import doctor from "../models/doctor";
import { Doctor } from "../interfaces/doctor";

const getAllDoctors = async () =>{
    try{
        return await doctor.find();
    }catch (error){
        console.error("Error fetching doctors:", error);
        throw error;
    }
}
const getDoctor = async (id: string) =>{
    try{
        return await doctor.findById(id);
    }catch (error){
        console.error("Error fetching doctor by ID:", error);
        throw error;
    }
}
const saveDoctor = async (newDoctor: Doctor) =>{
    try{
        const newDoc = new doctor(newDoctor);
        return await newDoc.save();
    }catch (error){
        console.error("Error saving doctor:", error);
        throw error;
    }
}
const updateDoctor = async (id: string, newDoctor: Doctor) =>{
    try{
        return await doctor.findByIdAndUpdate(id, newDoctor, {new: true});  
    }catch (error){
        console.error("Error updating doctor:", error);
        throw error;
    }
}
const deleteDoctor = async (id: string) =>{
    try{
        return await doctor.findByIdAndDelete(id);
    }catch (error){
        console.error("Error deleting doctor:", error);
        throw error;
    }
}
const getDoctorByLogin = async (login: string) =>{
    try{
        return await doctor.findOne({login: login});
    }catch (error){
        console.error("Error fetching doctor by login:", error);
        throw error;
    }
}


const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorRepository;