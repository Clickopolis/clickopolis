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
        description: `+2 Foot Soldier strength`
    },
    {
        category: Category.military,
        name: 'Brutish Bounty',
        description: `+100 Money per victorious battle`
    },
    {
        category: Category.military,
        name: 'Warrior Culture',
        description: 'Soldiers provide +.25 Culture/min'
    },
    {
        category: Category.military,
        name: 'Art of War',
        description: '+1 strenght per artist',
    },

    {
        category: Category.economy,
        name: 'Trade Centers',
        description: '+1 Market',
    },
    {
        category: Category.economy,
        name: 'Camelback',
        description: '',
    }
]