const sql = require('../config')
const getData=require('../utils/getData')
let frontAdd = async (ctx) => {
  try {
    let username = ctx.query.username;
    let source = ctx.query.source;
    let getNewData=getData.getNewData
    const mysql = `insert into user (username,source,register_time) values (${username},${source},"${getNewData}")`
    const result = await sql.query(mysql);
    ctx.body = {
      code: 200,
      data: '添加成功'
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}

let backstageAdd = async (ctx) => {
  try {
    let username = ctx.query.username;
    let source = ctx.query.source;
    if (username == null ||  source == null) {
      throw '注册信息未填写完整'
    }
    let getNewData=getData.getNewData
    const mysql = `insert into user (username,source,register_time) values (${username},${source},"${getNewData}")`
    const result = await sql.query(mysql);
    ctx.body = {
      code: 200,
      data: '添加成功'
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}

module.exports = {
  "frontAdd": frontAdd,
  "backstageAdd":backstageAdd
}

