const sleep = (sec: number): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    });
}

const sleepWithReturn = (sec: number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(sec);
        }, sec * 1000);
    });
}

//Obsolet way
const run = () => {
    sleepWithReturn(2).then((value) => {
        console.log("run:  "  + value);
    });
}

const runAsync = async (): Promise<void> => {
   await sleep(3);
   console.log("runAsync")
}

const runWithReturnAsync = async (): Promise<void> => {
    const value = await sleepWithReturn(4);
    console.log("runWithReturnAsync: " + value)
 }

run();
runAsync();
runWithReturnAsync();