import { supabase } from '$lib/supabase';
import { redirect } from '@sveltejs/kit';
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

	// Redirect to home page or dashboard on successful sign-in
	return { user: data.user };
}
