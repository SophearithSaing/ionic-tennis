import { Component, OnInit } from '@angular/core';
import { TennisService } from '../tennis.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  loading = false;
  tournaments = [];

  constructor(private tennisService: TennisService) { }

  ngOnInit(): void {
    this.loading = true;
    this.tennisService.getTournaments().subscribe(data => {
      this.tournaments = data.results;
      this.loading = false;
    });
  }

  toggleShowMatches = (index: number) => {
    this.tournaments[index].showMatches = !this.tournaments[index].showMatches;
    console.log(this.tournaments);
  }

  formatDate = (date: string) => {
    const dateArr = date.split('-');
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  }

}
