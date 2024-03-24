<script lang="ts">
    import { countdown } from "../store";

    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
</script>

<div class="text-white border-2 rounded-xl p-5 flex items-center justify-center gap-2 mb-3">
    { #if $countdown > 0 }
        <p> 
            Tempo restante: { formatTime($countdown) }
        </p>
    { :else }
        <p>
            Tempo acabou!
        </p>
    {/if}
</div>