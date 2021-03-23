const dataBase = require('../models')

class NivelController {
    static async pegaTodosOsNiveis(req, res){
		try {
			const todosOsNiveis = await dataBase.Niveis.findAll()
			return res.status(200).json(todosOsNiveis)
		} catch (error) {
			res.status(500).json(error.message)
		}
    }

	static async pegaUmNivel(req, res) {
		const { id } = req.params
		try {
			const umNivel = await dataBase.Niveis.findOne({
				where: {id: id}
			})
			return res.status(200).json(umNivel)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaNivel(req, res) {
		try {
			const novoNivel = await dataBase.Niveis.create(req.body)
			return res.status(200).json(novoNivel)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async atualizaNivel(req, res) {
		const { id } = req.params
		try {
			await dataBase.Niveis.update(req.body, {
				where: {id: id}
			})
			const NivelAtualizada = await 	dataBase.Niveis.findOne({
				where: {id: id}
			})
			return res.status(200).json(NivelAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
	
	static async deletaNivel(req, res) {
		const { id } = req.params
		try {
			await dataBase.Niveis.destroy({
				where: {id: id}
			})
			return res.status(200).json(`Nivel de id: ${id} foi deletado`)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = NivelController