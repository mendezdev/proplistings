import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Listing } from '../interfaces/listing.interface';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<Listing>;

  constructor(
    private af: AngularFire
  ) { }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>

    return this.listings;
  }

  getListingDetails(id:any){
    this.listing = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>;

    return this.listing;
  }

}
