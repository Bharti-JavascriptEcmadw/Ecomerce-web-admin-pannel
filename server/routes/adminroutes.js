import express from 'express'
        
import  { admin_login,} from '../controllers/admin/admin_login.js'


const router =express.Router()
router.post('/register',admin_login)





export default router;  

