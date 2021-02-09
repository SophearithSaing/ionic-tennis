import { Component, OnInit } from '@angular/core';
import { TennisService } from '../tennis.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  rankings = [];
  loading = false;
  displayedColumns: string[] = ['ranking', 'name', 'country', 'points'];

  constructor(private tennisService: TennisService) { }

  ngOnInit(): void {
    this.loading = true;
    this.tennisService.getRankings().subscribe(data => {
      this.rankings = data.results.rankings;
      this.loading = false;
    });
  }

}
