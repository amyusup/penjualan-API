const PenjualanModel = require("../models/penjualan");
const BarangModel = require("../models/barang");
const { response } = require("../helpers/response");

module.exports = {
  getPenjualan: async function (req, res) {
    try {
      const result = await PenjualanModel.getPenjualan();
      if (result) {
        response(res, 200, result);
      } else {
        response(res, 400, { message: "Penjualan tidak ditemukan" });
      }
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  getPenjualanByNota: async function (req, res) {
    try {
      const {nota} = req.params
      const result = await PenjualanModel.getPenjualanByNota(nota);
      if (result) {
        response(res, 200, result);
      } else {
        response(res, 400, { message: "Penjualan tidak ditemukan" });
      }
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  addPenjualan: async function (req, res) {
    try {
      const setData = req.body;
      // console.log(setData.arrBarang.length)
      const result_id = await PenjualanModel.getLastIdPenjualan();
      setData.id_nota = "NOTA_" + result_id[0].id_nota;
      setData.subtotal = 0
      for (let i = 0; i < setData.arrBarang.length; i++) {
        // console.log(setData.arrBarang[i].barang)
        const insert_item_penjualan = await PenjualanModel.addItemPenjualan({
          nota: setData.id_nota,
          kode_barang: setData.arrBarang[i].barang,
        });
        
        let harga_barang = await BarangModel.getHargaBarang(setData.arrBarang[i].barang);
        setData.subtotal = setData.subtotal+harga_barang[0].harga
        // console.log(setData.subtotal)
      }
      // const insert_item_penjualan2 = await PenjualanModel.addItemPenjualan({
      //   nota: setData.id_nota,
      //   kode_barang: setData.barang2,
      // });
      // const harga_barang1 = await BarangModel.getHargaBarang(setData.barang1);
      // const harga_barang2 = await BarangModel.getHargaBarang(setData.barang2);

      // setData.subtotal = harga_barang1[0].harga + harga_barang2[0].harga;
      const result = await PenjualanModel.addPenjualan({
        id_nota: setData.id_nota,
        kode_pelanggan: setData.pelanggan1,
        subtotal: setData.subtotal,
      });
      response(res, 200, { result: result, message: "Berhasil menambah data" });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Gagal menambah data" });
    }
  },
  editPenjualan: async function (req, res) {
    try {
      const setData = req.body;
      console.log(setData)
      setData.subtotal = 0
      const delete_item_penjualan = await PenjualanModel.deleteItemPenjualan(setData.id_nota);
      for (let i = 0; i < setData.arrBarang.length; i++) {
        // console.log(setData.arrBarang[i].barang)
        const insert_item_penjualan = await PenjualanModel.addItemPenjualan({
          nota: setData.id_nota,
          kode_barang: setData.arrBarang[i].barang,
        });
        
        let harga_barang = await BarangModel.getHargaBarang(setData.arrBarang[i].barang);
        setData.subtotal = setData.subtotal+harga_barang[0].harga
        // console.log(setData.subtotal)
      }
      // const insert_item_penjualan1 = await PenjualanModel.addItemPenjualan({
      //   nota: setData.id_nota,
      //   kode_barang: setData.barang1,
      // });
      // const insert_item_penjualan2 = await PenjualanModel.addItemPenjualan({
      //   nota: setData.id_nota,
      //   kode_barang: setData.barang2,
      // });
      // const harga_barang1 = await BarangModel.getHargaBarang(setData.barang1);
      // const harga_barang2 = await BarangModel.getHargaBarang(setData.barang2);

      delete setData.id_item
      // setData.subtotal = harga_barang1[0].harga + harga_barang2[0].harga;
      const result = await PenjualanModel.editPenjualan({
        id_nota: setData.id_nota,
        kode_pelanggan: setData.pelanggan1,
        subtotal: setData.subtotal,
      });
      response(res, 200, { result: result, message: "Berhasil mengubah data" });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Gagal mengubah data" });
    }
  },
  deletePenjualan: async function (req, res) {
    try {
      const {nota} = req.params
      const delete_item_penjualan = await PenjualanModel.deleteItemPenjualan(nota);
      const result = await PenjualanModel.deletePenjualan(nota)
      response(res, 200, { result: result, message: "Berhasil menghapus data" });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: error.message });
    }
  },
};
