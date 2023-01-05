const express = require('express');
const router = express.Router();
const db = require('../../DB/db');


// 메인 게시판에는 사용자 사진,좋아요 전부 필요
router.get('/', async(req, res)=>{
    const {post_likes,post_title,post_contents,post_createdAt,user_profileImg,post_ID,user_nickname} = req.body;
    console.log(post_likes,post_title,post_contents,post_createdAt,user_profileImg,post_ID);
    
    const datas = [post_likes,post_title,post_contents,user_nickname,post_createdAt,user_profileImg];
    let sql = 'SELECT * FROM POST'
    db.query(sql, datas, function(err,results,field){
        if (err) throw err;
        res.render('/', {data:results});
        
    })
})

// 업로드는 좋아요 및 사진 X
router.post('/upload',async (req,res)=>{
    const {post_title,post_contents,user_nickname,post_createdAt} = req.body;
    console.log(post_title,post_contents,user_nickname,post_createdAt);
    const datas = [post_title,post_contents,user_nickname,post_createdAt];

    const sql = "INSERT INTO POST(post_title,post_contents,user_nickname,post_createdAt) VALUES(?,?,?,now())";
    db.query(sql, datas, function(err,rows){
        if (err) console.error("Error:" + err);
        res.redirect('/page/main')
    })
})
module.exports = router;