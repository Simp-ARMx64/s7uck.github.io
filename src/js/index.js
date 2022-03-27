window.location.hash = '#_home';

let socials = {
	telegram: {
		me: 211772602,
		stucklounge: -1001388295920,
		bot: '1861542114:AAFEySytSsmFuQ4BslQv22XfBh636O36eNs',
		api: 'https://api.telegram.org/bot'
	},
	github: {
		me: 71439748
	},
	youtube: 'UCVX9qM9QKKpQQ8PXSRWs_NA'
};

fetch(
`${socials.telegram.api}${socials.telegram.bot}/getChatMemberCount?chat_id=${socials.telegram.stucklounge}`
)
.then( (response) => { return response.json() } )
.then( (data) => {
	let subCount = data.result;
	socials.telegram[`subCount`] = subCount;

	let stuckloungeLink = $('nav.social a.telegram.stucklounge');
	stuckloungeLink.attr('subs', socials.telegram.subCount ?? '++');

	return subCount;
});
