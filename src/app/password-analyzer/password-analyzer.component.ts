import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-analyzer',
  templateUrl: './password-analyzer.component.html',
  styleUrls: ['./password-analyzer.component.css']
})
export class PasswordAnalyzerComponent implements OnInit {

  timeout: number;
  strengthBadge: HTMLElement;
  password: HTMLElement;
  strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})')
  mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
  showPasswordStrength: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.strengthBadge = document.getElementById('StrengthDisp');
    this.password = document.getElementById('PassEntry');
  }

  checkPasswordStrength(event: Event) { 
    const element = event.currentTarget as HTMLInputElement
    const password: string = element.value;

    if(password == ""){
      this.showPasswordStrength = false;
      this.strengthBadge.style.display = 'none';
      this.strengthBadge.style.backgroundColor = 'red';
      this.strengthBadge.textContent = 'Weak';
      return ;
    }
    if(this.strongPassword.test(password)) {
      this.showPasswordStrength = true;
        this.strengthBadge.style.display = 'inline';
        this.strengthBadge.style.backgroundColor = "green";
        this.strengthBadge.textContent = 'Strong';
    } else if(this.mediumPassword.test(password)) {
        this.showPasswordStrength = true;
        this.strengthBadge.style.display = 'inline';
        this.strengthBadge.style.backgroundColor = 'yellow';
        this.strengthBadge.textContent = 'Medium';
    } else {
        this.showPasswordStrength = true;
        this.strengthBadge.style.display = 'inline';
        this.strengthBadge.style.backgroundColor = 'red';
        this.strengthBadge.textContent = 'Weak';
    }
  }

}
