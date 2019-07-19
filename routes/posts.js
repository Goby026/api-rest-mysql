const express = require('express');

const mysql = require('../bd');

var cc = mysql.conn;

const router = express.Router();

/* =========================================
==  OBTENER TODOS LOS POSTS
==========================================*/

router.get('/', (req, res) => {

    cc.query('SELECT * FROM post', (err, rows, fields) => {

        if (err) throw err;

        return res.json({
            "status": 200,
            "error": null, 
            "response": rows
        });
    });
});

/* =========================================
==  OBTENER UN POST
==========================================*/

router.get('/:id', (req, res) =>{

    const {id} = req.params;

    cc.query('SELECT * FROM post WHERE idpost = ?',[id], (err, rows, fields)=> {

        if (err) throw err;

        return res.json({
    
            message: 'post obtained',
            resp: rows[0],
    
        });

    });

});

/* =========================================
==  CREAR NUEVO POST
==========================================*/

router.post('/', (req, res) =>{

    cc.query('INSERT INTO post SET ? ', [req.body], (err, rows, fields)=>{

        if (err) throw err;
        
        return res.json({
            message: 'Post created',
            resp: rows
        });

    });

});

/* =========================================
==  ACTUALIZAR POST
==========================================*/

router.put('/:id', (req, res) =>{

    const {id} = req.params;

    cc.query('UPDATE post SET ? WHERE idpost = ?',[req.body, id], (err, rows, fields)=> {

        if (err) throw err;

        return res.json({
    
            message: 'post updated',
            resp: rows,
    
        });

    });

});

/* =========================================
==  ELIMINAR POST
==========================================*/

router.delete('/:id', (req, res) =>{

    const {id} = req.params;

    cc.query('DELETE FROM post WHERE idpost = ?', [id], (err, rows, fields)=> {

        if (err) throw err;

        return res.json({
    
            message: 'post deleted',
            resp: rows,
    
        });

    });

});

module.exports = router;