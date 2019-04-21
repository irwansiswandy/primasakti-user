import MyAxios from './axios.js';

const ResourcesPlugin = {
	// This handles resources for 'queues'.
	queues: {
		api: {
			url: '/customer_queues',
			params: {
				includes: 'customer,admin'
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
	},
	// This handles resources for 'public_holidays'.
	public_holidays: {
		api: {
			url: '/public_holidays',
			params: {}
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
	}
};

export default ResourcesPlugin;
