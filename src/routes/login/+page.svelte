<script lang="ts">
	import { goto } from '$app/navigation';
	import { SignIn, SignUp } from '$lib/Repository/Auth/Repository';
	import { supabase } from '$lib/supabase';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let name = '';
	let errorMessage = '';
	let isRegistering = false;
	let viewPassword = false;

	const handleRegister = async (event: Event) => {
		event.preventDefault();
		errorMessage = '';
		const { error } = await SignUp({ email, password, name });
		if (error) errorMessage = error;
	};

	const handleLogin = async (event: Event) => {
		event.preventDefault();
		errorMessage = '';
		const { user, error } = await SignIn({ email, password });
		if (error) errorMessage = error;
		if (user) goto('/users');
	};

	const checkSession = async (event: Event) => {
		event.preventDefault();
		const { data, error } = await supabase.auth.getSession();
		console.log(data.session);
	};
</script>

<div class="flex h-screen">
	<div class="w-2/3">
		<img src="src\lib\assets\il_login.jpg" alt="login" class="h-full w-full" />
	</div>
	<div class="flex flex-col w-1/3 bg-surface-500">
		<div class="h-auto text-right px-4 py-2">
			<p class="text-4xl font-bold text-primary-700">CatatHutang</p>
		</div>
		<div class={`flex flex-col items-center justify-center text-center gap-8 p-8 h-full`}>
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-bold">{isRegistering ? 'REGISTER' : 'LOGIN'}</div>
				<div class="text-sm text-gray-500">Note your friends debt on CatatHutang!</div>
			</div>
			<form
				on:submit={isRegistering ? handleRegister : handleLogin}
				class="form-group w-full flex flex-col gap-8"
			>
				<div class="gap-4 flex flex-col">
					<input
						type="text"
						id="name"
						bind:value={name}
						required={isRegistering}
						class={`input bg-primary-50 ${!isRegistering && 'hidden'}`}
						placeholder="Display Name"
					/>

					<input
						type="text"
						id="email"
						bind:value={email}
						required
						class="input bg-primary-50"
						placeholder="Username"
					/>

					<input
						type="password"
						id="password"
						bind:value={password}
						required
						class="input bg-primary-50"
						placeholder="Password"
					/>

					<input
						type="password"
						id="confirmPassword"
						bind:value={confirmPassword}
						required={isRegistering}
						class={`input bg-primary-50 ${!isRegistering && 'hidden'}`}
						placeholder="Confirm Password"
					/>
				</div>
				<button type="submit" class="btn variant-filled-primary text-white">
					{isRegistering ? 'Register' : 'Sign In'}
				</button>
				<!-- <button on:click={checkSession}>checkSession</button> -->
				<button
					on:click={() => {
						isRegistering = !isRegistering;
					}}
					class="text-primary-700 hover:underline mt-4"
				>
					{isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
				</button>
			</form>
		</div>
	</div>
</div>
