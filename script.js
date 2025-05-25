
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Mangu', 'Fourtwnty', '4M', '8M'],
    ['Slalu Ada di Nadi', 'B.C.L', '1.5M', '2.3M'],
    ['Lesung Pipi', 'Raim LaOde', '2.4M', '5.3M'],
    ['Alexandra', 'Reality Club', '7.3M', '9.6M'],
    ['Yellow Ledbetter', 'Pearl Jam', '7M', '8.5M'],
    ['With You', 'Linkin Park', '6.7M', '8M',],
    ['Enter Sandman', 'Metallica', '9.5M', '10M'],
    ['About You', 'The 1975', '12.4M', '13M'],

    
];

const container = document.getElementById('container');
var currentAudio = null;
var currentSongIndex = -1;
var progressInterval = null; 
var isDragging = false; 


function buatTemplateLagu(judul, penyanyi, likes, played) {
    const laguDiv = document.createElement('div');
    laguDiv.classList.add('lagu');

    laguDiv.innerHTML = `
        <h2>${judul}</h2>
        <small>
            <i>${penyanyi}</i>
        </small>
        <img src="img/${judul}.jpg" alt="${judul}"> 
        <div class="bawah">
            <div class="kanan"><i class="fa-regular fa-heart" style="color:rgb(77, 77, 77);"></i> ${likes}</div>
            <div class="kiri"><i class="fa-regular fa-circle-play" style="color:rgb(77, 77, 77);"></i> ${played}</div>
        </div>
    `;

    return laguDiv;
}

for (let i = 0; i < lagu.length; i++) {
    const judul_lagu = lagu[i][0];
    const penyanyi = lagu[i][1];
    const likes_lagu = lagu[i][2];
    const played_lagu = lagu[i][3];

    const templateLagu = buatTemplateLagu(judul_lagu, penyanyi, likes_lagu, played_lagu);
    container.appendChild(templateLagu);
}
