// let myPromise = new Promise((resolved,rejected) => {
//         let req = new XMLHttpRequest()
//         req.open("GET","./articles.json")
//         req.send();
//         req.onreadystatechange = () => {
//             if(req.status == 200 && req.readyState == 4){
//                 let myData=JSON.parse(req.responseText)
//                 resolved(myData)
//             }
//             else if(req.readyState== 4 && req.status != 200){
//                 rejected(Error("Data not Found"))
//             }
//         }
// }).then((result) => {
//     result.length = 5;
//     return result
// }).then((result) => {
//         for (let i = 0; i < result.length; i++) {
//             let mydiv = document.createElement("div");
//             let title = document.createElement("h3")
//             let description = document.createElement("p")
//             title.textContent= result[i].title;
//             description.textContent=result[i].description;
//             mydiv.append(title,description);
//             document.body.append(mydiv);
//         }
// })


fetch("./articles.json").then((result) =>{
    console.log(result)
    let myJsonData=result.json();
    return myJsonData
}).then((myJsonData) =>{
    let myData = myJsonData;
    myData.length= 5;
    console.log(myData)
        for (let i = 0; i < myData.length; i++) {
            let mydiv = document.createElement("div");
            let title = document.createElement("h3")
            let description = document.createElement("p")
            title.textContent= myData[i].title;
            description.textContent=myData[i].description;
            mydiv.append(title,description);
            document.body.append(mydiv);
        }
})

