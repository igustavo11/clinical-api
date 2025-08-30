/**
 * @swagger
 * components:
 *   schemas:
 *     Prescription:
 *       type: object
 *       required: ['doctorId', 'pacientId', 'medications']
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único gerado automaticamente pelo MongoDB
 *         doctorId:
 *           type: string
 *           description: ID do médico que prescreveu
 *         pacientId:
 *           type: string
 *           description: ID do paciente que recebeu a prescrição
 *         medications:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - name
 *               - dosage
 *               - frequency
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do medicamento
 *               dosage:
 *                 type: string
 *                 description: Dosagem do medicamento
 *               frequency:
 *                 type: string
 *                 description: Frequência de uso
 *           description: Lista de medicamentos prescritos
 *         instructions:
 *           type: string
 *           description: Instruções de uso
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 */

/**
 * @swagger
 * /prescriptions:
 *   get:
 *     summary: Lista todas as receitas
 *     tags: [Prescriptions]
 *     responses:
 *       200:
 *         description: Lista de receitas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prescription'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /prescriptions/{id}:
 *   get:
 *     summary: Busca uma receita por ID
 *     tags: [Prescriptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da receita
 *     responses:
 *       200:
 *         description: Receita encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       404:
 *         description: Receita não encontrada
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
 * /prescriptions:
 *   post:
 *     summary: Cria uma nova receita
 *     tags: [Prescriptions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - doctorId
 *               - pacientId
 *               - medications
 *             properties:
 *               doctorId:
 *                 type: string
 *                 description: ID do médico que prescreveu
 *               pacientId:
 *                 type: string
 *                 description: ID do paciente que recebeu a prescrição
 *               medications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - dosage
 *                     - frequency
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Nome do medicamento
 *                     dosage:
 *                       type: string
 *                       description: Dosagem do medicamento
 *                     frequency:
 *                       type: string
 *                       description: Frequência de uso
 *                 description: Lista de medicamentos prescritos
 *               instructions:
 *                 type: string
 *                 description: Instruções de uso
 *     responses:
 *       201:
 *         description: Receita criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /prescriptions/{id}:
 *   put:
 *     summary: Atualiza uma receita existente
 *     tags: [Prescriptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da receita
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
 *               medications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     dosage:
 *                       type: string
 *                     frequency:
 *                       type: string
 *               instructions:
 *                 type: string
 *     responses:
 *       200:
 *         description: Receita atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       404:
 *         description: Receita não encontrada
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
 * /prescriptions/{id}:
 *   delete:
 *     summary: Remove uma receita
 *     tags: [Prescriptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da receita
 *     responses:
 *       200:
 *         description: Receita removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Prescription deleted successfully"
 *       404:
 *         description: Receita não encontrada
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
