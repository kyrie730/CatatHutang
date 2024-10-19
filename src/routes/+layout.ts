import { sessionStore } from '$lib/Store';
import { supabase } from '$lib/supabase';

export const load = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	sessionStore.set(session);

	return {
		session
	};
};
