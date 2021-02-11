const db = require("../config/mysql");

module.exports = {
  getBarang: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM barang`,
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
  getBarangByKode: function (kode) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM barang WHERE kode='${kode}'`,
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
  getHargaBarang: function (kode) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT harga FROM barang WHERE kode='${kode}'`,
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
  getLastIdBarang: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT MAX(SUBSTRING(kode,5))+1 AS kode FROM barang`,
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
  addBarang: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO barang SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  editBarang: (setData) => {
    console.log(setData)
    const kode = setData.kode
    delete setData.kode
    return new Promise((resolve, reject) => {
      db.query(`UPDATE barang SET ? WHERE kode='${kode}'`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteBarang: (kode) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM barang WHERE kode='${kode}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  
}