alert("Aplikasi Tiket");

const nama = prompt("Masukkan Nama Anda:");
const umur = prompt("Masukkan Umur Anda:");

if (umur >= 13) {
    alert("Anda boleh masuk studio");

const studio = prompt("Silahkan pilih studio \n A: studio A \n B: studio B \n C: studio C");
        if (studio === "A" || studio === "B" || studio === "C") {
            alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);} 
        else {
        alert("Studio tidak valid");}

} else {
    alert("Anda tidak boleh masuk studio");
}
