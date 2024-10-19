// src/routes/+page.ts
import { supabase } from '$lib/supabase'; // Import Supabase client
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const insertUser = await supabase.from('users').select('*');

	if (insertUser.error) {
		console.error('Error fetching users:', insertUser.error);
		return { users: [] }; // Return an empty array in case of error
	}

	return { users: insertUser.data };
};
