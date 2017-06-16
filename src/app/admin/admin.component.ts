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
  addForm: boolean = false;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
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
