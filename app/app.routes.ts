import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './components/about/about.component'
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component'
import { AlbumComponent } from './components/album/album.component'

const AppRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes)
