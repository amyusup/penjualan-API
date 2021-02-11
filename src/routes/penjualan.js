const router = require("express").Router();
const PenjualanController = require("../controllers/penjualan");
router
.get("/", PenjualanController.getPenjualan)
.get("/:nota", PenjualanController.getPenjualanByNota)
.post("/", PenjualanController.addPenjualan)
.patch("/", PenjualanController.editPenjualan)
.delete("/:nota", PenjualanController.deletePenjualan)

module.exports = router;
