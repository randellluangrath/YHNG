import { Component, OnInit } from '@angular/core';
import { ISubject } from '@fcs/app/domain/models/subject';
import { MockDataService } from '@fcs/app/services/mock-data.service';

@Component({
  selector: 'yh-sar-subjects',
  templateUrl: './sar-subjects.component.html',
  styleUrls: ['./sar-subjects.component.scss'],
})
export class SarSubjectsComponent implements OnInit {
  source: ISubject[] = Array.from(new Array(0), (value, key) => {
    return this.mock.createSubject(key);
  });

  subjects: ISubject[] = [];

  showLookupDrawer: boolean;

  constructor(private mock: MockDataService) {}

  ngOnInit(): void {
    if (this.source.length > 0) {
      this.subjects = [this.source[0], this.source[1], this.source[2]];
    }
  }
}
