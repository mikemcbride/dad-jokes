#!/usr/bin/env node
import meow from 'meow'
import dadJokes from './index.js'

const cli = meow(`
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
`, {
        importMeta: import.meta
    })

console.log(cli.flags.all ? dadJokes.all.join('\n') : dadJokes.random())
