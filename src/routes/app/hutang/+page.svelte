<script lang="ts">
	import moment from 'moment';
	export let data: { events: any[]; error: string | null };
</script>

<div class="flex flex-col gap-6">
	<div class="flex justify-between">
		<p class="text-5xl font-bold">List Hutang</p>
		<button class="btn variant-filled-primary font-bold border border-primary-700"
			>+ Add Event</button
		>
	</div>
	{#if data.events.length > 0}
		{#each data.events as events}
			<div class="card flex flex-col p-6 gap-3 z-5 shadow-lg">
				<header class="text-3xl font-bold">{events.event_name}</header>
				<section class="p">
					<div class="flex flex-col">
						<p>
							Tanggal: {moment(events.created_at)
								.format('DD MMMM YYYY')
								// .toLocaleLowerCase('id')
								.toString()}
						</p>
						<p>Jumlah: Rp350.000,-</p>
					</div>
				</section>
			</div>{/each}
	{/if}
</div>
