import { Router } from 'express'
import multer from 'multer'
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import ProfileController from './app/controllers/ProfileController'
import NoteController from './app/controllers/NoteController'



const router = Router()


// /users
router.post('/users', UserController.create)
router.delete('/users/:user_id', UserController.delete)
router.get('/users', UserController.list)
router.get('/users/:user_username', UserController.listOne)
router.put('/users/:user_id', UserController.update)

// login
router.post('/login', AuthController.login)

//profile
router.get('/profile/:sell_userId', ProfileController.perfil)

//sell
router.post('/notes', NoteController.create)
router.get('/notes', NoteController.list)
router.delete('/notes/:sell_id', NoteController.delete)
router.put('/notes/:sell_id', NoteController.update)




export default router;