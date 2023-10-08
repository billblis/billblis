
import data from "../json/proposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";
// console.log(`${data.article.judulProposal}`)
setInner("judulProposal", data.proposal.judulProposal);

//deskripsi aplikasi
setInner("deskripsi", `
<h2>Deskripsi Aplikasi</h2>
<p>${data.deskripsi.juduldeskripsi}</p>
<p>${data.deskripsi.deskripsi1}</p>
<p>${data.deskripsi.deskripsi2}</p>
`);

//Pengantar
setInner("pengantarProposal", `
<h2>Pengantar</h2>
<p>${data.proposal.pengantarProposal}</p>
`);

//abstrak
setInner("abstrak", `
<h2>Abstrak</h2>
<p>${data.proposal.abstrak1}</p>
<p>${data.proposal.abstrak2}</p>
`);

//Latar Belakang
setInner("latarBelakangProposal", `
<h2>Latar Belakang</h2>
<p>${data.proposal.latarBelakang1}</p>
<p>${data.proposal.latarBelakang2}</p>
<p>${data.proposal.latarBelakang3}</p>
`);

//Kegunaan Website
let listKegunaanWebsite = data.proposal.kegunaanWebsite2.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("kegunaanWebsite", `
<h2>Kegunaan Website</h2>
<p>${data.proposal.kegunaanWebsite1}</p>
<ul>${listKegunaanWebsite.join("")}</ul>
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