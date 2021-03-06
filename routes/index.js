const router = require('koa-router')()
const mongoose = require('mongoose')

const WebContents = mongoose.model('webcontents')

router.get('/', async ctx => {
  await Promise.all([
                    WebContents.find({type: 'navi'}),
                    WebContents.find({type: 'index'}),
                    WebContents.find({type: 'product'}).limit(3),
                    WebContents.find({type: 'about'})
                    ])
      .then(([navs, indexs, products, about]) =>
          ctx.render('index', {navs, indexs, products, about}))
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
