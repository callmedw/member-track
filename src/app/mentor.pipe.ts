import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'mentor',
  pure: false
})
export class MentorPipe implements PipeTransform {

  transform(input: Member[], canMentor) {
    var output: Member[] = [];
    if(canMentor === "Available") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mentorship === "Available") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (canMentor === "Unavailable") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mentorship === "Unavailable") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
