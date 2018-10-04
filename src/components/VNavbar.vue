<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical"
		@open="handleOpen"
		@close="handleClose">
		<el-menu-item v-for="(el, index) in defaultRoutes()" :index="index.toString()" :key="index">
			<i class="el-icon-caret-right"></i>
			<span>{{ $t(`nav.${el.name}`) }}</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
import authGate from '@/utilites/checkPermissions';

export default {
	name: 'vNavbar',
	computed: {
		defaultRoutes () {
			return this.user && this.user.username ? () => {
				// eslint-disable-next-line eqeqeq
				const footballResolution = authGate.check(this.user.permission, 3, 1) == 1;

				const defaultRoutes = [{
					name: 'home',
					redirectTo: 'home'
				},
				{
					name: 'about',
					redirectTo: 'about'
				}];

				if (footballResolution) {
					defaultRoutes.push({
						name: 'football',
						redirectTo: 'football'
					});
				}

				defaultRoutes.push({
					name: 'logout',
					redirectTo: 'logout'
				});

				return defaultRoutes;
			} : () => {
				return [
					{
						name: 'login',
						redirectTo: 'login'
					},
					{
						name: 'signUp',
						redirectTo: 'signUp'
					}
				];
			};
		}
	},
	methods: {
		handleOpen (key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose (key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
