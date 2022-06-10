'use strict'

const { readAll } = require('../../../model/index_orders.js')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    //console.log(request.headers.authorization)
    const result = await readAll(this.mongo) // 서버와 DB의 통신

    if(!result){
      reply
      .code(404) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({error : "Not Found"})
    }else{
      reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send(result) //데이터베이스에서 꺼내와야 함
    }
  })
}
