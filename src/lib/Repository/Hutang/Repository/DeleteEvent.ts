import { supabase } from '$lib/supabase';
import { EventEntity } from '../Entity/EventEntity';

export async function DeleteEvent(id: string): Promise<boolean> {
	console.log(id, 'fromdeleteevent');

	// Attempt to update the 'is_deleted' field
	const { data, error: errorDelete } = await supabase
		.from('TrEvents')
		.update({ is_deleted: true })
		.eq('id', id)
		.select('*');

	// Additional logging
	if (errorDelete) {
		console.error('Error deleting record:', errorDelete.message);
		return Promise.resolve(false);
	}

	return Promise.resolve(true);
}