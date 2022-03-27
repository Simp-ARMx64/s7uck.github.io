window.location.hash = '#_home';

let telegramSubCount = (chat, api, token) => {
	let resource = `${api}${token}/getChatMemberCount?chat_id=${chat}`;
	let response = fetch(resource)
	               .then((response) => {
	               		return response.json();
	               })
								 .then((data) => {
		             		result = JSON.parse(data).result ?? -1;
	               });
	console.log(response);
}

const socials = {
	telegram: {
		me: 211772602,
		stucklounge: -1001388295920,
		bot: '1861542114:AAFEySytSsmFuQ4BslQv22XfBh636O36eNs',
		api: 'https://api.telegram.org/bot',
		subCount: telegramSubCount(this.stucklounge, this.api, this.bot)
	},
	github: {
		me: 71439748
	},
	youtube: 'UCVX9qM9QKKpQQ8PXSRWs_NA'
}

let stuckloungeLink = $('nav.social a.telegram.stucklounge');
stuckloungeLink.attr('subs', socials.telegram.subCount);