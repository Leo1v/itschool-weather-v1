const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const albaiulia = document.querySelector(".dropdown-menu .albaiulia");
const arad = document.querySelector(".dropdown-menu .arad");
const pitesti = document.querySelector(".dropdown-menu .pitesti");
const bacau = document.querySelector(".dropdown-menu .bacau");
const bistrita = document.querySelector(".dropdown-menu .bistrita");
const botosani = document.querySelector(".dropdown-menu .botosani");
const braila = document.querySelector(".dropdown-menu .braila");
const brasov = document.querySelector(".dropdown-menu .brasov");
const buzau = document.querySelector(".dropdown-menu .buzau");
const calarasi = document.querySelector(".dropdown-menu .calarasi");
const resita = document.querySelector(".dropdown-menu .resita");
const clujnapoca = document.querySelector(".dropdown-menu .clujnapoca");
const constanta = document.querySelector(".dropdown-menu .constanta");
const sfantugheorghe = document.querySelector(".dropdown-menu .sfantugheorghe");
const targoviste = document.querySelector(".dropdown-menu .targoviste");
const craiova = document.querySelector(".dropdown-menu .craiova");
const galati = document.querySelector(".dropdown-menu .galati");
const giurgiu = document.querySelector(".dropdown-menu .giurgiu");
const targujiu = document.querySelector(".dropdown-menu .targujiu");
const miercureaciuc = document.querySelector(".dropdown-menu .miercureaciuc");
const deva = document.querySelector(".dropdown-menu .deva");
const slobozia = document.querySelector(".dropdown-menu .slobozia");
const iasi = document.querySelector(".dropdown-menu .iasi");
const baiamare = document.querySelector(".dropdown-menu .baiamare");
const drobeta = document.querySelector(".dropdown-menu .drobeta");
const targumures = document.querySelector(".dropdown-menu .targumures");
const piatraneamt = document.querySelector(".dropdown-menu .piatraneamt");
const slatina = document.querySelector(".dropdown-menu .slatina");
const ploiesti = document.querySelector(".dropdown-menu .ploiesti");
const zalau = document.querySelector(".dropdown-menu .zalau");
const satumare = document.querySelector(".dropdown-menu .satumare");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const suceava = document.querySelector(".dropdown-menu .suceava");
const alexandria = document.querySelector(".dropdown-menu .alexandria");
const tulcea = document.querySelector(".dropdown-menu .tulcea");
const ramnicuvalcea = document.querySelector(".dropdown-menu .ramnicuvalcea");
const vaslui = document.querySelector(".dropdown-menu .vaslui");
const focsani = document.querySelector(".dropdown-menu .focsani");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);

  updateCurrentCity(city);

  displayCurrentWeather(city);
  displayForecast(city);
}

bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
albaiulia.addEventListener("click", function () {
  updateWeather("Alba Iulia");
});
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
pitesti.addEventListener("click", function () {
  updateWeather("Pitești");
});
bacau.addEventListener("click", function () {
  updateWeather("Bacău");
});
bistrita.addEventListener("click", function () {
  updateWeather("Bistrița");
});
botosani.addEventListener("click", function () {
  updateWeather("Botoșani");
});
braila.addEventListener("click", function () {
  updateWeather("Brăila");
});
brasov.addEventListener("click", function () {
  updateWeather("Brașov");
});
buzau.addEventListener("click", function () {
  updateWeather("Buzău");
});
calarasi.addEventListener("click", function () {
  updateWeather("Călărași");
});
resita.addEventListener("click", function () {
  updateWeather("Reșița");
});
clujnapoca.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
constanta.addEventListener("click", function () {
  updateWeather("Constanța");
});
sfantugheorghe.addEventListener("click", function () {
  updateWeather("Sfântu Gheorghe");
});
targoviste.addEventListener("click", function () {
  updateWeather("Târgoviște");
});
craiova.addEventListener("click", function () {
  updateWeather("Craiova");
});
galati.addEventListener("click", function () {
  updateWeather("Galați");
});
giurgiu.addEventListener("click", function () {
  updateWeather("Giurgiu");
});
targujiu.addEventListener("click", function () {
  updateWeather("Târgu Jiu");
});
miercureaciuc.addEventListener("click", function () {
  updateWeather("Miercurea Ciuc");
});
deva.addEventListener("click", function () {
  updateWeather("Deva");
});
slobozia.addEventListener("click", function () {
  updateWeather("Slobozia");
});
iasi.addEventListener("click", function () {
  updateWeather("Iași");
});
baiamare.addEventListener("click", function () {
  updateWeather("Baia Mare");
});
drobeta.addEventListener("click", function () {
  updateWeather("Drobeta Turnu-Severin");
});
targumures.addEventListener("click", function () {
  updateWeather("Târgu Mureș");
});
piatraneamt.addEventListener("click", function () {
  updateWeather("Piatra Neamț");
});
slatina.addEventListener("click", function () {
  updateWeather("Slatina");
});
ploiesti.addEventListener("click", function () {
  updateWeather("Ploiești");
});
zalau.addEventListener("click", function () {
  updateWeather("Zalău");
});
satumare.addEventListener("click", function () {
  updateWeather("Satu-Mare");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
suceava.addEventListener("click", function () {
  updateWeather("Suceava");
});
alexandria.addEventListener("click", function () {
  updateWeather("Alexandria");
});
tulcea.addEventListener("click", function () {
  updateWeather("Tulcea");
});
ramnicuvalcea.addEventListener("click", function () {
  updateWeather("Râmnicu Vâlcea");
});
vaslui.addEventListener("click", function () {
  updateWeather("Vaslui");
});
focsani.addEventListener("click", function () {
  updateWeather("Focșani");
});
