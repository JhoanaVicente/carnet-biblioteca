<script>
   export let userFullName = "Pepa Fuentes Martínez";
   export let nombreCompleto ="Jean Pierre Gallardo Odar";
   export let singleName = "Loli"
</script>

<h1>Carnet de Biblioteca "Daddy Google"</h1>

<main>
    <!--Aquí se usa el ejemplo del ejercicio-->
    <div>
        <p>Nom: {userFullName.split(" ")[0]}</p>
        <p>Cognoms: {userFullName.split(" ").slice(1).join(" ")}</p>
    </div>
    <!--Aquí he usado un ejemplo con dos nombres y dos apellidos-->
    <div>
        <p>Nom: {nombreCompleto.split(" ").slice(0,2).join(" ")}</p>
        <p>Cognoms: {nombreCompleto.split(" ").slice(2).join(" ")}</p>
    </div>
    <!--Aquí he utilizado solo el nombre-->
    <div>
        <p>Nom: {singleName.split(" ")[0]}</p>
        <p>Cognoms: {singleName.split(" ").slice(1).join(" ")}</p>
    </div>
</main>

<style>
    h1 {
        margin-left: 150px;
    }

    main {
        padding:5px;
        text-align: center;
        margin-left: 225px;
        display: table;
    }

    div {
        margin: 18px;
        padding: 20px;
        border: 2px solid gold;

    }
</style>