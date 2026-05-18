import egonsMarioKartPoster from '../assets/posters/egons-mario-kart.jpeg';
import haus3MeetingSs26Poster from '../assets/posters/haus-3-meeting-ss26.jpeg';
import howToStustaPoster from '../assets/posters/how-to-stusta.jpeg';
import mkhGapCrawlPoster from '../assets/posters/mkh-gap-crawl.jpeg';
import newManagerHiringKioskPoster from '../assets/posters/new-manager-hiring-kiosk.jpeg';
import scavengerHuntPoster from '../assets/posters/scavenger-hunt.jpeg';
import stustaculumPoster from '../assets/posters/stustaculum.jpeg';
import ghrEnvironmentalOfficerHiring from '../assets/posters/ghr-environmental-officer-hiring.jpg';

export type AnnouncementStat = {
	label: string;
	value: string;
	note: string;
};

export type PosterEvent = {
	id: string;
	title: string;
	tag: string;
	summary: string;
	date: string;
	asset: { src: string };
	when?: string;
	featuredNote?: string;
	manualOrder: number;
	theme?: 'warm' | 'sage' | 'sand' | 'mint';
};

export type TextAnnouncement = {
	title: string;
	body: string;
	meta: string;
};

export type KioskUpdate = {
	title: string;
	price: string;
	detail: string;
};

export const posterEvents: PosterEvent[] = [
	{
		id: 'ghr-environmental-officer-hiring',
		title: 'Environmental Officer Hiring',
		tag: 'GHR',
		summary:
			'Protecting the environment means securing the future. 🌎🌱 Are you ready for this responsibility? 👍🏻 Then apply now! 💻 Send your application by 25.06.2026 to orgtutor@stusta.de',
		date: '29 June 2026',
		asset: ghrEnvironmentalOfficerHiring,
		manualOrder: 8,
	},
	{
		id: 'stustaculum',
		title: 'StuStaculum',
		tag: 'Event',
		summary:
			'Es ist soweit! Ihr könnt euch ab jetzt für Helferschichten am StuStaCulum eintragen und euch damit freien Eintritt, Getränkemarken, ein exclusives Helfershirt und eine tolle Zeit während eurer Schicht sichern. Unter helfen.stustaculum.de findet ihr eine Übersicht und könnt euch anmelden. Die Schichten sind begrenzt, also wartet nicht zu lange 🎼🍻👯',
		date: '03 - 06 June 2026',
		asset: stustaculumPoster,
		manualOrder: 7,
	},
	{
		id: 'haus-3-meeting-ss26',
		title: 'Haus 3 Meeting SS26',
		tag: 'House',
		summary: 'The recurring house meeting notice for the summer semester 26.',
		date: '05 June 2026',
		asset: haus3MeetingSs26Poster,
		manualOrder: 6,
	},
	{
		id: 'new-manager-hiring-kiosk',
		title: 'New Manager Hiring',
		tag: 'Kiosk',
		summary: 'We are looking for a new manager for Kultur Kiosk Siggi',
		date: 'Until 08 May 2026',
		asset: newManagerHiringKioskPoster,
		manualOrder: 5,
	},
	{
		id: 'mkh-gap-crawl',
		title: 'MKH Gap Crawl',
		tag: 'Event',
		summary:
			"For everyone who doesn't know about GAP-Crawl: It's a party in MKH where every floor organizes a drinking game on their floor. We will start in 8th floor and work our way down, playing a drinking game on every floor. We'll finish off in Kade for a big afterparty🥳🥳 Every game can also be played with non-alcoholic drinks of course for everybody who doesn't drink alcohol! So task for every floor: Think about an exciting game to be played in your floor by the whole house🍾🥳! See you there everybody🫡🍻!",
		date: '24 April 2026',
		asset: mkhGapCrawlPoster,
		manualOrder: 4,
	},
	{
		id: 'scavenger-hunt',
		title: 'Scavenger Hunt',
		tag: 'Event',
		summary:
			'🔑 Ready to unlock STUSTA? Join our Scavenger Hunt on 16th April at 4:30 PM and get ready to explore, laugh, and maybe get a little lost (on purpose 👀). Bring your curiosity, your friends, and your detective skills… because clues won’t solve themselves 😉',
		date: '16 April 2026',
		asset: scavengerHuntPoster,
		manualOrder: 3,
	},
	{
		id: 'egons-mario-kart',
		title: "Egon's Mario Kart",
		tag: 'Egon',
		summary:
			"Jump behind the wheel — in Mario Kart, of course 🚗💨 Race your friends, enjoy some drinks and prove who's the real champion 🏁 Fun, competition & good vibes guaranteed — see you tonight! 🎉",
		date: '14 April 2026',
		asset: egonsMarioKartPoster,
		manualOrder: 2,
	},
	{
		id: 'how-to-stusta',
		title: 'How to StuSta',
		tag: 'Guide',
		summary:
			'The event where you find out everything about StuSta and get to know your neighbours🤗',
		date: '10 April 2026',
		asset: howToStustaPoster,
		manualOrder: 1,
	},
];

export const textAnnouncements: TextAnnouncement[] = [
	{
		title: 'Content Accuracy Notice',
		body: 'Want to help with the content on this board? Contact the house speaker or submit a PR (see contact page for details).',
		meta: 'Important',
	},
	{
		title: 'Kiosk Opening Hours',
		body: 'Open daily from 19:00 to 21:00. Check the WhatsApp group for updates.',
		meta: 'Kiosk',
	},
	{
		title: 'Brotladen Opening Hours',
		body: 'Open Mon-Fri: 07:00-15:00, Sat-Sun: 08:00-15:00. Check the WhatsApp group for updates.',
		meta: 'Brotladen',
	},
	{
		title: 'TribüHne Opening Hours',
		body: 'Open daily from 15:00 to 19:00. Check the WhatsApp group for updates.',
		meta: 'TribüHne',
	},
	{
		title: 'NIK Security',
		body: 'If you have any security concerns (e.g., suspicious individuals), you can contact the NIK security team at +49 172 5718161.',
		meta: 'Security',
	},
];

export const kioskUpdates: KioskUpdate[] = [
	{
		title: 'Magic Drink',
		price: '0 EUR',
		detail: 'A non-existent drink, limited edition in my mind.',
	},
];
