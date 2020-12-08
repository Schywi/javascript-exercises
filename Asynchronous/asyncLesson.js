
 /**
  * * The Fetch promise
  */
fetch('http://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)


 /**
  * ! The async await version of Fetch   
  */
 async function fetchUsers(){
     const resp = await fetch('http://jsonplaceholder.typicode.com/users');
     const data = await resp.json();
     console.log(data);
 }