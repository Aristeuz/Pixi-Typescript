//import { start } from "repl";

import { List } from "lodash";

//
let objectPool: any;
let pooledObjects: Array<Apple>;
let objectToPool: any;
let amountToPool: number = 3;

start();

class Apple 
{
    fruityness:number = 5;
}


function start() 
{
    pooledObjects = new Array<Apple>(amountToPool);
    let tmp:any;
    for(let i=0; i< amountToPool; i++)
    {
        tmp = objectPool;
        tmp = false;
        pooledObjects.push(tmp);
    }
    console.log(pooledObjects);
}

/*
function returnToPool()
{
    for(let i=0; i< amountToPool; i++)
    {
        if(!pooledObjects[i] == true) 
        {
            return pooledObjects[i];
        }
    }
    return null;
}


setInterval(createApple,2001);
let apple = objectPool.getInstance().returnToPool();

function createApple(){
    if (apple != null)
    {
        //Set new position for apple
        apple = true;
        console.log("Apple created");
    }
}


setInterval(moveToPool,1000);
function moveToPool() 
{
    apple = false;
    console.log("Apple removed");
}
*/

