import { supabase } from '$lib/supabase';
import type { SignUpDto } from '../Dto';

export async function SignUp(payload: SignUpDto) {
	const { data, error } = await supabase.auth.signUp({
		email: payload.email,
		password: payload.password,
		options: {
			data: {
				display_name: payload.name
			}
		}
	});

	if (error) {
		console.error('Error signing up:', error.message);
		return { error: error.message };
	}

	return { user: data.user };
}
