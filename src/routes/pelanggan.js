const router = require("express").Router();
const PelangganController = require("../controllers/pelanggan");
router
.get("/", PelangganController.getPelanggan)
.get("/:id", PelangganController.getPelangganById)
.post("/", PelangganController.addPelanggan)
.patch("/", PelangganController.editPelanggan)
.delete("/:id_pelanggan", PelangganController.deletePelanggan)

module.exports = router;
