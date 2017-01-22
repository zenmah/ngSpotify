import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './shared/spotify.service'


@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {
	SearchText: string;
	artists: any[];
	totalArtists:number;

	constructor(private _spotService: SpotifyService) { }

	ngOnInit() { }

	searchArtists() {
		console.log(this.SearchText);
		if (this.SearchText) {
			this._spotService.searchMusic(this.SearchText).subscribe(results => {
				if (results.artists) {
					this.artists = results.artists.items;
					this.totalArtists = results.artists.total;
					console.log(results.artists.items);
				}
				else{
					this.totalArtists = 0;
				}
			}
			)
		}


	}
}