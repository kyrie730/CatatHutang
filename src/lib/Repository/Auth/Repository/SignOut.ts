import { supabase } from '$lib/supabase';

export async function SignOut() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error('Error logging out:', error.message);
		return { error: error.message };
	}

	return { success: true };
}
