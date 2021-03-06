import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { Listing } from '../../interfaces/listing.interface';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;

  constructor(
    private fbService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type,
      image: this.image
    };

    this.fbService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
