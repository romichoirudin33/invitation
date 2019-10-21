var invites = [
{id: 'erika-putri', name: 'Erika Putri'},
{id: 'hilda-ts', name: 'Hilda T.S.'},
{id: 'rizqul', name: 'Rizqul'},
{id: 'tika-alif', name: 'Tika Alif'},
{id: 'leny-maria', name: 'Leny Maria'},
{id: 'shochibul', name: 'Shochibul'},
{id: 'dimas-dh', name: 'Dimas D.H.'},
{id: 'dimas-da', name: 'Dimas D.A.'},
{id: 'nur-aisyah', name: 'Nur Aisyah'},
{id: 'ali-mustofa', name: 'Ali Mustofa'},
{id: 'setya-ayu', name: 'Setya Ayu'}, 
{id: 'dhea', name: 'Dhea'},
{id: 'roni', name: 'Roni'},
{id: 'dewi', name: 'Dewi'},
{id: 'ratna', name: 'Ratna'},
{id: 'frida', name: 'Frida'},
{id: 'tria', name: 'tria'},
{id: 'diki', name: 'Diki'},
{id: 'eranimas', name: 'Eranimas'},
{id: 'venty', name: 'Venty'},
{id: 'reni', name: 'Reni'},
{id: 'achmad-nur', name: 'Achmad Nur'},
{id: 'putri-m', name: 'Putri M.'},
{id: 'santi-nur', name: 'Santi Nur'},
{id: 'tri-darmaji', name: 'Tri Darmaji'},
{id: 'reza', name: 'Reza'},
{id: 'martha', name: 'Martha'},
{id: 'candra-tw', name: 'Canda T.W'},
{id: 'ahmad-nazlan', name: 'Ahmad Nazlan'},
{id: 'andik', name: 'Andik'},
{id: 'andika', name: 'Andika'},
{id: 'krisna', name: 'Krisna'},
{id: 'aditya', name: 'Aditya'},
{id: 'yongki', name: 'Yongki'},
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