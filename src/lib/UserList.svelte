<script>
    import { onMount } from "svelte";
  
    let name = "";
  
    onMount(() => {
      fetch('https://random-data-api.com/api/v2/users')
        .then(response => response.json())
        .then(data => {
          const { first_name, last_name } = data;
          name = `${first_name} ${last_name}`;
        });
    });
  </script>
  
  <main>
    <div>
        <h1>{name}</h1>
    </div>
  </main>

  <style>
    main {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    div {
        padding: 20px;
        border: 2px solid gold;
    }

    h1 {
        text-align: start;
        margin-left: 15%;
    }
  </style>

  