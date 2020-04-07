import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  name: string;
  currentUser : string;
  messages = [];
  message: string;

  constructor(
    private socket: Socket,
    private toastCtrl: ToastController,
    private userService: UserService,
    private router: Router) {}
  
  ngOnInit(){
    this.socket.connect();

    let name = this.userService.getUserName();
    let image = this.userService.getUserProfilePic();
    this.currentUser = name;

    if (image === ''){
      image = 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg';
    }
    console.log(image);
    this.socket.emit('set-user', {name,image});
  
    this.socket.fromEvent('users-changed')
      .subscribe(data => {
        let user = data['user'];
        if (data['event'] === 'left') {
          this.showToast('User left: ' + user);
        }
        else{
          this.showToast('User joined: ' + user);
        }
      });
    
    this.socket.fromEvent('message').subscribe(message => this.messages.push(message));
  }

  sendMessage(){
    this.socket.emit('send-message', {text: this.message});
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  goToMenuPage(){
    this.router.navigate(['menu']);
  }

}
