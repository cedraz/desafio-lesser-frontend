<svelte:head>
    <title>Página do Candidato</title>
</svelte:head>

<script lang="ts">
    import Counter from '../../lib/counter.svelte'
    import type { formValues as FormValuesInterface, formValues } from '../@types/interfaces'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { challengeIniciated, formValues as formValuesData } from '../../store';
    import { get } from 'svelte/store';

    let formValues: FormValuesInterface = get(formValuesData)

    console.log(formValues)
    
    onMount(() => {
        const active = get(challengeIniciated);

        if (!active) {
            goto('/');
        }
    });
</script>

<section>
    <div>
        <Counter />
    </div>
    <a id="challenge-page" class="btn fixed top-[20px] right-[20px]" href="/challenge">
        Página do desafio
    </a>
    <ul>
        <li class="flex gap-2 text-white">
            <label for="name">Nome</label>
            <p>{ formValues.name }</p>
        </li>
        <li class="flex gap-2 text-white">
            <label for="email">Email</label>
            <p>{ formValues.email }</p>
        </li>
        <li class="flex gap-2 text-white">
            <label for="phone">Telefone</label>
            <p>{ formValues.phone }</p>
        </li>
    </ul>
</section>