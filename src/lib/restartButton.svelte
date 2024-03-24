<script>
    import { countdown, challengeIniciated } from "../store";
    import { goto } from "$app/navigation";

    function restartChallenge() {
        countdown.set(15);
        challengeIniciated.set(false);
        goto("/");
    }
</script>

<button id="restart-challenge" class="btn" on:click={restartChallenge}>
    Reiniciar desafio
</button>