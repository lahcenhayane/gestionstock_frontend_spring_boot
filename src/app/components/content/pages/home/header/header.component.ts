import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string=""
  @Input() icon:string=""
  @Input() total:number=0
  @Input() color:string=""


 

}
