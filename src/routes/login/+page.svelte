<script lang="ts">
	let username = '';
	let password = '';

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		// Implement your login logic here
		console.log('Username:', username);
		console.log('Password:', password);
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
		<div class="flex flex-col items-center justify-center text-center gap-8 p-8 h-full">
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-bold">LOGIN</div>
				<div class="text-sm text-gray-500">Note your friends debt on CatatHutang!</div>
			</div>
			<form on:submit={handleSubmit} class="form-group w-full flex flex-col gap-8">
				<div class="gap-4 flex flex-col">
					<input
						type="text"
						id="username"
						bind:value={username}
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
				</div>
				<div>
					<div class="four columns">
						<button type="submit" class="btn variant-filled-primary text-white">Sign In</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
