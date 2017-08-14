import { Injectable } from '@angular/core';

import { Label } from './label';
import { CssList } from './data';
import { HtmlList } from './data';
import { Article } from './data';

@Injectable()
export class DataService {
	demos:Label[]=CssList;
	demo:Label;
	getLabels(x): Promise<Label[]> {
		switch (x){
			case 'CSS':
				return Promise.resolve(CssList);
			case 'HTML':
				return Promise.resolve(HtmlList);
			case 'Article':
				return Promise.resolve(Article);
			default:
				return Promise.resolve(CssList);
		}
	}
}