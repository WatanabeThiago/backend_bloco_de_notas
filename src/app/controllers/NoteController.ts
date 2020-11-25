import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Note from '../../database/models/Note'
import NoteView from '../view/NotesView'
class NoteController {
    async create(req: Request, res: Response) {                     // Criar o Sell
        const NoteRepository = getRepository(Note);                 // Conectando ao repositorio do model Sell
                     // Recebendo o sell_userID dos headers.authorization
    
        const {note_name, note_text, user_id  } = req.body

        const data = {
            note_name, note_text,user_id                                       // sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount
        
        }

        const note = NoteRepository.create(data)                        // Criando a linha na tabela.)
        
        await NoteRepository.save(note)                             // Registrando dos dados na linha.

        return res.json(note);                                      // Retornando a sell.


    }
    async delete(req: Request, res: Response) {                     // Deletar Sell
        const repository = getRepository(Note);                     // Conectando ao repositorio do model Sell

        const note_id = req.params.sell_id;                         // Recebendo o sell_id dos params (ADICIONAR MEDIDAS DE SEGURANÇA)
        console.log(req.params)

        const sellExists = await repository.findOne({ where: { note_id } }) // Verificação se a Sell existe ou nao.

        if (!sellExists) {                                          // Verificação se a Sell existe ou nao.
            return res.sendStatus(404);
           
        }
        await getConnection()                                       
            .createQueryBuilder()
            .delete()
            .from(Note)
            .where("note_id = :note_id", { note_id })
            .execute();

        console.log(`Sell com ID ${note_id} foi deletado.`)
        res.send(`Sell com ID ${note_id} foi deletado.`);
    }

    async list(req: Request, res: Response) {                       // Listar todas as Sells
        const NoteRepository = getRepository(Note);                 // Conectando ao repositorio do model Sell

        const notes = await NoteRepository.find();

        return res.json(notes);          // Retornar o JSON de acordo com a view Sell.
    }
    async listOne(req: Request, res: Response) {

    }
    async update(req: Request, res: Response) {
        const { note_text, note_name } = req.body;
        console.log(req.body)
        const dados = {
            note_text, note_name
        }
        const note_id = req.params;
        try {
            const notes_update = await getRepository(Note).update(
                note_id,
                dados
            );
            return res.status(200).json({
                message: "Nota atualizada com sucesso.",
                data: notes_update,
            });
        } catch (error) {
            return res.status(400).json({
                message: "Falha ao atualizar a nota.",
                info: error,
            });
        }
    }


}




export default new NoteController();