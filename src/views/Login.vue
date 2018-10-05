<template>
	<!--<div class="login">-->
		<!--<h1 class="text-center">{{ $t('main.welcome') }}</h1>-->
			<!--<div class="sub-title mt__3">{{ $t('auth.email') }}</div>-->
			<!--<el-input-->
				<!--class="mt__15px"-->
				<!--placeholder="Please input"-->
				<!--v-model="email"-->
				<!--clearable>-->
			<!--</el-input>-->

			<!--<div class="sub-title mt__3">{{ $t('auth.password') }}</div>-->
			<!--<el-input-->
				<!--class="mt__15px"-->
				<!--placeholder="Please input"-->
				<!--v-model="password"-->
				<!--clearable>-->
			<!--</el-input>-->
	<!--</div>-->

	<div class="login">
		<el-row>
			<el-col :span="12" :offset="6">
				<el-card :body-style="{ padding: '0px' }" shadow="always">
					<div slot="header" class="clearfix text-center">
						<span>{{ $t('main.welcome') }}</span>
					</div>
					<div style="padding: 14px;">
						<div class="sub-title mt__3">{{ $t('auth.email') }}</div>
						<el-input
							class="mt__15px"
							:placeholder="$t('auth.email')"
							v-model="email"
							clearable>
						</el-input>

						<div class="sub-title mt__3">{{ $t('auth.password') }}</div>
						<el-input
							class="mt__15px"
							:placeholder="$t('auth.password')"
							v-model="password"
							clearable>
						</el-input>
						<div class="bottom center clearfix mt__3">
							<el-button type="primary" plain round @click="auth">{{ $t('auth.login') }}</el-button>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data () {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		auth () {
			this.$store.dispatch('AUTH_LOGIN', {
				email: this.email,
				password: this.password
			})
			.then(() => {
				this.$router.push('/');
			});
		}
	}
};
</script>
