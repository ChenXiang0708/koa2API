const router = require('koa-router')()
const sql = require('../../config')
const request=require('../../utils/request');
const staff=require('../../controller/staff')


router.get('/admin/staff/items', request.items)
router.get('/admin/staff/find', request.find)
router.del('/admin/staff/del', request.del)
router.put('/admin/staff/amend', request.amend)
router.get('/admin/staff/editId',request.item)
router.post('/admin/staff/add',staff.add)



module.exports = router
