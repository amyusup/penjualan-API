const db = require("../config/mysql");

module.exports = {
  getPenjualan: function () {
    // console.log(id)
    return new Promise((resolve, reject) => {
      // SELECT id, id_nota, DATE_FORMAT(tgl,\'%d-%m-%Y\') as tgl, kode_pelanggan, subtotal FROM penjualan
      db.query(
        `SELECT b.id,b.kode_pelanggan,a.nama, DATE_FORMAT(b.tgl,\'%d-%m-%Y\') as tgl, b.id_nota, b.subtotal FROM pelanggan a INNER JOIN penjualan b ON a.id_pelanggan = b.kode_pelanggan`,
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
  getPenjualanByNota: function (nota) {
    // console.log(id)
    return new Promise((resolve, reject) => {
      // SELECT id, id_nota, DATE_FORMAT(tgl,\'%d-%m-%Y\') as tgl, kode_pelanggan, subtotal FROM penjualan
      db.query(
        `SELECT a.nama,b.id, b.kode_pelanggan, DATE_FORMAT(b.tgl,\'%d-%m-%Y\') as tgl,c.id as id_item, c.nota,c.kode_barang, d.nama as nama_barang FROM pelanggan a INNER JOIN penjualan b ON a.id_pelanggan = b.kode_pelanggan INNER JOIN item_penjualan c ON b.id_nota=c.nota INNER JOIN barang d ON c.kode_barang=d.kode WHERE b.id_nota='${nota}'`,
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
  getLastIdPenjualan: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT MAX(SUBSTRING(id_nota,6))+1 AS id_nota FROM penjualan`,
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
  addPenjualan: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO penjualan SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  editPenjualan: (setData) => {
    const id_nota = setData.id_nota
    delete setData.id_nota
    return new Promise((resolve, reject) => {
      db.query(`UPDATE penjualan SET ? WHERE id_nota='${id_nota}'`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  addItemPenjualan: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO item_penjualan SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteItemPenjualan: (nota) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM item_penjualan WHERE nota='${nota}'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  deletePenjualan: (nota) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM penjualan WHERE id_nota='${nota}'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};
