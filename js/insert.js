
import data from "../json/proposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";
// console.log(`${data.article.judulProposal}`)
setInner("judulProposal", data.proposal.judulProposal);

 //Base
 setInner('basetitle', data.home.title);
 setInner('basedesc', data.home.description);

 //Cover
 setInner("judulCover", data.cover.judulCover);
 setInner("proyek", data.cover.proyekProposal);
 setInner("tujuan", `
     <br> ${data.cover.tujuan[0]}
     <br> ${data.cover.tujuan[1]}
     <br> ${data.cover.tujuan[2]}
 `);
 setInner("namateam", `
     <p>${data.team[0].name}</p>
     <p>${data.team[1].name}</p>
 `)
 setInner("prodi", data.cover.prodi);
 setInner("univ", data.cover.univ);
 setInner("kota", data.cover.kota);
 setInner("tahun", data.cover.tahun);

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

 //Team
 setInner("name2", data.team[0].name);
 setInner("email2", data.team[0].email);
 setInner("npm2", data.team[0].npm);
 setInner("name1", data.team[1].name);
 setInner("email1", data.team[1].email);
 setInner("npm1", data.team[1].npm);
 setInner("photo1", `<img src="${data.team[1].photo}" alt="image" width="112" height="28">`);
 setInner("photo2", `<img src="${data.team[0].photo}" alt="image" width="112" height="28">`);