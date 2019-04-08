var invites = [
{id: 'tante-vira', name: 'Tante Vira & Keluarga'},
{id: 'tante-mike', name: 'Tante Mike & Keluarga'},
{id: 'david-family', name: 'Keluarga Besar David Fernanda'},
{id: 'bedeng', name: 'Bayu Sahara'},
{id: 'deasty', name: 'Deasty'},
{id: 'mamble', name: 'Mamble'},
{id: 'fico', name: 'Fico Fahmi'},
{id: 'mahmud', name: 'Mahmud'},
{id: 'annisa', name: 'Annisa Eky'},
{id: 'anggun', name: 'Anggun'},
{id: 'riris', name: 'Riris Roby'}, 
{id: 'resti', name: 'Resti Febriana'},
{id: 'fyma', name: 'Fyma'},
{id: 'dadang', name: 'Dadang Kuswoyo'},
{id: 'jeng', name: 'Erlangga (Jenggot)'},
{id: 'nindya', name: 'Nindya'},
{id: 'claudia', name: 'Claudia'},
{id: 'memed', name: 'Memed'},
{id: 'lukies', name: 'Lukies Dovin'},
{id: 'rilla', name: 'Wahyu Karilla & Herwin'},
{id: 'usida', name: 'Alumni USIDA'},
{id: 'tyok', name: 'Tyok'},
{id: 'maji', name: 'Tri Darmaji'},
{id: 'dwi', name: 'Dwi Aprilianto'},
{id: 'reza', name: 'Reza (Pare)'},
{id: 'yongki', name: 'Yongki Setiawan'},
{id: 'reni', name: 'Reni Widyaningtyas'},
{id: 'bunga', name: 'Bunga Pengukir Ayunani'},
{id: 'zilly', name: 'Zilly (Pare)'},
{id: 'raga', name: 'Raga Mahadika (Pare)'},
{id: 'david', name: 'David Hermawan (Pare)'},
{id: 'arpero', name: 'Alumni ARPERO'},
{id: 'kodim', name: 'Anggota KODIM'},
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