const sql = require('../config');
const md5 = require('MD5');
let client = async (ctx) => {
  try {
    const id = ctx.query.id;
    const mysql = `select user.*,staff.* from user,staff where user.staffid=staff.id and staff.id=${id} order by staff.id desc`
    const result = await sql.query(mysql);
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}

// 员工身份无法添加和修改

let add = async (ctx) => {
  try {
    let staffname = ctx.query.staffname;
    let password = md5(ctx.query.password);
    console.log(password)
    
    let openid = ctx.query.openid;
    let phone = ctx.query.phone;
    let station = ctx.query.station;
    console.log(station)
    if (staffname == null || password == null || openid == null || phone == null || station == null) {
      throw '注册信息未填写完整'
    }
    const mysql = `insert into user (staffname,password,openid,phone,station) values ("${staffname}","${password}","${openid}","${phone}","${station}")`;
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
  "client": client,
  "add": add
}

