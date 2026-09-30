
export class FriendAge {


constructor (name,year,month,day){
  this .name=name;
  this.year=year;
  this .month=month;
  this.day=day;
}
 returnAge(){

const age = 2026 - this.year; 
    

return (this.name  + age + "today");
  }

}
  