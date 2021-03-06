﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

import { Event } from '../_models';
import { EventService } from '../_services';

@Component({templateUrl: 'events.component.html',  selector: 'events',styleUrls:['events.component.css']})
export class EventsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    events: Event[] = [];
    show = 5;

    constructor(private userService: UserService,private eventService: EventService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllEvents();
    }

    deleteEvent(id: number) {
        this.eventService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllEvents() 
        });
    }

    
    private loadAllEvents() {
        this.eventService.getAll().pipe(first()).subscribe(events => { 
            this.events = events; 
        });
    }
}