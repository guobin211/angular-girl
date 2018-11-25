import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
    }

    /**
     * 注册
     */
    onSignUp() {
        this.auth.signUpUser(this.email, this.password);
    }

    /**
     * 登录
     */
    onSignIn() {
        this.auth.signInUser(this.email, this.password);
    }
}
