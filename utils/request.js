const sql = require('../config')
/**
 *  `/admin/user/edit?id=35&sex=3&sign=278121`  取得第三个，若到时候api发生变化需注意
    const tableName = ctx.url.split('/')[2];
 */
let item = async (ctx) => {
  try {
    const id = ctx.query.id;
    if (id == null) { throw 'ID为空' }
    const tableName = ctx.url.split('/')[2];
    const result = await sql.query(`select * from ${tableName} where id = ${id}`);
    ctx.body = {
      code: 200,
      data: '获取I详情成功'
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}


let amend = async (ctx) => {
  try {
    let { id, ...other } = ctx.query;
    if (id == null) { throw 'ID为空' }
    if (Object.keys(other).length == 0) { throw '要修改的内容为空' }
    const tableName = ctx.url.split('/')[2];
    let sqlUpdat = JSON.stringify(other).replace(/[\{\}\"]/g, '').replace(/\:/g, "=");
    const result = await sql.query(`update ${tableName} set ${sqlUpdat} where id=${id}`);
    ctx.body = {
      code: 200,
      data: '修改成功'
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}



let del = async (ctx) => {
  try {
    const id = ctx.query.id;
    if (id == null) { throw 'ID为空' }
    const tableName = ctx.url.split('/')[2];
    const result = await sql.query(`DELETE FROM ${tableName} WHERE id=${id}`);
    ctx.body = {
      code: 200,
      data: '删除成功'
    }
  } catch (err) {
    ctx.body = {
      code: 404,
      message: err
    }
  }
}

let items = async (ctx) => {
  
  const tableName = ctx.url.split('/')[2];
  try {
    const result = await sql.query(`select * from ${tableName}`)
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




let Lackadd = async (ctx) => {
  try {
    const tableName = ctx.url.split('/')[2];
    let params = ctx.query;
    if (Object.keys(params).length == 0) { throw '要添加的内容为空' }
    let keys = Object.keys(params).join(',');
    let values = Object.values(params).join(',');
    const result = await sql.query(`insert into ${tableName} (${keys}) values (${values})`);
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


let find = async (ctx) => {
  try {
    if (Object.keys(ctx.query).length == 0) { throw '请输入要搜索的内容' }
    if (Object.keys(ctx.query).length > 1) { throw '输入了多余参数' }
    if (Object.keys(ctx.query)[0] !== 'find') { throw 'find下标不正确' }
    const tableName = ctx.url.split('/')[2];
    if (tableName == 'user') {
      function findTitle() {
        return {
          user: user = 'username',
        }
      }
    }
    let findContent = Object.values(ctx.query)
    const result = await sql.query(`select * from ${tableName} where ${findTitle().user} like  '%${findContent}%' order by id desc`);
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





module.exports = {
  "item": item,
  "amend": amend,
  "items": items,
  "del": del,
  "Lackadd": Lackadd,
  "find": find
}
