import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css'],
  providers: [MemberService]
})
export class UpdateMemberComponent implements OnInit {
  updateForm: boolean = false;
  @Input() selectedMember;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showUpdateForm() {
    if(this.updateForm === true) {
      this.updateForm = false;
    } else {
      this.updateForm = true;
    }
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
      if(confirm("Are you sure you want to delete this member?")){
        this.memberService.deleteMember(memberToDelete);
      }
    }
}
