const router = require('koa-router')()
const mongoose = require('mongoose')

const WebContents = mongoose.model('webcontents')

router.get('/', async ctx => {
  await Promise.all([
                    WebContents.find({type: 'navi'}),
                    WebContents.find({type: 'index'})
                    ])
      .then(([navs, indexs]) => ctx.render('index', {navs, indexs}))
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
