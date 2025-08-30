import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Medical Clinic API',
      version: '1.0.0',
      description: 'API para gerenciamento de clínica médica com médicos, pacientes, consultas e receitas',
      contact: {
        name: 'API Support',
        email: 'support@clinic.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './src/swagger/*.ts',
    './src/routes/*.ts'
  ]
};

export const specs = swaggerJsdoc(options);
