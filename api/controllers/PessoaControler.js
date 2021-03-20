const dataBase = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
		try {
			const todasAsPessoas = await dataBase.Pessoas.findAll()
			return res.status(200).json(todasAsPessoas)
		} catch (error) {
			res.status(500).json(error.message)
		}
    }
}

module.exports = PessoaController