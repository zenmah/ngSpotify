import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Artist, Album} from  '../search/shared/spotify.model'
import {SpotifyService} from   '../search/shared/spotify.service'

@Component({
	moduleId: module.id,
	selector: 'artist',
	templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit {
	id:string;
	artist:Artist;
	albums:Album[];

	constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){}
	ngOnInit() { 
		this._route.params
								.map(params => params["id"])
								.subscribe(id => {
									this._spotifyService.getArtist(id)
										.subscribe(result => {
											this.artist = result
										});
									 this._spotifyService.getAlbums(id)
										.subscribe(result => {
											console.log("Albums: " + result.items);
											this.albums = result.items
										});
								})

	}
}