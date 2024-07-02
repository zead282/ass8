import { Router } from "express";
import { errorhandler } from "../../middleware/error-handler.js";
import * as authorcontroller from './author.controller.js';
const router=Router()

router.post('/add',errorhandler(authorcontroller.addauthor))

router.put('/update/:authorid',errorhandler(authorcontroller.update_author))
router.delete('/del/:authorid',errorhandler(authorcontroller.delete_author))
router.get('/',errorhandler(authorcontroller.get_all_authors))
router.get('/sp-author/:authorid',errorhandler(authorcontroller.get_sp_author))

export default router;