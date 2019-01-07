const sql = require('../config')

let anyDays = async (ctx) => {
  try {
    const id = ctx.query.id;
    const days = ctx.query.days
    const mysql = `select count(*) AS num,date(day) as date from track where track.articleid=${id} and datediff(now(),day)<=${days} group by month(day) asc,day(day) asc`
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

let articleTrackList = async (ctx) => {
  try {
    const id = ctx.query.id;
    const mysql = `select track.*,article.id from track,article where track.articleid=article.id and track.articleid=${id} order by track.articleid desc`
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

let userTrackList = async (ctx) => {
  try {
    const id = ctx.query.id;
    const mysql = `select track.*,user.id from track,user where track.userid=user.id and user.id=${id} order by track.articleid desc`
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

module.exports = {
  "anyDays": anyDays,
  "articleTrackList": articleTrackList,
  "userTrackList": userTrackList
}

