import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) { }

  memberId: number = null;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });
  }
}
