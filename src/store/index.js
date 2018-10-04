import Vue from 'vue';
import Vuex from 'vuex';
import VuexI18n from 'vuex-i18n';

/* modules */
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true, // process.env.NODE_ENV !== 'production',
	modules: {
		auth
	}
});

const config = {
	translateFilterName: 't'
};

Vue.use(VuexI18n.plugin, store, config);

export default store;
