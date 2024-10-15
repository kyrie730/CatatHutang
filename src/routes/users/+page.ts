// src/routes/+page.ts
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase'; // Import Supabase client

export const load: PageLoad = async () => {
	const { data, error } = await supabase.from('users').select('*');

	if (error) {
		console.error('Error fetching users:', error);
		return { users: [] }; // Return an empty array in case of error
	}

	return { users: data };
};
