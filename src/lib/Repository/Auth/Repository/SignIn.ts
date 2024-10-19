// src/lib/signin.ts
import { sessionStore } from '$lib/Store';
import { supabase } from '$lib/supabase';
import type { SignInDto } from '../Dto';

export async function SignIn(payload: SignInDto) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: payload.email,
		password: payload.password
	});

	if (error) {
		console.error('Error signing in:', error.message);
		return { error: error.message };
	}

	// Update the store with the session data
	sessionStore.set(data.session);

	return { success: true };
}
