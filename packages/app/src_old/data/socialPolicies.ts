import { Category } from 'utils/Category';

export interface SocialPolicy {
	category?: Category;
	name: string;
	description: string;
}

export const socialPolicies: SocialPolicy[] = [
	{
		category: Category.military,
		name: 'Code of Honor',
		description: `+2 Foot Soldier [strength]`
	},
	{
		category: Category.military,
		name: 'Brutish Bounty',
		description: `+100 [cash] per victorious battle`
	},
	{
		category: Category.military,
		name: 'Warrior Culture',
		description: 'Soldiers provide +.25 [culture]/min'
	},
	{
		category: Category.military,
		name: 'Art of War',
		description: '+1 [strength] per artist'
	},

	{
		category: Category.economy,
		name: 'Trade Centers',
		description: '+1 Trade Route'
	},
	{
		category: Category.economy,
		name: 'Must See Wonders',
		description: '+1 Market per Wonder constructed'
	},
	{
		category: Category.economy,
		name: 'Camelback',
		description: 'Trade Routes complete +1% faster per Camel (max 50%)'
	},
	{
		category: Category.economy,
		name: 'No Strings Attached',
		description: '+1% [cash]/min'
	},

	{
		category: Category.faith,
		name: 'Religious Tolerance',
		description: '+1 [happiness] per Citizen of another religion'
	},
	{
		category: Category.faith,
		name: 'Strict Dogma',
		description: '+1 Temple per Dogma created'
	},
	{
		category: Category.faith,
		name: 'Heretic Sacrifice',
		description: 'Sacrificing a citizen who is a Heretic produces no anger'
	},
	{
		category: Category.faith,
		name: 'Obligate Prayer',
		description: '+0.1 [faith]/min per Citizen'
	},

	{
		category: Category.research,
		name: 'Slightly Bigger Skulls',
		description: '+1% [research] per Citizen'
	},
	{
		category: Category.research,
		name: 'Basic Experimentation',
		description: 'Unlocks new Events'
	},
	{
		category: Category.research,
		name: 'Eureka!',
		description: 'Earn back 10% of [research] spent on Advancements'
	},
	{
		category: Category.research,
		name: 'Scholarly Forum',
		description: '+0.5 [research]/min per Library'
	},

	{
		category: Category.culture,
		name: 'Tent Communities',
		description: '+5 [culture]/min per 10 Tents'
	},
	{
		category: Category.culture,
		name: 'Diffusion',
		description: '+5 [culture]/min'
	},
	{
		category: Category.culture,
		name: 'Street Performers',
		description: '+0.1 [culture]/min per Citizen'
	},
	{
		category: Category.culture,
		name: 'Court Poet',
		description: 'Ruler provides +2 [culture]/min'
	}
];
