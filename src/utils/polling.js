export async function polling(service,onStop,condition,duration){
    const sleep = (duration)=>{
        return new Promise((resolve, reject) => window.setTimeout(resolve,duration))
    }
    let result = await service();
    while (!condition(result)) {
        await sleep(duration);
        result = await service();
    }
    onStop(result);
}