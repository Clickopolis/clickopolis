import { Contribution, Citizen } from '@clickopolis/core'

export const getContributionFor = ({ consumptionFunction, findFunction, citizens }: {
    consumptionFunction: () => number,
    findFunction: (c: Contribution) => boolean,
    citizens: Citizen[],
}): number => {
    const contributionTotal = citizens.map(citizen => {
        if (citizen.name === 'ruler') return { citizenAmount: 0, contributionAmount: 0 };
        const contrib = citizen.contribution.find(findFunction);
        return {
            citizenAmount: citizen.amount,
            contributionAmount: contrib ? contrib.amount : 0
        };
    }).reduce((prev, curr) => {
        return prev + (curr.citizenAmount * curr.contributionAmount);
    }, 0);
    const consumptionTotal = consumptionFunction();
    return contributionTotal - consumptionTotal;
};
