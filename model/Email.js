/**
 * Email model
 */
const db = require("../dbConnection");
const uuid = require("uuid");
const tableName = `email_scheduler`;

//[uuid, to, cc, bcc, subject, body, scheduled_at, created_at, modified_at, email_status :(0:default, 1:email successfully sent , 2: getiing error)]

/**
 * fetAllData
 * @returns list of email
 */
const fetchAllEmail = () => {
  return db.select("*").from(`${tableName}`).limit(10);
};

/**
 *
 * @param post new email
 * @returns
 */

const addNewEmail = (data) => {
  data.uuid = uuid.v4();
  return db(`${tableName}`).insert(data).returning("*");
};

/**
 *
 * @param {*} id
 * @returns single row email
 */

const fetchByID = (id) => {
  return db.select("*").from(`${tableName}`).where("uuid", id);
};

/**
 * update email
 * @param {*} id
 * @param {*} data
 * @returns
 */
const updateByID = (id, data) => {
  return db(`${tableName}`).where("uuid", id).update(data).returning("*");
};
/**
 * delete email
 * @param {*} id
 * @returns
 */
const deleteById = (id) => {
  return db(`${tableName}`).where("uuid", id).del().returning("*");
};

module.exports = {
  fetchAllEmail,
  addNewEmail,
  fetchByID,
  updateByID,
  deleteById,
};
