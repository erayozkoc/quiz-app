//Question Constructor
function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri =cevapSecenekleri;
    this.dogruCevap=dogruCevap;
}
Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap ===this.dogruCevap;
}


//Question Lists
let art = [
    new Soru("İnce Memed adlı eseri kim yazmıştır ?",{a:"Ahmet Hamdi Tanpınar",b:"Orhan Kemal",c:"Sait Faik Abasıyanık",d:"Yaşar Kemal"},"d"),
    new Soru("Oscar ödülü alan ilk kadın yönetmen kimdir ?",{a:"Kathryn Bigelow",b:"Nora Ephron",c:"Vera Chytilova",d:"Tomris Giritlioğlu"},"a"),
    new Soru("Hababam Sınıfı kimin eseridir ?",{a:"Haldun Taner",b:"Aziz Nesin",c:"Reşat Nuri Güntekin",d:"Rıfat Ilgaz"},"d"),
    new Soru("Romen rakamlarında hangi sayı yoktur ?",{a:"100",b:"10",c:"0",d:"50"},"c"),
    new Soru("Hangi ülkenin iki tane başkenti vardır??",{a:"Senegal",b:"Venezuela",c:"Kamboçya",d:"Güney Afrika"},"d"),
 
];
let sport = [
    new Soru("Bir basketbol potasının inç cinsinden çapı nedir ?",{a:"14",b:"16",c:"12",d:"18"},"d"),
    new Soru("Aşağıdaki atletizm yarışmalarından hangiside kulvar değiştirmek yasaktır ?",{a:"400 m yarışı",b:"3000 m yarışı",c:" 5000 m yarışı",d:"Maraton"},"a"),
    new Soru("Atletizmde hangisi hatalı çıkıştır ?",{a:"Fodepar",b:"Plank",c:"Runout",d:"Alçak çıkış"},"a"),
    new Soru(" Voleybol oyununda her takımın bir sette kaç oyuncu değiştirme hakkı vardır ?",{a:"3",b:"4",c:"5",d:"6"},"d"),
    new Soru("Türkiye jimnastik federasyonu hangi yılda kurulmuştur ?",{a:"1936",b:" 1957",c:"1980",d:"1990"},"b"),
 
];
let science = [
    new Soru("Doğru akımın temsilcisi olarak bilinen ünlü bilim adamı kimdir ?",{a:"Nikola Tesla",b:"Andre Amper",c:"Thomas Edison",d:"Hiçbiri"},"c"),
    new Soru("Dünyada ilk defa alternatif akım patenti alan şirketin kurucusu, mucid ve bilim adamı kimdir  ?",{a:"Nikola Tesla",b:"Thomas Edison",c:" George Westinghouse",d:"Werner von Siemens"},"c"),
    new Soru("Kuantum sabiti hangi bilim adamının ismiyle alınır  ?",{a:"Max Planck",b:"Albert Einstein",c:"Schrödinger",d:"Louis de Broglie"},"a"),
    new Soru(" İlk elektrikli süpürge kim tarafından icat edilmiştir? ?",{a:"Robert Bosch",b:"Ernst von Siemens",c:"Hubert Booth",d:"Gerbert"},"c"),
    new Soru("Radyo ilk defa hangi bilim adamı tarafından icat edilmiştir?",{a:"Guglielm Marcon",b:" Nikola Tesla",c:"Thomas Edison",d:"George Westinghouse"},"a"),

]

//Quiz Constructor
function Quiz(sorular){
    this.sorular =sorular;
    this.soruIndex=0;
    this.dogruCevapSayisi = 0;
}
Quiz.prototype.soruGetir = function (){
 return this.sorular[this.soruIndex]
}


