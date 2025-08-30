import express from 'express';
import appointmentcController from './appointmentController'
import pacientController from './pacientController'
import doctorController from './doctorController'
import prescriptionController from './prescriptionController'

let router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).send('OK');
});

router.use("/", appointmentcController);
router.use("/", pacientController);
router.use("/", doctorController);
router.use("/", prescriptionController);

export default router;