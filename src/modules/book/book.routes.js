import { Router } from "express";
import { errorhandler } from "../../middleware/error-handler.js";
import * as bookcontroller from'./book.controller.js'
const router=Router()

router.post('/add',errorhandler(bookcontroller.addbook))
router.get('/get',errorhandler(bookcontroller.getallbooks))

router.get('/sp-book',errorhandler(bookcontroller.get_sp_book))

router.put('/update/:bookid',errorhandler(bookcontroller.update_sp_book))
router.delete('/del/:bookid',errorhandler(bookcontroller.del_sp_book))

export default router;