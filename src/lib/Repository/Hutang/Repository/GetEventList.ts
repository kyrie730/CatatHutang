import { supabase } from '$lib/supabase';
import { EventEntity } from '../Entity/EventEntity';

export async function GetEventList(userId?: string): Promise<EventEntity[]> {
	const { data: eventList, error } = await supabase
		.from('TrEvents')
		.select('*')
		.eq('creator_id', userId);

	if (error) {
		console.error('Error fetching events:', error.message);
		return Promise.resolve([]);
	}
	console.log('fromrepo', eventList);

	return Promise.resolve(eventList.map((e) => EventEntity.fromJson(e)));
}
