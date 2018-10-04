<template>
	<div id="app">
		<el-container class="football">
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
					<el-main>
						<router-view/>
					</el-main>
					<el-footer>Footer</el-footer>
					<div class="bg-main bg-main__overlay">
						<div class="bg-main__top"></div>
						<div class="bg-main__body"></div>
					</div>

				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
// import Navbar from './components/feature/Navbar';
import { mapGetters } from 'vuex';

export default {
	name: 'Root',
	// components: { Navbar },
	computed: {
		...mapGetters({
			error: 'getError',
			message: 'getMessage'
		})
	},
	methods: {
		// hideSidebar (e) {
		// 	if (!(e.target.id === 'logoProfile') && !(e.target.id === 'menuProfile')) {
		// 		this.$store.dispatch('SET_SIDEBAR_STATUS', false);
		// 	}
		// }
	},
	watch: {
		'error': function (val) {
			if (val != null) {
				const detail = val.detail;
				// const msg = typeof val.msg === 'number'
				// 	? this.$t(`serverMsg.errors.${val.msg}`, this.$t('serverMsg.errors.0')) : null;
				// this.showToast(msg, {
				// 	icon: 'fa-exclamation-triangle',
				// 	position: 'top-right',
				// 	duration: 5000,
				// 	className: 'error-toastr'
				// });

				if (detail) {
					detail.forEach(e => {
						// this.showToast(this.$t(`serverMsg.libErrors.${e}`, e), {
						// 	icon: 'fa-exclamation-triangle',
						// 	position: 'top-right',
						// 	duration: 5000,
						// 	className: 'error-toastr'
						// });
					});
				}
				this.$store.dispatch('ERROR_CLEAR');
			}
		},
		'message': function (val) {
			if (val != null) {
				const msg = typeof val.msg === 'number'
					? this.$t(`serverMsg.notifications.${val.msg}`, 'serverMsg.notifications.0') : null;

				if (msg != null) {
					// this.showToast(msg, {
					// 	icon: 'fa-check-circle',
					// 	position: 'top-right',
					// 	duration: 5000,
					// 	className: 'success-toastr'
					// });
					this.$store.dispatch('MSG_CLEAR');
				}
			}
		}
	}
};
</script>
<style lang="scss">
	@import 'styles/main';
</style>
