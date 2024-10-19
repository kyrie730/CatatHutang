<script>
	import { goto } from '$app/navigation';
	import { sessionStore } from '$lib/Store';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	let session = get(sessionStore);
	onMount(() => {
		if (!session) {
			console.log('User is not logged in from layout');
			goto('/login');
		} else {
			console.log('User email:', session.user.email);
		}
	});
</script>

<slot />
