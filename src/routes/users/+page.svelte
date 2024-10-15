<!-- src/routes/+page.svelte -->
<script lang="ts">
	export let data: { users: { id: number; name: string; email: string }[]; error: string | null }; // Include error in the type
</script>

<h1>User List</h1>

<!-- Display the list of users -->
<ul>
	{#each data.users as user}
		<li>{user.name} - {user.email}</li>
	{/each}
</ul>

<!-- Display error if it exists -->
{#if data.error}
	<p style="color: red;">Error: {data.error}</p>
{/if}

<!-- Form to add a new user -->
<form method="POST" action="?/addUser">
	<label>
		Name:
		<input type="text" name="name" required />
	</label>

	<label>
		Email:
		<input type="email" name="email" required />
	</label>

	<button type="submit">Add User</button>
</form>
