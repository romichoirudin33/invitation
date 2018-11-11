var invites = [
{id: 'kampus-akademik', name: 'Bag. Akademik'},
{id: 'kampus-adum', name: 'Bag. Adum'},
{id: 'kampus-dev', name: 'Bag. Developer'},
{id: 'kampus-prodi', name: 'Bag. Program Studi'},
{id: 'kampus-lab', name: 'Bag. Laboratorium Komputer'},
{id: 'kampus-keuangan', name: 'Bag. Keuangan'},
{id: 'kampus-all', name: 'Seluruh rekan STMIK'},
{id: 'kampus-perpus', name: 'Bag. Perpustakaan'},
{id: 'kampus-ksr', name: 'Semua rekan KSR'},
{id: 'kampus-dosen', name: 'Seluruh dosen STMIK'},
{id: 'kampus-d3mi', name: 'Semua rekan D3MI'},
{id: 'kampus-d3ti', name: 'Semua rekan D3TI'},
{id: 'kampus-kelas', name: 'Semuan anggota C Chat'},
{id: 'kk-hani', name: 'Kak Hani'},
{id: 'david', name: 'David fernanda P.'},
{id: 'findi', name: 'T. Findi Oktaviani'},
{id: 'dian-dorok', name: 'Family Mbk Dian'},
{id: 'glad', name: 'Gladys dan Ihsan'},
{id: 'papah-mamah', name: 'Papah dan Mamah'},
{id: 'ela', name: 'Ela dayat lover'},
{id: 'rekan-futsal', name: 'Semua rekan main futsal'},
{id: 'pasukan', name: 'Pasukan Gorengan'},
{id: 'ekstensi-14', name: 'Ekstensi Angkatan 14'},
{id: 'ekstensi-15', name: 'Ekstensi Angkatan 15'},
{id: 'ekstensi-17', name: 'Ekstensi Angkatan 17'},
{id: 'kdp', name: 'Seluruh Anggota KDP++'},
{id: 'yunus', name: 'M. Yunus, M.Kom'},
{id: 'jian', name: 'Jian Budiarto, M.Eng'},
{id: 'husain', name: 'Husain, M.Kom'},
{id: 'd3mi-15', name: 'D3MI angkatan 15'},
{id: 'best-friends', name: 'Best Friends'},
{id: 'best-friends', name: 'Rena & Reni'},
{id: 'geng-cerewet', name: 'Lia, Kiky, Ika, Dewi'},
{id: 'faisal', name: 'Faisal'},
{id: 'izzaq', name: 'Izzaq'},
{id: 'dkv-komang', name: 'Komang Tri Handayani'},
{id: 'dkv-nia', name: 'Nia DKV'},
{id: 'dkv-fikri', name: 'Fikri DKV'},
{id: 'dkv-rizal', name: 'Rizal DKV'},
{id: 'dkv-imam', name: 'imam DKV'},
];

var app = new Vue({
	el: '#app',
	data: {
		open: false,
		invites: invites
	},
	methods: {
		buka: function () {
			this.open = !this.open;
		}
	},
	computed: {
		code: function() {
			var uri = window.location.search.substring(1);
			return uri.split('=')[1];
		},
		invite: function() {
			var self = this;
			var code = this.code;
			return self.invites.find(function (i) {
				return i.id == code
			})
		}
	},
});