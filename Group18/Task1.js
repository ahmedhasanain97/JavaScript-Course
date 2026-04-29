let prmptMssg = prompt(`Print Number From – To`,'Example: 5-20').split("-")
let startNumber,endNumber;

if(prmptMssg[0] < prmptMssg[1]){startNumber=prmptMssg[0];endNumber=prmptMssg[1];}
else{startNumber=prmptMssg[1];endNumber=prmptMssg[0];}

for(let i=startNumber;i <= endNumber; i++){
    console.log(i);
}