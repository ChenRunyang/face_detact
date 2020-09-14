// sql语句
module.exports = {
    // 用户
    user: {
        add: 'insert into user(number,name, faceid) values (?, ?, ?)'
    },
    img:{
        add: 'insert into face(name, path) values (?, ?)'
    }
}
