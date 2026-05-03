let myTable = document.querySelector("table tbody")

fetch("https://api.github.com/users/ElzeroWebSchool/repos").then(result =>{
    let myData = result.json();
    console.log(myData)
    return myData;
}).then(fullData => {
    fullData.length=15;
    return fullData;
}).then(requiredData => {
    console.log(requiredData)
    for (let i = 0; i < requiredData.length; i++) {
        let myRow = document.createElement("tr");
        let repoName = document.createElement("td")
        let stars = document.createElement("td")
        let visitLink = document.createElement("td")
        let link = document.createElement("a")
        repoName.textContent=requiredData[i].name;
        stars.textContent=requiredData[i].stargazers_count;
        link.href=requiredData[i].html_url;
        link.target="_blank"
        link.textContent="Visit"
        visitLink.append(link)
        myRow.append(repoName,stars,visitLink)
        myTable.append(myRow)
    }
})
//