import { sessionStore } from '$lib/Store';
import { supabase } from '$lib/supabase';
import { get } from 'svelte/store';

export const load = async () => {
	try {
		// Fetch session from Supabase (this checks localStorage automatically)
		const { data, error } = await supabase.auth.getSession();
		const storeSession = get(sessionStore);

		if (error) {
			console.error('Error retrieving session from layout:', error.message);
			return { session: null };
		}

		// Check if session exists
		const session = data.session;
		if (
			session?.user?.id !== storeSession?.user?.id ||
			session?.access_token !== storeSession?.access_token
		) {
			console.log('Session has changed:', session, 'Store session:', storeSession);
			sessionStore.set(session); // Update the store if session has changed
		}

		return { session }; // Return session for use in the layout
	} catch (err) {
		console.error('Error during session retrieval:', err);
		return { session: null };
	}
};
