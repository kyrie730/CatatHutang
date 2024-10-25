import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import { GetEventList } from '$lib/Repository/Hutang';

export const load: PageLoad = async () => {
	const { data } = await supabase.auth.getSession();

	const events = await GetEventList(data.session?.user?.id);

	return { events };
};
