<script type="typescript">
	import { path } from 'ramda';
	import { onInterval } from '../utils/onInterval';

	const resourceContraints = {
        // @TODO: tighten types up
		get: function (target: any, prop: any, reciever: any) {
			if (prop === 'total') {
				// @TODO: check for max property
				return Math.max(Math.min(target.total, target?.max ?? Infinity), 0);
			}
			// @ts-expect-error
			return Reflect.get(...arguments);
		}
	};

	interface Resource {
		total: number;
		perClick?: number;
		max?: number;
	}

	let ac = 0;
	let food = new Proxy<Resource>(
		{
			total: 0,
			perClick: 1,
			max: 500
		},
		resourceContraints
	);
	let ideaPoints = new Proxy<Resource>(
		{
			total: 0
		},
		resourceContraints
	);
	let culturePoints = new Proxy<Resource>(
		{
			total: 0
		},
		resourceContraints
	);
	let faithPoints = new Proxy<Resource>(
		{
			total: 0
		},
		resourceContraints
	);
	let money = {
		total: 0
	};

	let baseCitizenIdeas = 1;
	let baseCitizenFaith = 1;
	let baseCitizenCulture = 1;
	let baseCitizenMoney = 1;
	let showDiscoveredIdeas = true;

	let population = 0;
	let populationIncreaseBy = 1;
	let populationExponent = 1.07;
	let populationGrowthCost = 10;
	let maximumFoodPurchaseSet = false;

	interface Citizen {
		total: number;
		color: string;
		contribution: {
			target: [
				'food' | 'production' | 'coins' | 'culture' | 'faith' | 'ideas',
				'/s' | '/click' | '/min'
			];
			value: number;
			multiplier: number;
		}[];
	}

	let farmer: Citizen = {
		total: 0,
		color: 'green',
		contribution: [
			{
				target: ['food', '/s'],
				value: 1.2,
				multiplier: 1
			},
			{
				target: ['food', '/click'],
				value: 1,
				multiplier: 1
			}
		]
	};
	let miner: Citizen = {
		total: 0,
		color: 'gold',
		contribution: [
			{
				target: ['production', '/s'],
				value: 1,
				multiplier: 1
			}
		]
	};
	let merchant: Citizen = {
		total: 0,
		color: 'green',
		contribution: [
			{
				target: ['coins', '/min'],
				value: 10,
				multiplier: 1
			}
		]
	};
	let artist: Citizen = {
		total: 0,
		color: 'purple',
		contribution: [
			{
				target: ['culture', '/min'],
				value: 2,
				multiplier: 1
			}
		]
	};

	let menuItems = ['citizens', 'ideas', 'culture', 'faith', 'military', 'economy', 'diplomacy'];

	type Citizens = { [x: string]: Citizen };
	let citizens: Citizens = { farmer, miner, merchant, artist };
	let autoAssignedCitizen = 'farmer';

	const citizenTypes = Object.keys(citizens);

	interface Idea {
		name: string;
		cost: number;
		description: string;
		purchased: boolean;
	}

	let ideas: Idea[] = [
		{
			name: 'Animal Husbandry',
			cost: 1000,
			description: 'Makes farmers produce 20% more food',
			purchased: false
		},
		{
			name: 'Art',
			cost: 1000,
			description: 'Allows you to assign citizens to Artist role',
			purchased: false
		},
		{
			name: 'Fire Making',
			cost: 1000,
			description: 'Makes miners produce 20% more production',
			purchased: false
		},
		{
			name: 'Archery',
			cost: 1000,
			description: 'Can train Archers',
			purchased: false
		},
		{
			name: 'Bartering',
			cost: 1000,
			description: 'Unlocks Economy panel',
			purchased: false
		},
		{
			name: 'Clothing',
			cost: 1000,
			description: 'Can build Tent',
			purchased: false
		},
		{
			name: 'Fishing',
			cost: 1000,
			description: 'Can gain Coastal resources',
			purchased: false
		},
		{
			name: 'Irrigation',
			cost: 1000,
			description: '+.5 food/s from farmers',
			purchased: false
		},
		{
			name: 'Mysticism',
			cost: 1000,
			description: 'Can assign Clerics',
			purchased: false
		},
		{
			name: 'Paper',
			cost: 1000,
			description: 'Can assign Writers',
			purchased: false
		}
	];

	$: foodPSContributionTotal = getContributionForType(['food', '/s'], citizens);
	$: foodPCContributionTotal = getContributionForType(['food', '/click'], citizens);
	$: totalNumOfCitizens = totalCitizens(citizens);

	function getContributions() {
		const contribs = Object.values(citizens).flatMap((cit) => cit.contribution);

		console.log(contribs);
	}

	getContributions();

	function getContributionValue(name: string, contribution: string[]) {
		let citizen = citizens[name];
		const contrib = citizen.contribution.find((contrib) => {
			return contrib.target.join('') === contribution.join('');
		});
		return (contrib?.value || 0) * (contrib?.multiplier || 1);
	}

	function calculateTotalContributionFor(name: string, contribution: string[]) {
		let citizen = citizens[name];
		const contributionValue = getContributionValue(name, contribution);

		return citizen.total * (contributionValue || 0);
	}

	function getContributionForType(
		contribution: Citizen['contribution'][number]['target'],
		citizens: Citizens
	) {
		return Object.entries(citizens)
			.map((citizen) => {
				return calculateTotalContributionFor(citizen[0], contribution) || 0;
			})
			.reduce((prev, curr) => prev + curr, 0);
	}

	function displayTotalContribution(name: string, contribution: string[]) {
		return `${calculateTotalContributionFor(name, contribution).toFixed(2)} ${contribution.join(
			''
		)}`;
	}

	function displayBaseContribution(name: string, contribution: string[]) {
		return `${getContributionValue(name, contribution).toFixed(2)} ${contribution.join('')}`;
	}

	// function getSinglePurchaseCost(initialCost, costBase, currentCount) {
	//     return initialCost * Math.pow(costBase, currentCount + 1);
	// }

	function bulkPurchase(singlePurchaseCost: number, costBase: number, numberToPurchase: number) {
		if (numberToPurchase === 1) {
			return singlePurchaseCost;
		}
		return singlePurchaseCost * ((Math.pow(costBase, numberToPurchase) - 1) / (costBase - 1));
	}

	function getMaxAffordable(resource: number, singlePurchaseCost: number, costBase: number) {
		if (singlePurchaseCost > resource) {
			return 1;
		}

		const result =
			Math.log(1 + ((costBase - 1) * resource) / singlePurchaseCost) / Math.log(costBase);

		return result | 0;
	}

	function autoAssignCitizen(number: number) {
		let citizen = path([autoAssignedCitizen], citizens);
		citizen.total += number;
		citizens = { ...citizens, [autoAssignedCitizen]: citizen };
	}

	function growFood() {
		food.total += foodPCContributionTotal + food.perClick;
	}

	function growPopulation() {
		population += populationIncreaseBy;
		food.total -= populationGrowthCost;
		populationGrowthCost = Math.pow(populationGrowthCost, populationExponent);
		autoAssignCitizen(populationIncreaseBy);
	}

	function setPopBuyAmount(number: number) {
		populationIncreaseBy = number;
		populationGrowthCost = bulkPurchase(
			populationGrowthCost,
			populationExponent,
			populationIncreaseBy
		);
	}

	function onClickMaxFood() {
		maximumFoodPurchaseSet = true;
		setMaximumAffordable();
	}

	function setMaximumAffordable() {
		const maximum = getMaxAffordable(food.total, populationGrowthCost, populationExponent);
		setPopBuyAmount(maximum);
	}

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function setAutoCitizen(e: Event & { currentTarget: { value: any }}) {
		autoAssignedCitizen = e.currentTarget.value;
	}

	function canPurchase(currency: number, cost: number) {
		return cost > currency && currency - cost <= 0;
	}

	function updateCitizen(type: string, amount: number) {
		citizens = {
			...citizens,
			[type]: {
				...citizens[type],
				total: citizens[type].total + amount
			}
		};
	}

	function purchaseIdea(idea: Idea) {
		ideaPoints.total -= idea.cost;
		ideas = [
			...ideas.filter((id) => id.name !== idea.name).map(id => {
				return {
					...id,
					cost: id.cost * 1.5,
				}
			}),
			{
				...idea,
				purchased: true
			}
		];
		switch (idea.name) {
			case 'Animal Husbandry':
				break;
			default:
				return;
		}
	}

	function onCheckDiscoveredIdeas(e: Event & { currentTarget: { checked: boolean }}) {
		showDiscoveredIdeas = e.currentTarget.checked;
	}

	function ideasFilter(idea: Idea) {
		return showDiscoveredIdeas ? true : !idea.purchased;
	}

	function sortByName(a: any, b: any) {
		return a.name > b.name ? 1 : -1;
	}

	function skipAnHour() {
		food.total += (foodPSContributionTotal / 10 - population / 10) * 10 * 60 * 60;
		ideaPoints.total += baseCitizenIdeas * population * 60 * 60;
		ac += 60;
	}

	function totalCitizens(citizens: Citizens) {
		return Object.values(citizens).reduce((prev, curr) => {
			return prev + curr.total;
		}, 0);
	}

	(function veryEpicHack() {
		ideaPoints.total = 100;
	})();

	// We run these 'per seconds' x10 a minute for smoothness
	onInterval(() => {
		food.total += foodPSContributionTotal / 10 - population / 10;
	}, 100);

	onInterval(() => {
		ideaPoints.total += baseCitizenIdeas * population;
		culturePoints.total += baseCitizenFaith * population;
		faithPoints.total += baseCitizenFaith * population;
		money.total += baseCitizenMoney * population;
		
	}, 1000);

	onInterval(() => {
		ac += 1;
	}, 1000 * 60);
