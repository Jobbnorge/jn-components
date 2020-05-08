<template>
    <div>
        <button class="btn btn-primary" type="button" @click="openInfoModal">Info-Modal</button>
        <button class="btn btn-primary" type="button" @click="openConfirmModal">Confirm-Modal</button>
    </div>
</template>

<script>
    import { jnDialog } from "./../../jn_modules/jn-dialog/jn-dialog"

    export default {
        name: "DialogExample", 
        methods: {
            openInfoModal() {
            jnDialog.info({ modalTitle: this.$t("modal.modalTitle") });
            },
            openConfirmModal() {
                jnDialog
                .confirm()
                .then(suc => console.info(suc))
                .catch(err => console.warn(err));
            }
        }
    }
</script>