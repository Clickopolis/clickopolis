const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const PORT = process.env.PORT || 3000;
const schema = buildSchema(`
    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }

    type Query {
        getDie(numSides: Int): RandomDie
    }
`);

class RandomDie {
    constructor(public numSides:number) {
        this.numSides = numSides;
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    roll({ numRolls }: { numRolls: number }) {
        let output = [];
        for (let i = 0; i < numRolls; i++) {
            output.push(this.rollOnce());
        }
    }
}

// resolver
const root = {
    getDie: ({ numSides }: { numSides: number }) => new RandomDie(numSides || 6)
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT);

console.log(
    `Running GraphQL API server at localhost:${PORT}/graphql`
);