<template>
	<div id="app" @click="hideSidebar">
		<el-container class="football">
			<el-header>
				<el-col :span="5" class="h-100 d-flex vertical-center">
					<el-button id="menu-button" plain icon="el-icon-menu"></el-button>
				</el-col>
				<el-col :span="19" class="h-100 text-right vertical-center d-flex flex__end">
					<h1>{{ $t('main.footballTitle') }}</h1>
				</el-col>
			</el-header>
			<el-container>
				<transition name="toggleSidebar">
					<el-aside class="tac" id="menu-content" v-show="sidebar">
							<v-navbar></v-navbar>
					</el-aside>
				</transition>
				<el-container>
					<el-main>
						<!--<transition name="routerAnimate">-->
							<router-view/>
						<!--</transition>-->
					</el-main>
					<el-footer>
						<el-col :span="24" class="h-100 vertical-center justify-center">Footer</el-col>
					</el-footer>
					<div class="bg-main">
						<div class="bg-main__overlay"></div>
						<div class="bg-main__top"></div>
						<div class="bg-main__body"></div>
					</div>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import VNavbar from '@/components/VNavbar';
import { mapGetters } from 'vuex';

export default {
	name: 'Root',
	components: { VNavbar },
	computed: {
		...mapGetters({
			error: 'error/getError',
			message: 'notification/getMessage',
			sidebar: 'other/getSidebarStatus'
		})
	},
	methods: {
		// openSidebar () {
		// 	this.$store.dispatch('other/SET_SIDEBAR_STATUS', true);
		// },
		hideSidebar (e) {
			console.log(e.target.className);
			console.log(e.target.className.indexOf('el-menu'));
			if (e.target.id !== 'menu-content') {
				if (e.target.id === 'menu-button' || e.target.parentElement.id === 'menu-button') {
					if (this.sidebar === true) {
						this.$store.dispatch('other/SET_SIDEBAR_STATUS', false);
					} else {
						this.$store.dispatch('other/SET_SIDEBAR_STATUS', true);
					}
				}
				if (e.target.id !== 'menu-button' &&
					e.target.parentElement.id !== 'menu-button' &&
					e.target.className.indexOf('menu') === -1 &&
					e.target.parentElement.className.indexOf('menu') === -1) {
					this.$store.dispatch('other/SET_SIDEBAR_STATUS', false);
				}
			}
		}
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
