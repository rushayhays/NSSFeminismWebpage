const dataSourceURL = "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json";
const newdataURL = "https://type.fit/api/quotes"

import { ladyWriter } from "./helper.js";


const standardFetcher = (urlGoesHere) => {

    return fetch(urlGoesHere)
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}



let consoleCounter = 0

// console.log(standardFetcher(dataSourceURL))

const printLadies = (arr) => {
    for(const item of arr){
        console.log(item)
        consoleCounter += 1;

    }
}

standardFetcher(dataSourceURL).then((allLadies) => {
    printLadies(allLadies)
    ladyWriter(allLadies)
    console.log(allLadies.length)
    console.log("This is the first number of console logs" + consoleCounter);
})

standardFetcher(newdataURL).then((allQuotes) => {
    printLadies(allQuotes)
    console.log(allQuotes.length)
    console.log("This is the total number of console logs" + consoleCounter);
})

console.log("This is the NOT the total number of console logs" + consoleCounter);

