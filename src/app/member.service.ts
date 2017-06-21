import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  memberId: string;
  memberToDisplay: Member;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember) {
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                organization: localUpdatedMember.organization,
                                position: localUpdatedMember.position,
                                anniversary: localUpdatedMember.anniversary,
                                project: localUpdatedMember.project,
                                mentorship: localUpdatedMember.mentorship,
                                bio: localUpdatedMember.bio,
                                image: localUpdatedMember.image
    });
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
