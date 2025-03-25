import express from 'express'
        
import  {addcolor} from '../controllers/colorscontroller.js'
import auth from '../middleware/auth.js'

const router =express.Router()
router.post('/color',addcolor)
// router.post('/login', loginController)
// router.get('/logout',auth, logoutController)





export default router;  