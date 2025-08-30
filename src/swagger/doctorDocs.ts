/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       required: ['name', 'login', 'password', 'specialty', 'crm', 'email', 'phone']
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único gerado automaticamente pelo MongoDB
 *         name:
 *           type: string
 *           description: Nome completo do médico
 *         login:
 *           type: string
 *           description: Login único do médico
 *         password:
 *           type: string
 *           description: Senha do médico (será criptografada)
 *         specialty:
 *           type: string
 *           description: Especialidade médica
 *         crm:
 *           type: string
 *           description: CRM único do médico
 *         email:
 *           type: string
 *           format: email
 *           description: Email do médico
 *         phone:
 *           type: string
 *           description: Telefone do médico
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 */

/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Lista todos os médicos
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: Lista de médicos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /doctors/{id}:
 *   get:
 *     summary: Busca um médico por ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do médico
 *     responses:
 *       200:
 *         description: Médico encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       404:
 *         description: Médico não encontrado
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
 * /doctors:
 *   post:
 *     summary: Cria um novo médico
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - login
 *               - password
 *               - specialty
 *               - crm
 *               - email
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome completo do médico
 *               login:
 *                 type: string
 *                 description: Login único do médico
 *               password:
 *                 type: string
 *                 description: Senha do médico
 *               specialty:
 *                 type: string
 *                 description: Especialidade médica
 *               crm:
 *                 type: string
 *                 description: CRM único do médico
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do médico
 *               phone:
 *                 type: string
 *                 description: Telefone do médico
 *     responses:
 *       201:
 *         description: Médico criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /doctors/{id}:
 *   put:
 *     summary: Atualiza um médico existente
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do médico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               specialty:
 *                 type: string
 *               crm:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Médico atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       404:
 *         description: Médico não encontrado
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
 * /doctors/{id}:
 *   delete:
 *     summary: Remove um médico
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do médico
 *     responses:
 *       200:
 *         description: Médico removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Doctor deleted successfully"
 *       404:
 *         description: Médico não encontrado
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
