import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../storage/service/storage.service';

@Injectable()
export class AuthService {
	profiledata;
	private isAuthenticatedSubject: BehaviorSubject<boolean>;
	constructor(private storageService: StorageService) {
		const hasToken = Boolean(this.storageService.getToken());
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(hasToken);
	}

	public isAuthenticated(): Observable<boolean> {
		return this.isAuthenticatedSubject.asObservable();
	}

	public refreshIsAuthenticated() {
		const hasToken = Boolean(this.storageService.getToken());
		this.isAuthenticatedSubject.next(hasToken);
	}
}
