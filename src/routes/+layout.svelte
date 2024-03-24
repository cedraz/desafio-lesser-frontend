<script>
    import '../global.css'
    import Modal from '$lib/modal.svelte';
    import { countdown } from '../store';

    let isModalOpen = false;

    function closeModal() {
        isModalOpen = !isModalOpen;
    }

    $: if ($countdown === 0) {
        isModalOpen = true;
    }
</script>

<section>
    <div class="bg-gradient-to-r from-[#2C1699] to-[#000000] h-screen flex items-center justify-center">
        <div class="w-full max-w-[500px] h-fit rounded-xl p-5 border-2">
            <slot></slot>
        </div>
        <Modal closeModal={closeModal} isModalOpen={isModalOpen} content="Desafio finalizado com falha!" />
    </div>
</section>