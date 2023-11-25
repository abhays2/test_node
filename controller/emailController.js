/**
 * emailController 
 * Handeling email crud request
 */
const query = require('../model/Email')

/**
 * fetch Email list
 * @param {*} req  
 * @param {*} res 
 */
const fetchAllEmail = async (req, res) => {
    try {
        const results = await query.fetchAllEmail()
         res.send(results)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  
}

const addNewEmail = async (req, res) => {
    try {
        const results = await query.addNewEmail(req.body)
         res.send(results)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  
}

/**
 * Fetch single Email row by Id
 * @param {id} req 
 * @param {res} res 
 */
const fetchById = async (req, res) => {
    try {
  const results = await query.fetchByID(req.params.id)
  res.send(results)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateById = async (req,res) => { 
    try {   
    const results = await query.updateByID(req.params.id, req.body)
    res.send(results)
        } catch (err) {
            res.status(500).json({ error: err.message });
    }
}

const deleteById = async (req,res) => {
    try {
    const results = await query.deleteById(req.params.id)
    res.send(results)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = { 
  fetchAllEmail,
  addNewEmail,
  fetchById,
  updateById,
  deleteById
}