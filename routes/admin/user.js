const router = require('koa-router')()
const request=require('../../utils/request');
const user=require('../../controller/user')

router.get('/admin/user/items', request.items)
router.get('/admin/user/find', request.find)
router.del('/admin/user/del', request.del)
router.put('/admin/user/amend', request.amend)
router.get('/admin/user/editId',request.item)
router.post('/admin/user/frontAdd',user.frontAdd)
router.post('/admin/user/backstageAdd',user.backstageAdd)

module.exports = router
