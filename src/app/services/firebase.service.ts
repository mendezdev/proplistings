import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Listing } from '../interfaces/listing.interface';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire
  ) { }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>

    return this.listings;
  }

}
