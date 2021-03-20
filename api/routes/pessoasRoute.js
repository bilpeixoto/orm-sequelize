const { Router } = require('express')
const PessoaController = require('../controllers/PessoaControler')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router