</script>

<div class="p-4">
	<div>
		AC: {ac}
	</div>

	<button on:click={growFood}> Grow Food </button>

	<button disabled={canPurchase(food.total, populationGrowthCost)} on:click={growPopulation}>
		+{populationIncreaseBy} Grow Population ({Math.ceil(populationGrowthCost)} Food)
	</button>

	<!-- 
<button class="w-8" on:click={() => {setPopBuyAmount(1)}}>1</button>
<button class="w-8" on:click={() => {setPopBuyAmount(5)}}>5</button>
<button class="w-8" on:click={() => {setPopBuyAmount(25)}}>25</button>
<button class="w-12" on:click={() => {onClickMaxFood()}}>max</button> -->

	<!-- <input on:change={handleInput} bind:value={foodPerClick} /> -->

	<div class="p-4">
		Total Food: {food.total.toFixed(2)}, {food.max.toFixed(2)} max<br />
		Total Idea Points: {ideaPoints.total.toFixed(2)}<br />
		Total Culture Points: {culturePoints.total.toFixed(2)}<br />
		Total Faith: {faithPoints.total.toFixed(2)}<br />
		{foodPSContributionTotal}, {foodPCContributionTotal}
	</div>

	<div class="p-2 border border-gray-200 border-b-0 rounded-t">
		{#each menuItems as menuItem}
			<button>
				{menuItem}
			</button>
		{/each}
	</div>

	<div class="flex flex-wrap">
		<div class="p-4 border border-gray-200 w-1/2">
			Total Citizens [{totalNumOfCitizens}/{population}]
			{#if foodPSContributionTotal - population < 0}
				<div class="p-2 border rounded bg-red-500 text-gray-50">
					Your citizens are starving!
					<span class="underline">Ignore</span>
				</div>
			{/if}
			<details class="border border-gray-200 rounded p-1">
				<summary class="cursor-pointer divide-y divide-y-gray-500">View Net Totals</summary>

				<blockquote>
					All citizens consume 1 Food/s and produce {baseCitizenIdeas} idea/s, {baseCitizenCulture} culture/s,
					{baseCitizenFaith} faith/s, {baseCitizenMoney} coin/s
				</blockquote>
				<blockquote>
					{(foodPSContributionTotal - population).toFixed(2)} net food/s
				</blockquote>
			</details>
			<div>
				Auto assign citizens to:
				<select class="p-2 rounded border border-gray-200" on:blur={setAutoCitizen}>
					{#each citizenTypes as citizenType}
						<option value={citizenType}>{capitalize(citizenType)}</option>
					{/each}
				</select>
			</div>

			<div class="h-2 m-2 rounded flex border border-gray-200">
				{#each Object.entries(citizens) as citizen}
					<div
						class="h-2"
						style={`width: ${(citizen[1].total / population) * 100}%; background: ${
							citizen[1].color
						}`}
					/>
				{/each}
			</div>

			{#each Object.entries(citizens) as citizen}
				<div class="p-2">
					<!-- @TODO: add pluralize -->
					<div class="inline-block">{capitalize(citizen[0])}s:</div>
					<button disabled={citizen[1].total <= 0} on:click={() => updateCitizen(citizen[0], -1)}
						>-1</button
					>
					{citizen[1].total}
					<button
						disabled={totalNumOfCitizens >= population}
						on:click={() => updateCitizen(citizen[0], 1)}>+1</button
					>
					<div class="inline-flex">
						{#each citizen[1].contribution as contribution}
							<span class="p-2 flex flex-col">
								<span class="text-sm"
									>{displayBaseContribution(citizen[0], contribution.target)}</span
								>
								<span>{displayTotalContribution(citizen[0], contribution.target)}</span>
							</span>
						{/each}
					</div>
				</div>
			{/each}
			<!-- Farmers:  {citizens['farmer'].total} (produces
        {displayTotalContribution('farmer', ['food', 'perSecond'])},
        {displayTotalContribution('farmer', ['food', 'perClick'])}
    )<br/>
    Miners:  {citizens['miner'].total} (produces {displayTotalContribution('miner', ['production', 'perSecond'])})<br/> -->
		</div>

		<div class="p-4 border border-gray-200 w-1/2">
			Ideas
			<label>
				<input
					bind:checked={showDiscoveredIdeas}
					type="checkbox"
					on:change={onCheckDiscoveredIdeas}
				/>
				Show Discovered Ideas
			</label>
			<!-- @TODO: jesus christ fix this shit -->
			{#each ideas.sort(sortByName).filter(ideasFilter) as idea}
				<div class="flex m-2 items-center">
					<strong class="ml-2 mr-2">{idea.name}</strong>
					{idea.description}
					<div class="bg-gray-50 pl-2 rounded inline-block ml-auto border border-gray-100">
						{idea.cost} Idea Points
						<button
							on:click={() => purchaseIdea(idea)}
							disabled={idea.purchased || canPurchase(ideaPoints.total, idea.cost)}
							>{idea.purchased ? 'Purchased' : 'Purchase'}</button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<button on:click={skipAnHour}> Skip an Hour </button>

	<div class="p-2 bg-gray-200">
		{JSON.stringify({
			showDiscoveredIdeas
		})}
	</div>
</div>
