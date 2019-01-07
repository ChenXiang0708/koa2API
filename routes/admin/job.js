const router = require('koa-router')()
const sql = require('../../config')
const request=require('../../utils/request');


router.get('/admin/job/items', request.items)
router.get('/admin/job/find', request.find)
router.del('/admin/job/del', request.del)
router.put('/admin/job/amend', request.amend)
router.get('/admin/job/editId',request.item)
router.post('/admin/job/Lackadd',request.Lackadd)


module.exports = router
