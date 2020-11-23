import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
	selector: 'star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {
	stars = [new star(), new star(), new star(), new star(), new star()];
	@Output() onRatingEvent = new EventEmitter<number>();
	constructor() {}

	ngOnInit(): void {}

	getImage(star: star) {
		return star.active
			? '../../../../assets/image/icons/star_active.png'
			: '../../../../assets/image/icons/star_inactive.png';
	}

	onStarClicked(star: star, i) {
		if (star.active) {
			this.stars.forEach((starInArray: star, indexInArray) => {
				if (indexInArray >= i) {
					starInArray.active = false;
				}
			});
		} else {
			this.stars.forEach((starInArray: star, indexInArray) => {
				if (indexInArray <= i) {
					starInArray.active = true;
				}
			});
		}

		this.onRatingEvent.emit(this.countActiveStar());
	}

	countActiveStar(): number {
		return this.stars.filter((star) => star.active).length;
	}
}

class star {
	active: boolean;
}
