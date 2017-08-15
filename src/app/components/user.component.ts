import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong> {{email}} </p>
    <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}} </p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
    <div *ngIf="hobbies.length">
        <h3>Hobbies</h3>
        <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
                {{hobby}} <button (click)="deleteHobby(i)">Delete this hobby</button>
            </li>
        </ul>
        <form (submit)="addHobby(hobby.value)">
            <label>Add Hobby</label><br/>
            <input type="text" name="hobby" #hobby /><br/>
        </form>
    </div>
    <form>
        <label for="name">Name</label><br/>
        <input type="text" name="name" [(ngModel)]="name"/><br/>
    </form>
`,
})

export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        this.name = 'Jamie';
        this.email = 'jamjamduan@gmail.com';
        this.address = {
            street: '6 callistemon ave',
            city: 'Keysborough',
            state: 'VIC'
        }
        this.hobbies = ['Diving', 'Camping', 'Hiking'];
        this.showHobbies = true;
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby)
    }

    deleteHobby(i) {
        this.hobbies.splice(i, 1)
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}
