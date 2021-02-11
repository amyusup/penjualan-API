const BarangModel = require("../models/barang");
const { response } = require("../helpers/response");

module.exports = {
  getBarang: async function (req, res) {
    try {
      const result = await BarangModel.getBarang();
      if (result) {
        response(res, 200, result);
      } else {
        response(res, 400, { message: "Barang tidak ditemukan" });
      }
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  getBarangByKode: async function (req, res) {
    try {
      const { kode } = req.params;
      const result = await BarangModel.getBarangByKode(kode);
      if (result) {
        response(res, 200, result);
      } else {
        response(res, 400, { message: "Barang tidak ditemukan" });
      }
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  addBarang: async function (req, res) {
    try {
      const setData = req.body;
      const result_id = await BarangModel.getLastIdBarang();
      setData.kode = "BRG_" + result_id[0].kode;
      const result = await BarangModel.addBarang(setData);
      response(res, 200, {
        result: result,
        message: "Berhasil menambah data barang ",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Gagal menambah data barang " });
    }
  },
  editBarang: async function (req, res) {
    try {
      const setData = req.body;
      // const result_id = await BarangModel.getLastIdBarang();
      // setData.kode = "BRG_" + result_id[0].kode;
      const result = await BarangModel.editBarang(setData);
      response(res, 200, {
        result: result,
        message: "Berhasil mengubah data barang ",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Gagal mengubah data barang " });
    }
  },
  deleteBarang: async function (req, res) {
    try {
      const {kode} = req.params;
      const result = await BarangModel.deleteBarang(kode);
      response(res, 200, {
        result: result,
        message: "Berhasil menghapus data barang ",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Gagal menghapus data barang" });
    }
  },
};
