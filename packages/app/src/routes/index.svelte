<script>
    import { path } from 'ramda';

    let foodTotal = 0;
    let foodPerClick = 1;
    let foodPerSecond = 0;
    let foodMaximum = 200;
    let population = 1;
    let populationIncreaseBy = 1;
    let populationExponent = 1.07;
    let populationGrowthCost = 10;
    let farmer = {
        total: 0,
        contribution: [
            {
                target: ['food', 'perSecond'],
                value: 2,
            }
        ]
    }
    let citizens = {farmer,};
    let autoAssignedCitizen = 'farmer';

    function calculateTotalContributionFor(name, contribution) {
        let citizen = path([name], citizens);

        console.log(citizen);

        return citizen.total * path([...contribution], citizen.contribution).value;
    }

    function getSinglePurchaseCost(initialCost, costBase, currentCount) {
        return initialCost * Math.pow(costBase, currentCount + 1);
    }

    function bulkPurchase(singlePurchaseCost, costBase, numberToPurchase) {
        if (numberToPurchase === 1) {
            return singlePurchaseCost;
        }
        return singlePurchaseCost * ((Math.pow(costBase, numberToPurchase) - 1) / (costBase - 1));
    }

    function getMaxAffordable(resource, singlePurchaseCost, costBase) {
        if (singlePurchaseCost > resource) {
            return 0;
        }

        const result = Math.log(1 + ((costBase - 1) * resource / singlePurchaseCost)) / Math.log(costBase);
    
        return result | 0;
    }

    function autoAssignCitizen(number) {
        let citizen = path([autoAssignedCitizen], citizens);
        citizen.total += number;
        citizens = { ...citizens, [autoAssignedCitizen]: citizen };
    }

    function handleClick() {
        foodTotal += foodPerClick;
    }

    function handleInput(e) {
        const num = Number(e?.target?.value);
        foodPerClick += Number.isNaN(num) ? 0 : num;
    }

    function growPopulation() {
        population += populationIncreaseBy;
        foodTotal -= populationGrowthCost;
        populationGrowthCost = Math.pow(populationGrowthCost, populationExponent);
        autoAssignCitizen(populationIncreaseBy);
    }

    function setPopBuyAmount(number) {
        
    }
</script>

<button on:click={handleClick}>
    Grow Food
</button>

<button disabled={populationGrowthCost > foodTotal && foodTotal - populationGrowthCost <= 0} on:click={growPopulation}>
    Grow Population ({Math.floor(populationGrowthCost)} Food)
</button>

<button on:click={() => {setPopBuyAmount(1)}}>5</button>
<button on:click={() => {setPopBuyAmount(5)}}>5</button>
<button on:click={() => {setPopBuyAmount(25)}}>25</button>
<button on:click={() => {setPopBuyAmount(5)}}>max</button>

<input on:change={handleInput} bind:value={foodPerClick} />

<div>
    Total Food: {foodTotal.toFixed(2)}
</div>

<div>
    Total Citizens<br/>
    Farmers:  {citizens['farmer'].total} (produces {JSON.stringify(calculateTotalContributionFor('farmer', ['food', 'perSecond']))})<br/>
</div>