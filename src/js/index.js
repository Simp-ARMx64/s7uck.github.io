let socials = {
	telegram: {
		me: 211772602,
		stucklounge: -1001388295920,
		stucklings: -1001565929365,
		portal: -1001542175762,
		bot: '1861542114:AAFEySytSsmFuQ4BslQv22XfBh636O36eNs',
		api: 'https://api.telegram.org/bot'
	},
	github: {
		me: 71439748
	},
	youtube: 'UCVX9qM9QKKpQQ8PXSRWs_NA'
};

function telegramApiRequest(method, args, then =(data)=> {}) {
	let result = {};
	fetch(
	`${socials.telegram.api}${socials.telegram.bot}/${method}?${args.join('&')}`
	)
	.then( (response) => { return response.json() } )
	.then( (data) => {
		then(data);
		result = data;
		return result;
	});
};

telegramApiRequest(
	'getChatMemberCount',
	[`chat_id=${socials.telegram.stucklounge}`],
	then =(data)=> {
		socials.telegram[`subCount`] = data.result;

		let stuckloungeLink = $('nav.social a.telegram.stucklounge');
		stuckloungeLink.attr('subs', socials.telegram.subCount);
	}
);