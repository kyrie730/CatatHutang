import { sessionStore } from '$lib/Store';
import { supabase } from '$lib/supabase';
import { get } from 'svelte/store';

export const load = async () => {
	try {
		const { data, error } = await supabase.auth.getSession();
		const storeSession = get(sessionStore);

		if (error) {
			console.error('Error retrieving session from layout:', error.message);
			return { session: null };
		}

		const session = data.session;
		if (
			session?.user?.id !== storeSession?.user?.id ||
			session?.access_token !== storeSession?.access_token
		) {
			sessionStore.set(session);
		}

		return { session };
	} catch (err) {
		console.error('Error during session retrieval:', err);
		return { session: null };
	}
};
