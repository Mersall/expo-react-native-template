import { ENDPOINTS } from '../../api/EndPoints';
import { Network } from '../../api/Network';

export class User {
	static login(data) {
		return Network.fetch(
			ENDPOINTS.userlogin.url,
			{
				body: JSON.stringify(data),
				method: ENDPOINTS.userlogin.method,
			},
			false
		);
	}
}
