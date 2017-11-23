const router = require('koa-router')()
const mongoose = require('mongoose')

const WebContents = mongoose.model('webcontents')

router.get('/', async ctx => {
  await WebContents.find({type: "navi"})
      .then(navs => ctx.render('index', {navs}))
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
