
// How the promise works?
const promise = new Promise((resolve,reject) => { 
    if(true){
        resolve('Stuff Worked');
    } else { 
        reject('Error, it broke')
    }
})



const promise2 = new Promise((resolve,reject) => {  
    setTimeout(resolve, 100, "Hiiii")
})

const promise3 = new Promise((resolve,reject) => {  
    setTimeout(resolve, 1000, "HELLO")
})




const promise4 = new Promise((resolve,reject) => {  
    setTimeout(resolve, 5000, "What is you are looking for?")
})


Promise.all([promise,promise2,promise3,promise4]).then(values => console.log(values))




promise
    .then(result => { 
    throw Error
    return result + '!'
    })
    .then(result2 => { console.log(result2)})
    .catch(() => console.log('ERRROU!') )



