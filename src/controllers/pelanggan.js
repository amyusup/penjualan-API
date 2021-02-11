const PelangganModel = require("../models/pelanggan");
const { response } = require("../helpers/response");

module.exports = {
    getPelanggan: async function (req, res) {
      try {
        const result = await PelangganModel.getPelanggan();
        if (result) {
          response(res, 200, result);
        } else {
          response(res, 400, { message: "Pelanggan tidak ditemukan" });
        }
      } catch (error) {
        response(res, 500, { message: error.message });
      }
    },
    getPelangganById: async function (req, res) {
      try {
        const {id} = req.params
        const result = await PelangganModel.getPelangganById(id);
        if (result.length>0) {
          response(res, 200, result);
        } else {
          response(res, 400, { message: "Pelanggan tidak ditemukan" });
        }
      } catch (error) {
        response(res, 500, { message: error.message });
      }
    },
    addPelanggan: async function (req, res) {
      try {
        const setData = req.body;
        const result_id = await PelangganModel.getLastIdPelanggan();
        console.log(result_id)
        setData.id_pelanggan = "PELANGGAN_" + result_id[0].id_pelanggan
        console.log(setData.id_pelanggan)
        const result = await PelangganModel.addPelanggan(setData);
        response(res, 200, { result: result, message: "Berhasil mendaftarkan pelanggan" });
      } catch (error) {
        console.log(error)
        response(res, 500, { message: "Gagal mendaftarkan pelanggan" });
      }
    },
    editPelanggan: async function (req, res) {
      try {
        const setData = req.body;
        const result = await PelangganModel.editPelanggan(setData);
        response(res, 200, { result: result, message: "Berhasil mengubah data pelanggan" });
      } catch (error) {
        console.log(error)
        response(res, 500, { message: "Gagal mengubah data pelanggan" });
      }
    },
    deletePelanggan: async function (req, res) {
      try {
        const {id_pelanggan} = req.params;
        const result = await PelangganModel.deletePelanggan(id_pelanggan);
        response(res, 200, { result: result, message: "Berhasil menghapus data pelanggan" });
      } catch (error) {
        console.log(error)
        response(res, 500, { message: "Gagal menghapus data pelanggan" });
      }
    },
  };