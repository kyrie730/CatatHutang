<script lang="ts">
	import { goto } from '$app/navigation';
	import { sessionStore } from '$lib/Store';
	import { AppBar, Avatar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import DebtIcon from '$lib/assets/icons/ic_debt.svg';
	import UserIcon from '$lib/assets/icons/ic_user.svg';
	import { page } from '$app/stores';
	let session = get(sessionStore);
	let displayName = [''];
	let currentTile = 0;
	let pathname = '';

	// Subscribe to the page store to track the current route
	$: pathname = $page.url.pathname;
	onMount(() => {
		if (!session) {
			goto('/login');
		} else {
			displayName = session?.user.user_metadata.display_name.split(' ');
		}
	});
</script>

<div class="flex flex-col w-screen">
	<AppBar class="shadow-2xl z-10">
		<svelte:fragment slot="lead">
			<p class="text-2xl font-bold text-primary-700">CatatHutang</p>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div class="flex">
				<Avatar
					background="bg-primary-500 h-8 w-8 border border-primary-700"
					initials={`${displayName[0]?.charAt(0)}${displayName[1]?.charAt(0)}`}
				/>
			</div>
		</svelte:fragment>
	</AppBar>
	<div class="flex w-screen">
		<AppRail>
			<AppRailAnchor href="/app/hutang" title="Account" selected={pathname.includes('/app/hutang')}>
				<svelte:fragment slot="lead">
					<div class="flex flex-col p-3 items-center">
						<img src={DebtIcon} alt="hutang" class="w-3/4" />
						<p class="text-xs font-bold">Hutang</p>
					</div>
				</svelte:fragment>
			</AppRailAnchor>
			<AppRailAnchor href="/app/users" title="Account" selected={pathname.includes('/app/users')}>
				<svelte:fragment slot="lead">
					<div class="flex flex-col p-3 items-center">
						<img src={UserIcon} alt="user" class="w-3/4" />
						<p class="text-xs font-bold">Users</p>
					</div>
				</svelte:fragment>
			</AppRailAnchor>
		</AppRail>
		<div class="flex flex-col p-4 bg-surface-500 w-full h-[calc(100vh-64px)] overflow-auto">
			<slot />
		</div>
	</div>
</div>
