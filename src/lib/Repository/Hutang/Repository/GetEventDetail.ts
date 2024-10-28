import { supabase } from '$lib/supabase';
import type { GetHutangListDto } from '../Dto';
import { EventDetailEntity } from '../Entity';

export async function GetEventDetail(payload: GetHutangListDto): Promise<EventDetailEntity> {
	const { data: eventList, error: eventError } = await supabase
		.from('TrEvents')
		.select('*')
		.eq('creator_id', payload.userId)
		.eq('id', payload.eventId)
		.eq('is_deleted', false);

	const { data: hutangList, error: hutangError } = await supabase
		.from('TrHutang')
		.select('*')
		.eq('event_id', payload.eventId)
		.eq('is_deleted', false);

	if (eventError || hutangError || eventList.length == 0) {
		console.error('Error fetching events:', eventError?.message, hutangError?.message);
		return Promise.reject();
	}

	return Promise.resolve(
		EventDetailEntity.fromJson({ eventData: eventList[0], hutangData: hutangList })
	);
}
