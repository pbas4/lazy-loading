import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppServices {

    private subject = new Subject();

    subjectReciver$ = this.subject.asObservable();

    emitSubject(data) {
      this.subject.next(data);
    }

}
