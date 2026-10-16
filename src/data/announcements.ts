import egonsMarioKartPoster from '../assets/posters/egons-mario-kart.jpeg';
import haus3MeetingSs26Poster from '../assets/posters/haus-3-meeting-ss26.jpeg';
import howToStustaPoster from '../assets/posters/how-to-stusta.jpeg';
import mkhGapCrawlPoster from '../assets/posters/mkh-gap-crawl.jpeg';
import newManagerHiringKioskPoster from '../assets/posters/new-manager-hiring-kiosk.jpeg';
import scavengerHuntPoster from '../assets/posters/scavenger-hunt.jpeg';
import stustaculumPoster from '../assets/posters/stustaculum.jpeg';
import environmentalOfficerHiring from '../assets/posters/environmental-officer-hiring.jpg';
import finanzvorstandHiring from '../assets/posters/finanzvorstand-hiring.jpg';
import teamvorstaendeHiring from '../assets/posters/teamvorstaende-hiring.jpg';
import heimratsversammlung from '../assets/posters/heimratsversammlung.png';
import delegateRecruitment from '../assets/posters/House-3-Delegate-Election-Poster.png';
import beiratRecruitment from '../assets/posters/House-3-Beirat-Recruitment-Poster.png';
import hvvws2627 from '../assets/posters/HVV-WS2627-Announcement.jpg';

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
		id: 'house-general-assembly-ws26',
		title: 'House General Assembly WS26',
		tag: 'House',
		summary:
			'House meeting on 20.10 at 8 PM. Attendance is mandatory. Drinks and snacks included.',
		date: '20 October 2026',
		asset: hvvws2627,
		manualOrder: 14,
	},
	{
		id: 'beirat-recruitment',
		title: 'Beirat Recruitment',
		tag: 'Position',
		summary:
			'📢 House 3 needs a Beirat! Join our team and help shape the future of our house.',
		date: '20 October 2026',
		asset: beiratRecruitment,
		manualOrder: 13,
	},
	{
		id: 'delegate-recruitment',
		title: 'Delegate Recruitment',
		tag: 'Position',
		summary:
			'Want to help represent House 3 without taking on the full responsibility of being House Speaker? Become a Delegate!',
		date: '20 October 2026',
		asset: delegateRecruitment,
		manualOrder: 12,
	},
	{
		id: 'environmental-officer-hiring',
		title: 'Environmental Officer Hiring',
		tag: 'Position',
		summary:
			'Protecting the environment means securing the future. 🌎🌱 Are you ready for this responsibility? 👍🏻 Then apply now! 💻 Send your application by 25.06.2026 to orgtutor@stusta.de',
		date: '29 June 2026',
		asset: environmentalOfficerHiring,
		manualOrder: 11,
	},
	{
		id: 'stustaculum',
		title: 'StuStaculum',
		tag: 'Event',
		summary:
			'Es ist soweit! Ihr könnt euch ab jetzt für Helferschichten am StuStaCulum eintragen und euch damit freien Eintritt, Getränkemarken, ein exclusives Helfershirt und eine tolle Zeit während eurer Schicht sichern. Unter helfen.stustaculum.de findet ihr eine Übersicht und könnt euch anmelden. Die Schichten sind begrenzt, also wartet nicht zu lange 🎼🍻👯',
		date: '03 - 06 June 2026',
		asset: stustaculumPoster,
		manualOrder: 10,
	},
	{
		id: 'heimratsversammlung',
		title: 'Heimratsversammlung',
		tag: 'House',
		summary:
			'Hello everyone! Our Heimratsversammlung (House 3 meeting) will take place on Thursday, 28 May 2026 at 20:00 in a hybrid format. You can join offline in House 3B GAP or online via the link that will be shared soon. Everyone is welcome to attend and bring up issues, ideas, or suggestions for the house. Only floorspeakers will vote, but all residents can participate in the discussion and share anything relevant. Looking forward to seeing you there!',
		date: '28 May 2026',
		asset: heimratsversammlung,
		manualOrder: 9,
	},
	{
		id: 'finanzvorstand-hiring',
		title: 'Finanzvorstand Hiring',
		tag: 'Position',
		summary:
			'Send your application by 22.05.2026 to vorstand@selbstverwaltung-stusta.de',
		date: '26 May 2026',
		asset: finanzvorstandHiring,
		manualOrder: 8,
	},
	{
		id: 'teamvorstaende-hiring',
		title: 'Teamvorstände Hiring',
		tag: 'Position',
		summary:
			'Send your application by 22.05.2026 to vorstand@selbstverwaltung-stusta.de',
		date: '26 May 2026',
		asset: teamvorstaendeHiring,
		manualOrder: 7,
	},
	{
		id: 'new-manager-hiring-kiosk',
		title: 'New Manager Hiring',
		tag: 'Kiosk',
		summary: 'We are looking for a new manager for Kultur Kiosk Siggi',
		date: 'Until 08 May 2026',
		asset: newManagerHiringKioskPoster,
		manualOrder: 6,
	},
	{
		id: 'haus-3-meeting-ss26',
		title: 'Haus 3 Meeting SS26',
		tag: 'House',
		summary: 'The recurring house meeting notice for the summer semester 26.',
		date: '05 May 2026',
		asset: haus3MeetingSs26Poster,
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
		title: "Information Disclaimer",
		body: "All information on this page is provided as-is and may not always reflect the most current or official updates. This content does not replace announcements from official StuSta bodies or StuWerk. For corrections or contributions, please contact the house speaker or submit a PR (see contact page for details).",
		meta: "Important"
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
		title: 'StuSta Gym Opening Hours',
		body: '7:00-9:00 in the morning (week). 9:00-11:00 in the morning (weekend). 17:00-23:00 in the evening. Check the WhatsApp group for updates & women only schedules.',
		meta: 'StuSta Gym',
	},
	{
		title: 'NIK Security',
		body: 'If you have any security concerns (e.g., suspicious individuals), please contact the NIK Security Team (contact number is in WhatsApp group description). They are available from 22:00 until the morning. For emergencies, contact the police at 110.',
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
