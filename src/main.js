import axios from 'axios';

class Api{
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    }
}

Api.getUserInfo('Cha14515151521516516515156156156');






// console.log("teste")







// const minhaPromise = () => new Promise((resolver,reject) =>{
//     setTimeout(() => {resolver("OK")},2000);
// });

// // minhaPromise().then(response =>{
// //     console.log(response);
// // });


// async function executaPromise(){
//     const response = await minhaPromise();
//     console.log(response);
// }

// executaPromise();

