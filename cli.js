#!/usr/bin/env node
'use strict'

const meow = require('meow')
const dadJokes = require('./')

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
`)

console.log(cli.flags.all ? dadJokes.all.join('\n') : dadJokes.random())