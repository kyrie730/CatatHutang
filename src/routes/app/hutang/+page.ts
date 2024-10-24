// src/routes/+page.ts
import { supabase } from '$lib/supabase'; // Import Supabase client
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { get } from 'svelte/store';
import { sessionStore } from '$lib/Store';

export const load: PageLoad = async () => {
	const { data } = await supabase.auth.getSession();

	const { data: eventList, error } = await supabase
		.from('TrEvents')
		.select('*')
		.eq('creator_id', data.session?.user?.id);

	if (error) {
		console.error('Error fetching events:', error.message);
		return { events: [] };
	}

	return { events: eventList };
};
