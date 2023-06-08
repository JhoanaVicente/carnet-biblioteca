<script>
  import { onMount } from "svelte";

    export let users = [];

    onMount(() => {
        fetch('https://random-data-api.com/api/v2/users')
        .then(response => response.json())
        .then(data => {
            users = data.map((/** @type {any} */ user) => '${user.first_name} ${user.last_name}');
        });
  });
</script>

<main>
    <ul>
        {#each users as user}
        <li>{user}</li>
        {/each}
    </ul>
</main>
  