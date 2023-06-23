import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  res: any ;

  constructor(private server: ServerService){}

  postItem(text: string){
    this.server.postItem(text).subscribe(d => {
      console.log(d);
    })
  }

  getItem(){
    this.server.getItem().pipe(
      map(item => Object.values(item),
      // map((item: any) => (item[0].po))
      )
    ).subscribe(d => {
      console.log(d);
      this.res = d.map(item => item.post);
    })
  }
}
