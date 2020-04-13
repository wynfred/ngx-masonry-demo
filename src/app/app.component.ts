import { Component, OnInit, ViewChild } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages: string[];
  limit = 15;

  dummyPictures = [
    'https://source.unsplash.com/433x649/?Uruguay',
    'https://source.unsplash.com/530x572/?Jamaica',
    'https://source.unsplash.com/531x430/?Kuwait',
    'https://source.unsplash.com/586x1073/?Bermuda',
    'https://source.unsplash.com/500x571/?Ecuador',
    'https://source.unsplash.com/579x518/?Virgin Islands (British)',
    'https://source.unsplash.com/503x548/?Angola',
    'https://source.unsplash.com/511x630/?Mauritania',
    'https://source.unsplash.com/414x767/?Sri Lanka',
    'https://source.unsplash.com/443x704/?St. Helena',
    'https://source.unsplash.com/441x1145/?Namibia',
    'https://source.unsplash.com/491x1097/?Samoa',
    'https://source.unsplash.com/570x851/?Eritrea',
    'https://source.unsplash.com/560x1072/?Iraq',
    'https://source.unsplash.com/551x598/?Togo',
    'https://source.unsplash.com/518x813/?Romania',
    'https://source.unsplash.com/497x524/?Kenya',
    'https://source.unsplash.com/549x826/?Martinique',
    'https://source.unsplash.com/559x627/?Tokelau',
    'https://source.unsplash.com/594x513/?Belize',
    'https://source.unsplash.com/480x1181/?Virgin Islands (US)',
    'https://source.unsplash.com/526x552/?Chile',
    'https://source.unsplash.com/427x504/?Western Sahara',
    'https://source.unsplash.com/468x971/?St. Pierre and Miquelon',
    'https://source.unsplash.com/419x790/?Thailand',
    'https://source.unsplash.com/417x1125/?Myanmar',
    'https://source.unsplash.com/480x632/?Cocos (Keeling Islands)',
    'https://source.unsplash.com/416x900/?Belarus',
    'https://source.unsplash.com/408x837/?Panama',
    'https://source.unsplash.com/541x1021/?Slovak Republic',
    'https://source.unsplash.com/597x1107/?Malta',
    'https://source.unsplash.com/487x842/?Bahrain',
    'https://source.unsplash.com/403x904/?Somalia',
    'https://source.unsplash.com/544x515/?Morocco',
    'https://source.unsplash.com/577x1044/?Djibouti',
    'https://source.unsplash.com/404x437/?France, Metropolitan',
    'https://source.unsplash.com/482x1079/?Libya',
    'https://source.unsplash.com/473x887/?Bolivia',
    'https://source.unsplash.com/583x614/?Kazakhstan',
    'https://source.unsplash.com/592x838/?Guyana',
    'https://source.unsplash.com/422x731/?Switzerland',
    'https://source.unsplash.com/448x985/?Venezuela',
    'https://source.unsplash.com/494x936/?Uzbekistan',
    'https://source.unsplash.com/461x762/?Benin',
    'https://source.unsplash.com/550x676/?Palau',
    'https://source.unsplash.com/524x901/?Laos',
    'https://source.unsplash.com/594x1199/?French Southern Territories',
    'https://source.unsplash.com/557x662/?Malawi',
    'https://source.unsplash.com/428x1184/?Swaziland',
    'https://source.unsplash.com/433x631/?Lithuania',
    'https://source.unsplash.com/523x477/?Sweden',
    'https://source.unsplash.com/568x443/?Bahamas',
    'https://source.unsplash.com/434x448/?United Arab Emirates',
    'https://source.unsplash.com/566x740/?Puerto Rico',
    'https://source.unsplash.com/481x580/?Nicaragua',
    'https://source.unsplash.com/470x761/?Viet Nam',
    'https://source.unsplash.com/519x954/?Australia',
    'https://source.unsplash.com/405x1030/?Marshall Islands',
    'https://source.unsplash.com/587x1059/?Falkland Islands (Malvinas)',
    'https://source.unsplash.com/593x907/?Montserrat',
    'https://source.unsplash.com/462x729/?British Indian Ocean Territory',
    'https://source.unsplash.com/538x610/?Norway',
    'https://source.unsplash.com/506x1057/?Malaysia',
    'https://source.unsplash.com/588x756/?Anguilla',
    'https://source.unsplash.com/468x1047/?Senegal',
    'https://source.unsplash.com/574x498/?Zaire',
    'https://source.unsplash.com/594x635/?Ireland',
    'https://source.unsplash.com/448x759/?Nauru',
    'https://source.unsplash.com/540x619/?Mayotte',
    'https://source.unsplash.com/552x438/?Syria',
    'https://source.unsplash.com/563x759/?Ghana',
    'https://source.unsplash.com/569x1171/?Austria',
    'https://source.unsplash.com/581x657/?Macau',
    'https://source.unsplash.com/539x1013/?Mozambique',
    'https://source.unsplash.com/581x477/?Liechtenstein',
    'https://source.unsplash.com/495x589/?Saint Vincent and The Grenadines',
    'https://source.unsplash.com/579x680/?Brazil',
    'https://source.unsplash.com/467x642/?Turks and Caicos Islands',
    'https://source.unsplash.com/496x1186/?Italy',
    'https://source.unsplash.com/416x844/?Reunion',
    'https://source.unsplash.com/442x569/?Sierra Leone',
    'https://source.unsplash.com/517x1084/?Northern Mariana Islands',
    'https://source.unsplash.com/431x1164/?Belgium',
    'https://source.unsplash.com/541x649/?Netherlands',
    'https://source.unsplash.com/491x902/?Korea (South)',
    'https://source.unsplash.com/534x778/?Guinea',
    'https://source.unsplash.com/528x933/?Tunisia',
    'https://source.unsplash.com/441x609/?Tonga',
    'https://source.unsplash.com/469x1060/?Equatorial Guinea',
    'https://source.unsplash.com/588x794/?S. Georgia and S. Sandwich Isls.',
    'https://source.unsplash.com/536x1103/?Algeria',
    'https://source.unsplash.com/541x821/?Israel',
    'https://source.unsplash.com/414x541/?Bulgaria',
    'https://source.unsplash.com/477x879/?Turkmenistan',
    'https://source.unsplash.com/450x777/?Croatia (Hrvatska)',
    'https://source.unsplash.com/528x978/?Cook Islands',
    'https://source.unsplash.com/521x686/?Solomon Islands',
    'https://source.unsplash.com/550x432/?Bosnia and Herzegovina',
    'https://source.unsplash.com/540x631/?Tanzania',
    'https://source.unsplash.com/594x443/?Chad'
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }
}
