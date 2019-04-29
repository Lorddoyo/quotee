export class Repeat {
  public showDescription:boolean;
  constructor(public id:number, public name:string,public description:string,public author:string,public like:number,public dislike:number, public date:Date){
    this.showDescription=false
  }
}
