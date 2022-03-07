import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { INaicsCode, naicsCodes } from '@fcs/app/domain/models/naics';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'yh-naics-lookup',
  templateUrl: './naics-lookup.component.html',
  styleUrls: ['./naics-lookup.component.scss'],
})
export class NaicsLookupComponent implements OnInit {
  @Input()
  disabledCodes: INaicsCode[];

  @Input()
  codes: INaicsCode[];

  @Output()
  selected: EventEmitter<INaicsCode[]> = new EventEmitter<INaicsCode[]>();

  selectedCodes: TreeNode[] = [];
  treeData: TreeNode[] = [];

  cols: any[] = [
    { field: 'code', header: 'Code' },
    { field: 'description', header: 'Description' },
  ];

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });
    this.treeData = naicsCodes.map((c: INaicsCode) => {
      return {
        data: c,
        children: c.children
          ? c.children.map((child: INaicsCode) => {
              return {
                data: child,
              };
            })
          : [],
      };
    });
  }

  nodeSelect(event): void {
    this.selected.emit(this.selectedCodes.map((n) => n.data));

    console.log(this.selectedCodes.length);
  }

  nodeUnselect(event): void {
    this.selected.emit(null);
  }

  isRowSelected(rowNode: any): boolean {
    return this.selectedCodes.indexOf(rowNode) >= 0;
  }

  toggleRowSelection(rowNode: any): void {
    if (this.isRowSelected(rowNode)) {
      this.selectedCodes.splice(this.selectedCodes.indexOf(rowNode.node), 1);
    } else {
      this.selectedCodes.push(rowNode.node);
    }

    this.selectedCodes = [...this.selectedCodes];

    console.log(this.selectedCodes.length);
  }
}
