import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'color',
	templateUrl: './color.component.html',
	styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
	constructor() {}

	content = `
$red-ribbon: #db0a2a;

$silver-chalice: #a6a6a6;
$silver-chalice: #a9a9a9;
$scorpion: #606060;
$alto: #e0e0e0;
$wild-sand: #f7f7f7;
$gallery: #eeeeee;
$mine-shaft: #333132;

$white: #fdfdfd;
$white: #ffffff;

$lightning-yellow: #fbb829;
`;

	ngOnInit(): void {}
}
