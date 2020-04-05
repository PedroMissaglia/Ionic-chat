import { Component, OnInit, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from '../user/user-service.service';

@Component({
  selector: 'app-config-profile',
  templateUrl: './config-profile.page.html',
  styleUrls: ['./config-profile.page.scss'],
})
export class ConfigProfilePage implements OnInit{
  
  username: string = '';
  imageUser: string = 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg';

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    
  }

  submitUsername(){
    this.userService.setUserName(this.username);
    this.userService.setUserProfileImage(this.imageUser);

    this.router.navigate(['home']);
  }

}
