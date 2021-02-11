const router = require("express").Router();
const barangRoutes = require("./routes/barang");
const pelangganRoutes = require("./routes/pelanggan");
const penjualanRoutes = require("./routes/penjualan");
router.use("/barang", barangRoutes);
router.use("/pelanggan", pelangganRoutes);
router.use("/penjualan", penjualanRoutes);
module.exports = router;
