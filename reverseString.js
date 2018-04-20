#!/usr/bin/env node
function reverseA(str, i = 0) {
    if (i === str.length) {
        return ''
    }
    return reverseA(str, i + 1) + str[i]
}

console.log(reverseA(process.argv[2]));