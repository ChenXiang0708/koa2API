const router = require('koa-router')()
const sql = require('../../config')
const request=require('../../utils/request');
const track=require('../../controller/track')


router.get('/admin/track/anyDays', track.anyDays)
router.get('/admin/track/articleTrackList', track.articleTrackList)
router.get('/admin/track/userTrackList', track.userTrackList)
router.post('/admin/track/add', request.Lackadd)






module.exports = router
