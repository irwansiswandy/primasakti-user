import MyAxios from './axios.js';

const ResourcesPlugin = {
	// This handles resources for 'queues'.
	queues: {
		api: {
			url: '/customer_queues',
			params: {
				includes: 'user,admin'
			}
		},
		get(id) {
			if (!id) {
				return MyAxios.get(this.api.url, {
					params: this.api.params
				});
			}
			else {
				return MyAxios.get(this.api.url + '/' + id, {
					params: this.api.params
				});
			}
		}
	},
	// This handles resources for 'business_hours'.
	business_hours: {
		api: {
			url: '/business_hours'
		},
		get(id) {
			if (!id) {
				return MyAxios.get(this.api.url);
			}	
			else {
				return MyAxios.get(this.api.url + '/' + id);
			}
		}
	}
};

export default ResourcesPlugin;