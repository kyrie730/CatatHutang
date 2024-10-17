<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	const session = supabase.auth.getSession();
	console.log(session);
	if (!session) {
		// If no session exists, redirect to login page
		goto('/login');
	} else {
		goto('/users');
	}
</script>

<a href="/users" class="text-3xl">go to users</a>
<a href="/login" class="text-5xl text-primary-500">go to login</a>
