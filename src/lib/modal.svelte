<script lang="ts">
    export let isModalOpen: boolean;
    export let content: string;
    export let closeModal: () => void;
</script>

<dialog id="my_modal_2" class="modal" open={isModalOpen}>
    <div class="modal-box">
        <h3 class="font-bold text-lg">{content}</h3>
        <p class="py-4">Pressione ESC, clique no "X" ou clique fora do card para fechar</p>
        <button id="close-modal" on:click={closeModal} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>