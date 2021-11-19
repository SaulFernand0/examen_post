const express = require('express');
const router = express();
const pool = require('../../database');
const postsController = {};

//registrar
postsController.insert = async (req, res, next) => {
    try {
        const { titulo, descripcion, fecha } = req.body;
        console.log(descripcion)
        await pool.query(`INSERT INTO posts(titulo, descripcion, fecha) values($1,$2,$3)`, [titulo, descripcion, fecha])
        res.status(200).json({ Mensaje: "Se ha registrado correctamente" })
    } catch (error) {
        console.log(error)
    }
}

//listar
postsController.readAll = async (req, res, next) => {
    try {
        const posts = await pool.query('select * from posts')
        res.status(200).json({ posts: posts.rows })
    } catch (error) {
        console.log(error)
    }
}

//listar ID
postsController.readFindById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const posts = await pool.query('select * from posts where idpost = $1', [id])
        res.status(200).json({ posts: posts.rows[0] })
    } catch (error) {
        console.log(error)
    }
}

//actualizar
postsController.update = async (req, res, next) => {
    try {
        const { titulo , descripcion , fecha } = req.body;
        const { id } = req.params;
        console.log(id)
        const posts = await pool.query('update posts set titulo = $1, descripcion = $2, fecha = $3 where idpost = $4 ', [titulo, descripcion, fecha, id])
        res.status(200).json({ Message : "Se ha editado correctamente" })
    } catch (error) {
        console.log(error)
    }
}

//eliminar
postsController.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
       await pool.query('delete from posts where idpost = $1', [id])
       res.status(200).json({ Mensaje: "Se ha eliminado correctamente" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = postsController;