import { browser } from '$app/environment'; // Import the `browser` utility
import { writable } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

export const sessionStore = writable<Session | null>(null);

if (browser) {
	const storedSession = localStorage.getItem('supabase.auth.token');
	if (storedSession) {
		sessionStore.set(JSON.parse(storedSession));
	}

	// Listen for changes in localStorage to sync across tabs
	window.addEventListener('storage', (event) => {
		if (event.key === 'supabase.auth.token') {
			const newSession = event.newValue ? JSON.parse(event.newValue) : null;
			sessionStore.set(newSession);
		}
	});
}
