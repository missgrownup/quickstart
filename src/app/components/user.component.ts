import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})

export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Jamie';
        this.email = 'jamjamduan@gmail.com';
        this.address = {
            street: '6 callistemon ave',
            city: 'Keysborough',
            state: 'VIC'
        }
        this.hobbies = ['Diving', 'Camping', 'Hiking'];
        this.showHobbies = true;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
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

interface Post {
    id: number;
    title: string;
    body: string;
}
