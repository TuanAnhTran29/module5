import {Component, Input, OnInit} from '@angular/core';
import {Token} from "@angular/compiler";
import {TokenService} from "../../tokenService/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name= ""
  isLoggedIn= false
  idCurrentUser: any
  isAdmin= false
  keyword: any
  quantityProduct= JSON.parse(sessionStorage.getItem('Quantity_product')!)


  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('Token_key') != null){
      this.isLoggedIn= true
      this.idCurrentUser = JSON.parse(window.sessionStorage.getItem(`Token_key`)!).id
    }

    if (JSON.parse(window.sessionStorage.getItem(`Token_key`)!).roles[0].authority == "ADMIN"){
      this.isAdmin= true
    }
  }


  signOut(){
    this.tokenService.removeToken()
    this.isLoggedIn= false
    this.isAdmin= false
    this.router.navigate(['/login']).then(()=>{
      window.location.reload()
    })

  }

  search(keyword: any) {
    this.router.navigate(['/search',keyword])
  }
}
