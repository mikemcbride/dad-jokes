import uniqueRandomArray from 'unique-random-array'
import jokes from './jokes.js'

export default {
    all: jokes,
    random: uniqueRandomArray(jokes)
}
