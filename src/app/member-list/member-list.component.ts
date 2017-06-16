import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  members: Member[] = [
    new Member("Beyonce", "Beyonce Inc.",
      "New Member Coordinator", "01/01/2017", "n/a", "available", "lotsa cool stuff here", "https://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/12/beyonce-121313.jpg"),
    new Member("Malala Yousafzai", "Malala Fund",
      "Education and Outreach Coordinator", "01/01/2017", "n/a", "available", "lotsa cool stuff here", "http://prod-upp-image-read.ft.com/b8649f28-6139-11e3-916e-00144feabdc0"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
