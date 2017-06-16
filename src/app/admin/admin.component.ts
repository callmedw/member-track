import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})

export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(
    name: string,
    organization: string,
    position: string,
    anniversary: string,
    project: string,
    mentorship: string,
    bio: string,
    image: string
  ) {
    const NEWMEMBER: Member = new Member(
      name, organization, position, anniversary, project, mentorship, bio, image);
      this.memberService.addMember(NEWMEMBER);
  }
}
