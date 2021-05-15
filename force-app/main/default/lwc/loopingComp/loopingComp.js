import { LightningElement, track } from 'lwc';

export default class LoopingComp extends LightningElement {

carList = ["x","y","z"];
name
companyList =[
{
id: 1,
company : "Cloud Analogy",
employeeCode : "124"
},{
id: 2,
company: "Mahagun",
employeeCode: "937"
},{
id: 3,
company: "BirlaSoft",
employeeCode: "246"
}];

inputHandler(event){
if(event.target.value=='BMW')
this.name = event.target.value;
}
get userName(){
return this.name;
}

}