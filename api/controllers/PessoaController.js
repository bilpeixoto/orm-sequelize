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

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params
		try {
			const umaPessoa = await dataBase.Pessoas.findOne({
				where: {id: id}
			})
			return res.status(200).json(umaPessoa)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaPessoa(req, res) {
		try {
			const novaPessoa = await dataBase.Pessoas.create(req.body)
			return res.status(200).json(novaPessoa)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async atualizaPessoa(req, res) {
		const { id } = req.params
		try {
			await dataBase.Pessoas.update(req.body, {
				where: {id: id}
			})
			const pessoaAtualizada = await 	dataBase.Pessoas.findOne({
				where: {id: id}
			})
			return res.status(200).json(pessoaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
	
	static async deletaPessoa(req, res) {
		const { id } = req.params
		try {
			await dataBase.Pessoas.destroy({
				where: {id: id}
			})
			return res.status(200).json(`Pessoa de id: ${id} foi deletada`)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async pegaUmaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			const umaMatricula = await dataBase.Matriculas.findOne({
				where: {
					id: matriculaId,
					estudante_id: estudanteId
				}
			})
			return res.status(200).json(umaMatricula)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaMatricula(req, res) {
		const { estudanteId } = req.params
		const novaMatricula = { ...req.body, estudante_id: estudanteId }
		try {
			const novaMatriculaCriada = await dataBase.Matriculas.create(novaMatricula)
			return res.status(200).json(novaMatriculaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async atualizaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			await dataBase.Matriculas.update(req.body, {
				where: {
					id: matriculaId,
					estudante_id: estudanteId
				}
			})
			const matriculaAtualizada = await dataBase.Matriculas.findOne({
				where: {id: matriculaId}
			})
			return res.status(200).json(matriculaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async deletaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			await dataBase.Matriculas.destroy({
				where: {
					id: matriculaId,
					estudante_id: estudanteId
				}
			})
			return res.status(200).json(`Matricula de id: ${matriculaId} foi deletada`)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}


}

module.exports = PessoaController