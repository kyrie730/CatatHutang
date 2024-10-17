// src/routes/+page.ts
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'; // Import Supabase client
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	const insertUser = await supabase.from('users').select('*');
	const session = await supabase.auth.getSession();

	if (!session.data.session) {
		throw redirect(302, '/login'); // Redirect to the login page if no session
		return;
	}
	if (insertUser.error) {
		console.error('Error fetching users:', insertUser.error);
		return { users: [] }; // Return an empty array in case of error
	}

	return { users: insertUser.data };
};
