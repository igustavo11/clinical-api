import express from 'express';
import appointmentcController from './appointmentController.ts'
import pacientController from './pacientController.ts'
import doctorController from './doctorController.ts'
import prescriptionController from './prescriptionController.ts'

let router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).send('OK');
});

router.use("/", appointmentcController);
router.use("/", pacientController);
router.use("/", doctorController);
router.use("/", prescriptionController);

export default router;