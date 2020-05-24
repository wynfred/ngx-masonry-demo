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
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages = [];
  limit = 15;

  dummyPictures = [
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
    [false, 'https://source.unsplash.com/579x518/?Virgin Islands (British)'],
    [false, 'https://source.unsplash.com/503x548/?Angola'],
    [false, 'https://source.unsplash.com/511x630/?Mauritania'],
    [false, 'https://source.unsplash.com/414x767/?Sri Lanka'],
    [false, 'https://source.unsplash.com/443x704/?St. Helena'],
    [false, 'https://source.unsplash.com/441x1145/?Namibia'],
    [false, 'https://source.unsplash.com/491x1097/?Samoa'],
    [false, 'https://source.unsplash.com/570x851/?Eritrea'],
    [false, 'https://source.unsplash.com/560x1072/?Iraq'],
    [false, 'https://source.unsplash.com/551x598/?Togo'],
    [false, 'https://source.unsplash.com/518x813/?Romania'],
    [false, 'https://source.unsplash.com/497x524/?Kenya'],
    [false, 'https://source.unsplash.com/549x826/?Martinique'],
    [false, 'https://source.unsplash.com/559x627/?Tokelau'],
    [false, 'https://source.unsplash.com/594x513/?Belize'],
    [false, 'https://source.unsplash.com/480x1181/?Virgin Islands (US)'],
    [false, 'https://source.unsplash.com/526x552/?Chile'],
    [false, 'https://source.unsplash.com/427x504/?Western Sahara'],
    [false, 'https://source.unsplash.com/468x971/?St. Pierre and Miquelon'],
    [false, 'https://source.unsplash.com/419x790/?Thailand'],
    [false, 'https://source.unsplash.com/417x1125/?Myanmar'],
    [false, 'https://source.unsplash.com/480x632/?Cocos (Keeling Islands)'],
    [false, 'https://source.unsplash.com/416x900/?Belarus'],
    [false, 'https://source.unsplash.com/408x837/?Panama'],
    [false, 'https://source.unsplash.com/541x1021/?Slovak Republic'],
    [false, 'https://source.unsplash.com/597x1107/?Malta'],
    [false, 'https://source.unsplash.com/487x842/?Bahrain'],
    [false, 'https://source.unsplash.com/403x904/?Somalia'],
    [false, 'https://source.unsplash.com/544x515/?Morocco'],
    [false, 'https://source.unsplash.com/577x1044/?Djibouti'],
    [false, 'https://source.unsplash.com/404x437/?France, Metropolitan'],
    [false, 'https://source.unsplash.com/482x1079/?Libya'],
    [false, 'https://source.unsplash.com/473x887/?Bolivia'],
    [false, 'https://source.unsplash.com/583x614/?Kazakhstan'],
    [false, 'https://source.unsplash.com/592x838/?Guyana'],
    [false, 'https://source.unsplash.com/422x731/?Switzerland'],
    [false, 'https://source.unsplash.com/448x985/?Venezuela'],
    [false, 'https://source.unsplash.com/494x936/?Uzbekistan'],
    [false, 'https://source.unsplash.com/461x762/?Benin'],
    [false, 'https://source.unsplash.com/550x676/?Palau'],
    [false, 'https://source.unsplash.com/524x901/?Laos'],
    [false, 'https://source.unsplash.com/594x1199/?French Southern Territories'],
    [false, 'https://source.unsplash.com/557x662/?Malawi'],
    [false, 'https://source.unsplash.com/428x1184/?Swaziland'],
    [false, 'https://source.unsplash.com/433x631/?Lithuania'],
    [false, 'https://source.unsplash.com/523x477/?Sweden'],
    [false, 'https://source.unsplash.com/568x443/?Bahamas'],
    [false, 'https://source.unsplash.com/434x448/?United Arab Emirates'],
    [false, 'https://source.unsplash.com/566x740/?Puerto Rico'],
    [false, 'https://source.unsplash.com/481x580/?Nicaragua'],
    [false, 'https://source.unsplash.com/470x761/?Viet Nam'],
    [false, 'https://source.unsplash.com/519x954/?Australia'],
    [false, 'https://source.unsplash.com/405x1030/?Marshall Islands'],
    [false, 'https://source.unsplash.com/587x1059/?Falkland Islands (Malvinas)'],
    [false, 'https://source.unsplash.com/593x907/?Montserrat'],
    [false, 'https://source.unsplash.com/462x729/?British Indian Ocean Territory'],
    [false, 'https://source.unsplash.com/538x610/?Norway'],
    [false, 'https://source.unsplash.com/506x1057/?Malaysia'],
    [false, 'https://source.unsplash.com/588x756/?Anguilla'],
    [false, 'https://source.unsplash.com/468x1047/?Senegal'],
    [false, 'https://source.unsplash.com/574x498/?Zaire'],
    [false, 'https://source.unsplash.com/594x635/?Ireland'],
    [false, 'https://source.unsplash.com/448x759/?Nauru'],
    [false, 'https://source.unsplash.com/540x619/?Mayotte'],
    [false, 'https://source.unsplash.com/552x438/?Syria'],
    [false, 'https://source.unsplash.com/563x759/?Ghana'],
    [false, 'https://source.unsplash.com/569x1171/?Austria'],
    [false, 'https://source.unsplash.com/581x657/?Macau'],
    [false, 'https://source.unsplash.com/539x1013/?Mozambique'],
    [false, 'https://source.unsplash.com/581x477/?Liechtenstein'],
    [false, 'https://source.unsplash.com/495x589/?Saint Vincent and The Grenadines'],
    [false, 'https://source.unsplash.com/579x680/?Brazil'],
    [false, 'https://source.unsplash.com/467x642/?Turks and Caicos Islands'],
    [false, 'https://source.unsplash.com/496x1186/?Italy'],
    [false, 'https://source.unsplash.com/416x844/?Reunion'],
    [false, 'https://source.unsplash.com/442x569/?Sierra Leone'],
    [false, 'https://source.unsplash.com/517x1084/?Northern Mariana Islands'],
    [false, 'https://source.unsplash.com/431x1164/?Belgium'],
    [false, 'https://source.unsplash.com/541x649/?Netherlands'],
    [false, 'https://source.unsplash.com/491x902/?Korea (South)'],
    [false, 'https://source.unsplash.com/534x778/?Guinea'],
    [false, 'https://source.unsplash.com/528x933/?Tunisia'],
    [false, 'https://source.unsplash.com/441x609/?Tonga'],
    [false, 'https://source.unsplash.com/469x1060/?Equatorial Guinea'],
    [false, 'https://source.unsplash.com/588x794/?S. Georgia and S. Sandwich Isls.'],
    [false, 'https://source.unsplash.com/536x1103/?Algeria'],
    [false, 'https://source.unsplash.com/541x821/?Israel'],
    [false, 'https://source.unsplash.com/414x541/?Bulgaria'],
    [false, 'https://source.unsplash.com/477x879/?Turkmenistan'],
    [false, 'https://source.unsplash.com/450x777/?Croatia (Hrvatska)'],
    [false, 'https://source.unsplash.com/528x978/?Cook Islands'],
    [false, 'https://source.unsplash.com/521x686/?Solomon Islands'],
    [false, 'https://source.unsplash.com/550x432/?Bosnia and Herzegovina'],
    [false, 'https://source.unsplash.com/540x631/?Tanzania'],
    [false, 'https://source.unsplash.com/594x443/?Chad']
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
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }
}
