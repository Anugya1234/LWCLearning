import { LightningElement,track } from 'lwc';

export default class Comp1 extends LightningElement {
myName = 'Anugya'
title ='Salesforce Developer'

changeTitleHandler(event){
  this.title= event.target.value;
}

@track myAddress = {
"myCity" : "Srinagar"
}
@track myAddList = ["a","b"];
trackHandler(event){
  console.log("helloooooooooooo");
  alert(myAddList);
this.myAddress.myCity = event.target.value;
cityVal = event.target.value;
myAddList.push(cityVal);

}
}