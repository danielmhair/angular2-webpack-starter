import { Component, Input } from '@angular/core';
import { Link } from "./Link";

@Component({
  selector: 'bootstrap-navbar',
  styleUrls: ['./bootstrap-navbar.css'],
  templateUrl: './bootstrap-navbar.html'
})
export class BootstrapNavbarComponent {
  @Input() brand: Link;
  @Input() leftLinks: Link[];
  @Input() rightLinks: Link[];
}
