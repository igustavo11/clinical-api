/**
 * @swagger
 * components:
 *   schemas:
 *     Appointment:
 *       type: object
 *       required: ['doctorId', 'pacientId', 'date', 'status']
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único gerado automaticamente pelo MongoDB
 *         doctorId:
 *           type: string
 *           description: ID do médico responsável pela consulta
 *         pacientId:
 *           type: string
 *           description: ID do paciente da consulta
 *         date:
 *           type: string
 *           format: date-time
 *           description: Data e hora da consulta
 *         status:
 *           type: string
 *           enum: ['scheduled', 'in_progress', 'completed', 'cancelled']
 *           description: Status da consulta
 *         notes:
 *           type: string
 *           description: Observações sobre a consulta
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 */

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Lista todas as consultas
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Lista de consultas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /appointments/{id}:
 *   get:
 *     summary: Busca uma consulta por ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da consulta
 *     responses:
 *       200:
 *         description: Consulta encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Cria uma nova consulta
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - doctorId
 *               - pacientId
 *               - date
 *               - status
 *             properties:
 *               doctorId:
 *                 type: string
 *                 description: ID do médico responsável pela consulta
 *               pacientId:
 *                 type: string
 *                 description: ID do paciente da consulta
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora da consulta (ISO 8601)
 *               status:
 *                 type: string
 *                 enum: [scheduled, in_progress, completed, cancelled]
 *                 description: Status da consulta
 *               notes:
 *                 type: string
 *                 description: Observações sobre a consulta
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     summary: Atualiza uma consulta existente
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da consulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               doctorId:
 *                 type: string
 *               pacientId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [scheduled, in_progress, completed, cancelled]
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     summary: Remove uma consulta
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da consulta
 *     responses:
 *       200:
 *         description: Consulta removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Appointment deleted successfully"
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
