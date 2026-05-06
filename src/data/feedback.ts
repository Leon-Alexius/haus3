export type FeedbackTemplate = {
	id: string;
	label: string;
	description: string;
	subject: string;
	buttonLabel: string;
	body: string;
};

export const supportEmail = 'lie-leon.alexius@stusta.de';

export const feedbackTemplates: FeedbackTemplate[] = [
	{
		id: 'feedback',
		label: 'Feedback',
		description: 'General feedback, improvements, or resident suggestions.',
		subject: 'Haus 3 Feedback',
		buttonLabel: 'Send feedback',
		body: `[Feedback]
Short summary of the feedback

[Context]
Where or when did this come up?

[Details]
Describe the feedback or suggestion.

[Impact]
Who is affected and why does it matter?

[Optional Proposal]
If you have one, suggest a concrete improvement.

[Additional Context]
Optional notes, references, or links.`,
	},
	{
		id: 'issue',
		label: 'Issue Report',
		description:
			'Problems, maintenance requests, or situations that need action.',
		subject: 'Haus 3 Issue Report',
		buttonLabel: 'Send issue report',
		body: `[Issue Report]
Brief issue title

[Location / Context]
Include floor, room, or area if relevant.

[Expected Behavior]
What did you expect to happen?

[Actual Behavior]
What happened instead?

[Severity]
Low / Medium / High

[Additional Context]
Photos, references, timing details, or other notes.`,
	},
	{
		id: 'feature',
		label: 'Feature Request',
		description: 'Ideas for new events, services, or improvements to House 3.',
		subject: 'Haus 3 Feature Request',
		buttonLabel: 'Send feature request',
		body: `[Feature Request]
Brief proposal title

[Problem Statement]
What are you trying to improve or solve?

[Describe the solution you'd like]
Describe the change you want to see.

[Alternatives Considered]
Any other ideas you considered.

[Additional Context]
Mockups, references, or constraints.`,
	},
];

export const defaultFeedbackTemplateId = 'feedback';
