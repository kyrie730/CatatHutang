import type { Actions } from './$types';
import { supabase } from '$lib/supabase';

export const actions: Actions = {
	addUser: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;

		const { error } = await supabase.from('users').insert([{ name, email }]);

		if (error) {
			console.error('Error adding user:', error);
			return { success: false, error: error.message };
		}

		return { success: true };
	}
};
