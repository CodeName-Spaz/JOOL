import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  test(event){
    var x = document.getElementsByClassName("coverPhoto") as HTMLCollectionOf <HTMLElement>
    var y = document.getElementsByClassName("coverPhoto1") as HTMLCollectionOf <HTMLElement>
    
    let h = event.scrollTop
    x[0].style.height = (250 - h)+"px"

    if(h > 0){
      x[0].style.height = "50px";
      y[0].style.height = "50px"
    }
    else{
      x[0].style.height = "250px"
      y[0].style.height = "50px"
    }
  }

  viewIT(){
    this.navCtrl.push(BookPage);
  }

}
