<svelte:head>
    <title>Desafio Lesser</title>
</svelte:head>

<script lang="ts">
    import { goto } from '$app/navigation';
    import { startCountdown, formValues as formValuesData} from '../store'
    import type { formValues as FormValues } from './@types/interfaces'

    let formValues: FormValues = {
        name: '',
        email: '',
        phone: ''
    }

    async function handleSubmit() {
        formValuesData.set(formValues)
        // Codigo para verificar se algum campo está vazio
        if (formValues.name === '' || formValues.email === '' || formValues.phone === '') {
            console.log('Please fill in all fields');
            return;
        }

        startCountdown()

        console.log(formValues)
        goto('/challenge');
    }
</script>

<section>
    <div class="flex flex-col gap-5">
        <h1 class="text-white text-2xl font-bold">Preencha os campos abaixo para iniciar o desafio</h1>
        <input id="user-name" bind:value={formValues.name} type="text" class="input input-bordered w-full" placeholder="Nome" />
        <input id="emailInput" bind:value={formValues.email} type="text" class="input input-bordered w-full" placeholder="Email" />
        <input id="phoneInput" bind:value={formValues.phone} type="text" class="input input-bordered w-full" placeholder="Telefone" />
        <button id="submitButton" class="btn btn-accent" on:click={handleSubmit}>
            Iniciar Desafio
        </button>
    </div>
</section>
