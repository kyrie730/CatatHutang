<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	onMount(() => {
		if (location.pathname == '/') goto('/app/users');
	});

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Toast position="t" />
<slot />
