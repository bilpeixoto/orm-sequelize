const dataBase = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req, res){
		try {
			const todasAsTurmas = await dataBase.Turmas.findAll()
			return res.status(200).json(todasAsTurmas)
		} catch (error) {
			res.status(500).json(error.message)
		}
    }


	static async pegaUmaTurma(req, res) {
		const { id } = req.params
		try {
			const umaTurma = await dataBase.Turmas.findOne({
				where: {id: id}
			})
			return res.status(200).json(umaTurma)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaTurma(req, res) {
		try {
			const novaTurma = await dataBase.Turmas.create(req.body)
			return res.status(200).json(novaTurma)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async atualizaTurma(req, res) {
		const { id } = req.params
		try {
			await dataBase.Turmas.update(req.body, {
				where: {id: id}
			})
			const TurmaAtualizada = await 	dataBase.Turmas.findOne({
				where: {id: id}
			})
			return res.status(200).json(TurmaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
	
	static async deletaTurma(req, res) {
		const { id } = req.params
		try {
			await dataBase.Turmas.destroy({
				where: {id: id}
			})
			return res.status(200).json(`Turma de id: ${id} foi deletada`)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = TurmaController