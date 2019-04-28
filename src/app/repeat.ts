export class Repeat {
  public showDescription:boolean;
  constructor(public id:number, public name:string,public description:string,public author:string, public date:Date){
    this.showDescription=false
  }
}
