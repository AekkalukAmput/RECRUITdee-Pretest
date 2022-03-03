import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})
export class Q2Component implements OnInit {
  masterData: any[] = [];
  dataTable: any[] = [];
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.getData().subscribe((res: any) => {
      this.masterData = res.categories;
      this.dataTable = this.masterData;
    });
  }

  filter(event: any) {
    this.dataTable = this.masterData.filter((x: string) => x?.toLowerCase()?.includes(event?.target?.value?.toLowerCase()));
  }

}
