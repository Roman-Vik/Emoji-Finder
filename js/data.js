
export async function data(){
    const URL = 'https://emoji.ymatuhin.workers.dev/'
    let promise = await fetch(URL)
    let emojiData = await promise.json()
    return  emojiData
}
data().then(d => d)