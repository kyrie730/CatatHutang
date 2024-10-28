import { EventDetailEntity, GetEventDetail } from '$lib/Repository/Hutang';
import { supabase } from '$lib/supabase';
import moment from 'moment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { data } = await supabase.auth.getSession();

	let eventDetail: EventDetailEntity = {
		data: [],
		eventDate: moment().toDate(),
		eventName: '',
		id: '',
		totalHutang: 0
	};

	if (data.session) {
		eventDetail = await GetEventDetail({ userId: data.session?.user?.id, eventId: params.id });
	}

	return { eventDetail };
};
