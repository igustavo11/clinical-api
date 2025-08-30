/**
 * @swagger
 * components:
 *   schemas:
 *     Pacient:
 *       type: object
 *       required: ['name', 'email', 'phone', 'birthDate', 'address']
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único gerado automaticamente pelo MongoDB
 *         name:
 *           type: string
 *           description: Nome completo do paciente
 *         email:
 *           type: string
 *           format: email
 *           description: Email do paciente
 *         phone:
 *           type: string
 *           description: Telefone do paciente
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Data de nascimento do paciente
 *         address:
 *           type: string
 *           description: Endereço completo do paciente
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 */

/**
 * @swagger
 * /pacients:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Pacients]
 *     responses:
 *       200:
 *         description: Lista de pacientes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pacient'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /pacients/{id}:
 *   get:
 *     summary: Busca um paciente por ID
 *     tags: [Pacients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: Paciente encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pacient'
 *       404:
 *         description: Paciente não encontrado
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
 * /pacients:
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Pacients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - birthDate
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome completo do paciente
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do paciente
 *               phone:
 *                 type: string
 *                 description: Telefone do paciente
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento (YYYY-MM-DD)
 *               address:
 *                 type: string
 *                 description: Endereço completo do paciente
 *     responses:
 *       201:
 *         description: Paciente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pacient'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /pacients/{id}:
 *   put:
 *     summary: Atualiza um paciente existente
 *     tags: [Pacients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Paciente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pacient'
 *       404:
 *         description: Paciente não encontrado
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
 * /pacients/{id}:
 *   delete:
 *     summary: Remove um paciente
 *     tags: [Pacients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: Paciente removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Pacient deleted successfully"
 *       404:
 *         description: Paciente não encontrado
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
