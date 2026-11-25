// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
"https://bony-teaching.com/5TwUmQ",
"https://bony-teaching.com/gvQ47V",
"https://acidic-deal.com/2oI3b9",
"https://bony-teaching.com/r782t9",
"https://bony-teaching.com/uQ9XsN"
  ];

  // ==================== RANDOM HELPER ====================
  function CRRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  // ==================== TABUNDER ====================
  const JEDA_MINIMAL = 2000;
  var terakhirTrigger = 0;

  function bukaTabunder() {
    var sekarang = Date.now();

    if (sekarang - terakhirTrigger < JEDA_MINIMAL) {
      return;
    }

    terakhirTrigger = sekarang;

    var urlIklan = CRRandom(DAFTAR_URL);
    var tabBaru = window.open(urlIklan, "_blank");

    if (tabBaru) {
      setTimeout(function() {
        window.focus();
      }, 100);
    }
  }

  // ==================== HANDLER GABUNGAN ====================
  document.addEventListener("click", function(){

    // --- Popunder: tiap klik, URL random ---
    const url = CRRandom(DAFTAR_URL);
    const win = window.open(url, "_blank");

    if(win){
      win.blur();
      window.focus();
    }

    // --- Tabunder: jeda 2 detik, URL random ---
    bukaTabunder();

  }, true);

})();
