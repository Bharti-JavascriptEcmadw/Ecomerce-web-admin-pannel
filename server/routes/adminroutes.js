import express from 'express'
        
import  { registercontroller,loginController, logoutController, getUser,} from '../controllers/adminregister.js'
import auth from '../middleware/auth.js'

const router =express.Router()
router.post('/register',registercontroller)
router.post('/login', loginController)
router.get('/logout',auth, logoutController)





export default router;  