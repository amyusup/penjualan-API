const router = require("express").Router();
const BarangController = require("../controllers/Barang");
router
.get("/", BarangController.getBarang)
.get("/:kode", BarangController.getBarangByKode)
.post("/", BarangController.addBarang)
.patch("/", BarangController.editBarang)
.delete("/:kode", BarangController.deleteBarang)

module.exports = router;
