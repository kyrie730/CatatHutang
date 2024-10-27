import { supabase } from '$lib/supabase';
import { EventEntity } from '../Entity/EventEntity';

export async function GetEventList(userId?: string): Promise<EventEntity[]> {
	const { data: eventList, error } = await supabase
		.from('TrEvents')
		.select('*')
		.eq('creator_id', userId)
		.eq('is_deleted', false);

	if (error) {
		console.error('Error fetching events:', error.message);
		return Promise.resolve([]);
	}

	return Promise.resolve(eventList.map((e) => EventEntity.fromJson(e)));
}
