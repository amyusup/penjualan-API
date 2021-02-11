const db = require("../config/mysql");

module.exports = {
  getPelanggan: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM pelanggan`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getPelangganById: function (id_pelanggan) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM pelanggan WHERE id_pelanggan='${id_pelanggan}'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getLastIdPelanggan: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT MAX(SUBSTRING(id_pelanggan,11))+1 AS id_pelanggan FROM pelanggan`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  addPelanggan: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO pelanggan SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  editPelanggan: (setData) => {
    const id = setData.id
    delete setData.id
    return new Promise((resolve, reject) => {
      db.query(`UPDATE pelanggan SET ? WHERE id_pelanggan='${id}'`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  deletePelanggan: (id_pelanggan) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM pelanggan WHERE id_pelanggan='${id_pelanggan}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
}