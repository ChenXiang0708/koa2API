const router = require('koa-router')()
const sql = require('../../config')
const request=require('../../utils/request');

router.get('/admin/article/items', request.items)
router.get('/admin/article/find', request.find)
router.del('/admin/article/del', request.del)
router.put('/admin/article/amend', request.amend)
router.get('/admin/article/editId',request.item)
router.post('/admin/article/Lackadd',request.Lackadd)

module.exports = router
