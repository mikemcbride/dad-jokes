# dad-jokes

> Everybody loves dad jokes... right?

The jokes list is just [a file](jokes.js) and can be used wherever. PRs welcome if you've got a good dad joke!

## Install

```
$ npm install --save @mikemcbride/dad-jokes
```


## Usage

```js
const dadJokes = require('dad-jokes');

dadJokes.random();
//=> 'The shovel was a ground-breaking invention.'
```


## API

### .all

Type: `array`

All the dad jokes we have.

### .random()

Type: `function`

Random dad joke from the list.


## CLI

```
$ npm install --global @mikemcbride/dad-jokes
```

```
$ dad-jokes --help

  Examples
    $ dad-jokes
    The shovel was a ground-breaking invention.

    $ dad-jokes --all
    Did you hear about the restaurant on the moon? Great food, no atmosphere.
    What do you call a fake noodle? An impasta.
    How many apples grow on a tree? All of them.
    ...

  Options
    --all   Get all jokes instead of a random joke
```

## License

MIT © [Mike McBride](https://mikemcbride.dev)
