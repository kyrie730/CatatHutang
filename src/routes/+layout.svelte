<script>
	import '../app.css'; // Import your CSS here
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (location.pathname == '/') goto('/app/users');
	});
</script>

<slot />
