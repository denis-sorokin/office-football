import Vue from 'vue';
import Vuex from 'vuex';
import VuexI18n from 'vuex-i18n';

/* modules */
import auth from './modules/auth';
import notification from './modules/notification';
import error from './modules/errors';
import other from './modules/other';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true, // process.env.NODE_ENV !== 'production',
	modules: {
		auth,
		notification,
		error,
		other
	}
});

const config = {
	translateFilterName: 't'
};

Vue.use(VuexI18n.plugin, store, config);

export default store;
