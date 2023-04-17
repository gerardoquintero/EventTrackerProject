export class Todo {
  id: number;
  name: string;
  title: string;
  task: string;
description: any;
completed: any;



  constructor(
    id: number = 0,
    name: string = "",
    title: string = "",
    task: string = ""

  ){
this.id =id;
this.name =name;
this.title=title
this.task=task
  }
}
