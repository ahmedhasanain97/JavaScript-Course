//task 1 create the json file
//task 2

let req = new XMLHttpRequest();
req.open("Get","./articles.json")
req.send();
console.log(req)
req.onreadystatechange = () => {
    console.log(req.readyState)
    console.log(req.status)
    if(req.status == 200 && req.readyState == 4){
        console.log(req.responseText)
        console.log("data loaded")
        //task 3

        let mainData = JSON.parse(req.responseText);

        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category="All";
        }

        console.log(mainData)

        let updatedData = JSON.stringify(mainData);

        console.log(updatedData)

        //task 4
        for (let i = 0; i < mainData.length; i++) {
            let mydiv = document.createElement("div");
            let title = document.createElement("h2")
            let content = document.createElement("p")
            let author = document.createElement("p")
            let category = document.createElement("p")
            title.textContent= mainData[i].title;
            content.textContent=mainData[i].content;
            author.textContent=mainData[i].author;
            category.textContent=mainData[i].category;
            mydiv.append(title,content,author,category);
            document.body.append(mydiv);
        }
    }
}

