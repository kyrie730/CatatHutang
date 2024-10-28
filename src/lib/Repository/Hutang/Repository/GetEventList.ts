import { supabase } from '$lib/supabase';
import { EventEntity } from '../Entity/EventEntity';

async function getTotal(eventId: string): Promise<number> {
	const { data: hutangList, error: hutangError } = await supabase
		.from('TrHutang')
		.select('*')
		.eq('event_id', eventId)
		.eq('is_deleted', false);

	let total = 0;

	hutangList?.map((e) => {
		total = e.debt + total;
	});
	return total;
}

export async function GetEventList(userId?: string): Promise<EventEntity[]> {
	const { data: eventList, error } = await supabase
		.from('TrEvents')
		.select('*')
		.eq('creator_id', userId)
		.eq('is_deleted', false);

	const result = eventList?.map(async (e) => (e.total = await getTotal(e.id)));

	if (error) {
		console.error('Error fetching events:', error.message);
		return Promise.resolve([]);
	}

	return Promise.all(
		eventList.map(async (e) => EventEntity.fromJson({ ...e, total: await getTotal(e.id) }))
	);
}
