'use strict'

const uniqueRandomArray = require('unique-random-array')
const jokes = require('./jokes.json')

exports.all = jokes
exports.random = uniqueRandomArray(jokes)