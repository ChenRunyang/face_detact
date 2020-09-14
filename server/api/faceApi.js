const models = require("../db");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql");
const $sql = require("../sqlMap");

// 连接数据库
const pool = mysql.createPool(models.mysql);
// 使用硬盘存储模式设置存放接收到的文件的路径以及文件名
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// 接收到文件后输出的保存路径（若不存在则需要创建）
		let filepath = path.resolve(__dirname, `../../img/`);
		if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
		cb(null, filepath);
	},
	filename: (req, file, cb) => {
		// 将保存文件名设置为 landid_buildingid_time，比如 1001_001_time,若传入name属性，则更新图片
		let name = req.query.name;
		cb(null, `${name}_${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({
	storage: storage,
});
const jsonWrite = function(res, ret) {
	if (typeof ret === "undefined") {
		res.json({
			code: "1",
			msg: "操作失败",
		});
	} else {
		res.json(ret);
	}
};

// 增加图片接口
router.post("/addFaceImg", upload.single("file"), (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", " 3.2.1");
	res.header("Content-Type", "application/json;charset=utf-8");
	const sql = $sql.img.add;
	let file = req.file;
	pool.getConnection((err, conn) => {
		if (!err) {
			conn.query(sql, [file.filename, file.path], function(err, result) {
				if (err) {
					console.log(err);
					conn.release();
				}
				if (result) {
					jsonWrite(res, result);
					conn.release();
				}
			});
		} else {
			console.log(err);
			res.send(err);
		}
	});
});
// // 增加图片接口
// router.get("/addFaceImg", (req, res) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", " 3.2.1");
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	console.log("1");

// 	res.send("hello");
// 	// pool.getConnection((err, conn) => {
// 	// 	conn.query(sql, [params.username, params.age], function(err, result) {
// 	// 		if (err) {
// 	// 			console.log(err);
// 	// 			conn.release();
// 	// 		}
// 	// 		if (result) {
// 	// 			jsonWrite(res, result);
// 	// 		}
// 	// 	});
// 	// });
// });
module.exports = router;
