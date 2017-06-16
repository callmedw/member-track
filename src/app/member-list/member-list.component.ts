import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})

export class MemberListComponent implements OnInit {
  constructor(private router: Router, private memberService: MemberService) { }
  members: Member[] = [];

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['members', clickedMember.id]);
  };
}
