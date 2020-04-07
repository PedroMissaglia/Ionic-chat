import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user-service.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  username: string;
  profilePic: string;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUserName().toUpperCase();
    this.profilePic = this.userService.getUserProfilePic();
  }

  goToForumChat(){
    this.router.navigate(['home']);
  }
  

}
