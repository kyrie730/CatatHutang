<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';

	onMount(() => {
		if (location.pathname == '/') goto('/app/users');
	});

	initializeStores();
</script>

<Toast position="t" />
<slot />
