import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { environment } from 'src/environments/environment';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule]
})
export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.http.get(`${environment.graphEndpoint}/v1.0/me`).subscribe(profile => { this.profile = profile; });
  }

  logProfile() {
    console.log(this.profile);
  }
}
