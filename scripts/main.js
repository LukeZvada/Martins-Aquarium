//main.css is responsible for running the correct tasks when the site loads. 

//importing the export function from FishDataProvider
//import { useFish } from "./FishDataProvider.js"

//const allTheFish = useFish()

//Left hand side variable store indiviual items. Right hand (stores the entire array.
//fish is the variable and can be named anything. Choose a name that provides context to teammates.
//for(const fish of allTheFish){
   // console.log(fish)
//}

import {fishList} from "./fishLists.js"
fishList()

import {quoteList} from "./quoteList.js"
quoteList()