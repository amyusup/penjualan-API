-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Feb 2021 pada 08.25
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_penjualan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `barang`
--

CREATE TABLE `barang` (
  `kode` varchar(100) NOT NULL,
  `nama` varchar(225) DEFAULT NULL,
  `kategori` varchar(225) DEFAULT NULL,
  `harga` int(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `barang`
--

INSERT INTO `barang` (`kode`, `nama`, `kategori`, `harga`) VALUES
('BRG_1', 'PEN', 'ATK', 15000),
('BRG_2', 'PENSIL', 'ATK', 10000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `item_penjualan`
--

CREATE TABLE `item_penjualan` (
  `id` int(100) NOT NULL,
  `nota` varchar(100) DEFAULT NULL,
  `kode_barang` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `item_penjualan`
--

INSERT INTO `item_penjualan` (`id`, `nota`, `kode_barang`) VALUES
(7, 'NOTA_3', 'BRG_1'),
(8, 'NOTA_3', 'BRG_2'),
(9, 'NOTA_4', 'BRG_1'),
(10, 'NOTA_4', 'BRG_2'),
(11, 'NOTA_5', 'BRG_2'),
(12, 'NOTA_5', 'BRG_2'),
(15, 'NOTA_7', 'BRG_1'),
(26, 'NOTA_2', 'BRG_2'),
(27, 'NOTA_2', 'BRG_1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id_pelanggan` varchar(100) NOT NULL,
  `nama` varchar(225) DEFAULT NULL,
  `domisili` varchar(225) DEFAULT NULL,
  `jenis_kelamin` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pelanggan`
--

INSERT INTO `pelanggan` (`id_pelanggan`, `nama`, `domisili`, `jenis_kelamin`) VALUES
('PELANGGAN_1', 'ANDI', 'JAK-UT', 'PRIA'),
('PELANGGAN_2', 'BUDI', 'JAK-BAR', 'PRIA'),
('PELANGGAN_3', 'JOHAN', 'JAK-SEL', 'PRIA'),
('PELANGGAN_4', 'SINTHA', 'JAK-TIM', 'WANITA'),
('PELANGGAN_5', 'ANTO', 'JAK-UT', 'PRIA'),
('PELANGGAN_6', 'BUJANG', 'JAK-BAR', 'PRIA');

-- --------------------------------------------------------

--
-- Struktur dari tabel `penjualan`
--

CREATE TABLE `penjualan` (
  `id` int(100) NOT NULL,
  `id_nota` varchar(100) DEFAULT NULL,
  `tgl` date DEFAULT current_timestamp(),
  `kode_pelanggan` varchar(100) DEFAULT NULL,
  `subtotal` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `penjualan`
--

INSERT INTO `penjualan` (`id`, `id_nota`, `tgl`, `kode_pelanggan`, `subtotal`) VALUES
(2, 'NOTA_2', '2021-02-10', 'PELANGGAN_2', 25000),
(3, 'NOTA_3', '2021-02-10', 'PELANGGAN_2', 25000),
(4, 'NOTA_4', '2021-02-10', 'PELANGGAN_1', 25000),
(5, 'NOTA_5', '2021-02-10', 'PELANGGAN_1', 25000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `item_penjualan`
--
ALTER TABLE `item_penjualan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kode_barang` (`kode_barang`);

--
-- Indeks untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- Indeks untuk tabel `penjualan`
--
ALTER TABLE `penjualan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kode_pelanggan` (`kode_pelanggan`),
  ADD KEY `id_nota` (`id_nota`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `item_penjualan`
--
ALTER TABLE `item_penjualan`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `penjualan`
--
ALTER TABLE `penjualan`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
