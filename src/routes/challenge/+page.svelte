<svelte:head>
    <title>Página do Desafio</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import Counter from '$lib/counter.svelte';
    import Modal from '../../lib/modal.svelte'
    import RestartButton from '../../lib/restartButton.svelte'
    import { stopCountdown, isActive, challengeIniciated } from '../../store'
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    let isModalOpen = false;

    function toggleModal() {
        isModalOpen = !isModalOpen;
    }

    function sendChallenge() {
        stopCountdown()
        toggleModal()
    }

    let active = false;

    onMount(async () => {
        const isChallengeActive = get(challengeIniciated)

        if (!isChallengeActive) {
            goto('/')
        }

        active = $isActive;
    });
</script>

<section>
    <a id="candidate-page" class="btn fixed top-[20px] right-[20px]" href="/candidate">
        Página do candidato
    </a>
    <Counter />
    { #if (active) }
        <button id="finish-challenge" on:click={sendChallenge} class="btn btn-primary">Finalizar desafio</button>
    { :else }
        <RestartButton />
    { /if }
    <Modal closeModal={toggleModal} isModalOpen={isModalOpen} content="Desafio finalizado com sucesso!" />
</section>