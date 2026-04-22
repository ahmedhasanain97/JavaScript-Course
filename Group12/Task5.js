function createSelectBox(startYear, endYear) {
  let select=document.createElement("select")
  for(let i=startYear;i <= endYear ; i++)
  {
    let option =document.createElement("option")
    option.value=i;
    option.textContent=i;
    select.appendChild(option);
  }
  document.body.appendChild(select);
}
createSelectBox(2000, 2021);