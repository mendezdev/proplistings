import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Listing } from '../interfaces/listing.interface';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<Listing>;
  folder: any;

  constructor(
    private af: AngularFire
  ) { 
    this.folder = 'listing-images';
  }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>

    return this.listings;
  }

  getListingDetails(id:any){
    this.listing = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>;

    return this.listing;
  }

  addListing(listing:any){
    let storageRef = firebase.storage().ref();

    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]] ){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

}
