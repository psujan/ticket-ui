<script setup>
import InputFile from '@/components/forms/InputFile.vue';
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue';
import InputSelect from '@/components/forms/InputSelect.vue';
import InputText from '@/components/forms/InputText.vue';
import useTicket from '@/composables/useTicket';
import { useAuthStore } from '@/stores/useAuthStore';
import ValidationMessages from '@/components/forms/ValidationMessages.vue';
import { reactive, ref, computed, onMounted } from 'vue';
import eventBus, { EVENT } from '@/utils/mitt';
import toast from '@/utils/toast';
import router from '@/router';
import { Form } from 'vee-validate'


eventBus.on(EVENT.ADD, (data) => {
    toast(data.message)
    router.push({ name: 'my-request' })
})

eventBus.on(EVENT.VALIDATION_ERROR, () => {
    scrollTo(validationErrorRef)
})

const validationErrorRef = ref(null)

const { user } = useAuthStore();

const handleSubmit = () => {
    //e.preventDefault();
    if (user) {
        form.userId = user.Id
    }
    console.log('submitting')
    addTicketByUser(form);
}

const scrollTo = (view) => {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}

const form = reactive({
    title: '',
    status: 'Active',
    issuerEmail: null,
    issuerPhone: null,
    files: [],
    categoryId: undefined,
    userId: '',
    details: '',
})

const { showError,schema, errorTitle, validationMessages, list, getList, addTicketByUser } = useTicket();

const computedList = computed(() => {
    if (list.value.length) {
        return list.value.map((item) => ({
            value: item.id,
            label: item.title,
        }))
    }

    return []
})

onMounted(() => {
    getList()
})
</script>

<template>
    <Form @submit="handleSubmit" :validation-schema="schema">
        <div class="row my-5 p-5 bg-white ticket-form-row">
            <div class="col-sm-12">
                <div ref="validationErrorRef">
                    <ValidationMessages v-if="showError" :messages="validationMessages" :title="errorTitle" />
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                <InputSelect label="Category" name="category" :options="computedList" v-model="form.categoryId" />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                <InputText label="Title" name="title" v-model="form.title" />
            </div>
            <template v-if="!user">
                <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                    <InputText label=" Your Email" type="email" name="issuerEmail" v-model="form.issuerEmail" />
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                    <InputText label="Your Phone Number" name="issuerPhone" v-model="form.issuerPhone" />
                </div>
            </template>

            <div class="col-sm-12 mb-4">
                <InputQuillEditor name="details" label="Details" v-model="form.details" />
            </div>
            <div class="col-sm-12 mb-4">
                <InputFile name="files" label="Files" :is-required="false" v-model="form.files" />
            </div>
            <div class="col-sm-12">
                <div class="form-action-button " style="margin-top: 20px">
                    <VaButton class="form-btn" preset="primary">
                        Cancel
                    </VaButton>
                    <VaButton type="submit" class="form-btn"> Submit </VaButton>
                </div>
            </div>
        </div>
    </Form>
</template>

<style scoped>
.form-btn {
    min-width: 160px;
    padding: 6px;
    margin-left: 12px
}
</style>