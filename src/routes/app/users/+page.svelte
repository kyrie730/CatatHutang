<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { SignOut } from '$lib/Repository/Auth/Repository';
	import { sessionStore } from '$lib/Store';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let data: { users: { id: number; name: string; email: string }[]; error: string | null }; // Include error in the type
	const handleLogout = async () => {
		const result = await SignOut();

		if (result.error) {
			console.error('Logout Error:', result.error);
		} else {
			goto('/login');
		}
	};
	let session = get(sessionStore);

	// Example usage: show user's email if logged in
	// onMount(() => {
	// 	if (!session) {
	// 		console.log('User is not logged in');
	// 	} else {
	// 		console.log('User email:', session.user.email);
	// 	}
	// });
</script>

<button class="text-5xl cursor-pointer" on:click={handleLogout}>LOGOUT</button>
<h1>User List</h1>

<!-- Display the list of users -->
<ul>
	{#each data.users as user}
		<li class="text-primary-500">{user.name} - {user.email}</li>
	{/each}
</ul>

<!-- Display error if it exists -->
{#if data.error}
	<p style="color: red;">Error: {data.error}</p>
{/if}

<!-- Form to add a new user -->
<form method="POST" action="?/addUser">
	<label>
		Name:
		<input type="text" name="name" required />
	</label>

	<label>
		Email:
		<input type="email" name="email" required />
	</label>

	<button type="submit">Add User</button>
</form>
