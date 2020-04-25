import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../../services/post-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component( {
    selector: 'app-post-wall',
    templateUrl: './post-wall.component.html',
    styleUrls: [ './post-wall.component.sass' ]
} )
export class PostWallComponent implements OnInit {

    public posts;
    public comments;
    commentForm: FormGroup;

    constructor( private snackBar: MatSnackBar,
                 private postApiService: PostApiService ) {
        this.commentForm = new FormGroup({
            comment: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
        this.postApiService.getPosts()
            .subscribe( ( response ) => {
                this.posts = response;
            } );
    }

    /**
     * Show related comments
     */
    showComments(id: number) {
        this.postApiService.getComments(id)
            .subscribe((response) => {
                console.log(response)
                this.comments = response;
            });
    }

    /**
     * send comment to post endpoint
     */
    sendComment() {
        const comment = {
            title: 'comment',
            body: this.commentForm.value.comment,
            userId: 1
        };

        this.postApiService.sendComment(comment)
            .subscribe((response) => {
                console.log(response);
                this.openSnackBar('You have added a new comment');
                this.commentForm.reset();
            });
    }

    /**
     * Open snackbar after send a comment
     */
    openSnackBar(message: string) {
        this.snackBar.open(message, '', {
            duration: 5000,
        });
    }

}
