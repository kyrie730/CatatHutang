<script lang="ts">
	import { goto } from '$app/navigation';
	import type { EventEntity } from '$lib/Repository/Hutang';
	import { FormatToRupiah } from '$lib/Utils';
	import moment from 'moment';
	export let data: { events: EventEntity[] };
</script>

<div class="flex flex-col gap-6 card p-6">
	<div class="flex justify-between">
		<p class="text-5xl font-bold">List Event</p>
		<button
			class="btn variant-filled-primary font-bold border border-primary-700"
			on:click={() => goto('/app/hutang/create')}>+ Tambah Event</button
		>
	</div>
	{#if data.events.length > 0}
		{#each data.events as events}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="card flex flex-col p-6 gap-3 z-5 shadow-lg cursor-pointer"
				on:click={() => goto(`/app/hutang/${events.id}`)}
			>
				<header class="text-3xl font-bold">{events.eventName}</header>
				<section class="p">
					<div class="flex flex-col">
						<p>
							Tanggal: {moment(events.eventDate).format('DD MMMM YYYY').toString()}
						</p>
						<p>Jumlah: {FormatToRupiah(events.totalHutang)}</p>
					</div>
				</section>
			</div>{/each}
	{/if}
</div>
