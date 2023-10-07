
import data from "../json/proposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";
// console.log(`${data.article.judulProposal}`)
setInner("judulProposal", data.proposal.judulProposal);

//Pengantar
setInner("pengantarProposal", `
<h2>Pengantar</h2>
<p>${data.proposal.pengantarProposal}</p>
`);

//Latar Belakang
let listLatarBelakang = data.proposal.latarBelakang4.map((item, index) => {
    return `<li>${item}</li>`;
});
setInner("latarBelakangProposal", `
<h2>Latar Belakang</h2>
<p>${data.proposal.latarBelakang1}</p>
<p>${data.proposal.latarBelakang2}</p>
<p>${data.proposal.latarBelakang3}</p>
<ul>${listLatarBelakang.join("")}</ul>
<p>${data.proposal.latarBelakang5}</p>
`);

//Deskripsi Website
let listDeskripsiWebsite = data.proposal.deskripsiWebsite.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("deskripsiWebsite", `
<h2>Deskripsi Website</h2>
<ul>${listDeskripsiWebsite.join("")}</ul>
`);

//DesaindanFungsionalitas
let listDesaindanFungsionalitas = data.proposal.DesaindanFungsionalitasList.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("desaindanFungsionalitas", `
<h2>Desain dan Fungsionalitas</h2>
<ul>${listDesaindanFungsionalitas.join("")}</ul>
`);

//Pemasaran
setInner("pemasaran", `
<h2>Pemasaran</h2>
<p>${data.proposal.Pemasaran}</p>
<p>${data.proposal.Pemasaran2}</p>
<p>${data.proposal.Pemasaran3}</p>
`);

//waktuPelaksanaan
setInner("waktuPelaksanaan", `
<h2>Waktu Pengerjaan</h2>
<p>${data.proposal.waktuPelaksanaan}</p>
`);

//Kesimpulan
setInner("kesimpulan", `
<h2>Kesimpulan</h2>
<p>${data.proposal.kesimpulan}</p>
<p>${data.proposal.kesimpulan2}</p>
<p>${data.proposal.kesimpulan3}</p>
`);