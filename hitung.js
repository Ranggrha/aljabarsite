function hitungTurunan() {
    const fungsi = document.getElementById("fungsi").value;
    try {
        // Menggunakan math.js untuk menghitung turunan
        const hasil = math.derivative(fungsi, 'x').toString();
        document.getElementById("hasil").innerText = hasil;
    } catch (error) {
        document.getElementById("hasil").innerText = "Terjadi kesalahan: " + error.message;
    }
}