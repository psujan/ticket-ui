<script setup lang="ts">
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import InputFile from '@/components/forms/InputFile.vue';
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue';
import InputSelect from '@/components/forms/InputSelect.vue';
import InputText from '@/components/forms/InputText.vue';
</script>

<template>
    <FrontPageLayout>
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-6 welcome-text">
                        <h2>Open A Support Request</h2>
                        <p>We will try to reach out to you soon</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row my-5 p-5 bg-white">
                    <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                        <InputSelect label="Category" name="category" />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 mb-4">
                        <InputText label="Subject" name="title" />
                    </div>
                    <div class="col-sm-12 mb-4">
                        <InputQuillEditor name="details" label="Details" />
                    </div>
                    <div class="col-sm-12 mb-4">
                        <InputFile name="files" label="Files" :is-required="false" />
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

            </div>
        </section>
    </FrontPageLayout>
</template>

<style scoped>
.banner {
    background-color: #154ce1;
    color: #fff;
}

.banner .container {
    padding: 30px 0;
}

.container h2 {
    font-size: 22px;
    margin-bottom: 16px;
}

.banner .container p {
    font-size: 14px;
}

.form-btn {
    min-width: 120px;
    padding: 6px;
    margin-left: 12px
}

.welcome-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.welcome-text p {
    color: #eeeded;
    font-size: 14px;
    max-width: 70%;
}
</style>