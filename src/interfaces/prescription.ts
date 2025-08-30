interface Prescription {
    date: Date;
    appointmentId: string;
    medicine: string;
    dosage: string;
    instructions?: string;
    file?: string;
}

export type { Prescription };
