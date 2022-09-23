type Joke = string;

interface DadJoke {
    /** All the dad jokes we have. */
    all: Joke[]
    /** Random dad joke from the list. */
    random: () => Joke
}

let dadJoke: DadJoke;

export = dadJoke;
