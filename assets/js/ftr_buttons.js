// 2022 copyright - P33t.net
const proc = document.getElementById('proc');
const kontakt = document.getElementById('kontakt');

proc.addEventListener('click', function() {
    swal("Proč tento web?", `
    Tento web vznikl jako "památník" starého lsrp.cz serveru. Bohužel doména expirovala a místo toho aby to koupil další kid server, jsem se rozhodl doménu zakoupit já.
    `);
    
}
);

kontakt.addEventListener('click', function() {
    swal("Kontakt", `
    Discord: P33t#9999
    Email: p33tcz@gmail.com nebo p33tdev@pm.me
    Web: https://p33t.net
    Můj tebex store: https://fivem.p33t.shop
    `);
   return; 
}
);
