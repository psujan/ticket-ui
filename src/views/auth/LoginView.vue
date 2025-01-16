<script setup>
import AppHeaderAuth from '@/components/common/AppHeaderAuth.vue'
import InputText from '@/components/forms/InputText.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import { Form } from 'vee-validate'
import { reactive } from 'vue'
import useAuthService from '@/composables/Auth/useAuthService'
import { useAuthStore } from '@/stores/useAuthStore'
import router from '@/router'


const { showError, errorTitle, validationMessages, schema, handleSubmit, logout } = useAuthService()
const { isAuthenticated } = useAuthStore();
const formValues = reactive({
  username: '',
  password: '',
})

const submit = () => handleSubmit(formValues)
</script>

<template>
  <AppHeaderAuth />
  <div class="container">
    <div class="login-container">
      <div v-if="!isAuthenticated">
        <h2 class="title">Welcome ! Please Login To Continue</h2>
        <ValidationMessages v-if="showError" :messages="validationMessages" :title="errorTitle" />
        <Form @submit="submit" :validation-schema="schema">
          <div class="flex flex-col md-12 form-wrap">
            <InputText name="username" label="Email" type="email" v-model="formValues.username" />
          </div>
          <div class="flex flex-col md-12 form-wrap">
            <InputText name="password" label="Password" type="password" v-model="formValues.password" />
          </div>
          <VaButton class="login-btn" type="submit">Login</VaButton>
        </Form>

        <div class="auth-help flx x-between">
          <a href="" class="forget-pwd">I forgot my password</a>
          <a href="" class="do-signup">I don't have account</a>
        </div>
      </div>
      <div v-else class="text-center">
        <div class="text-center">
          <p class="clr-gray mt-2 mb-4  py-1">You are already logged in to the portal.</p>
          <div class="action-btns">
            <VaButton preset="primary" class="mx-2 text-center"@click="() => router.replace('/')">Ok</VaButton>
            <VaButton class="mx-2 text-center" @click="() => logout()">Logout</VaButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-btns{
  text-align: center;
}
.action-btns button{
  min-width: 120px;
}
.do-signup {
  color: #158de3;
}

.auth-help a {
  margin: 20px 0;
  display: block;
  text-decoration: underline;
}

.forget-pwd {
  color: #666e75;
}

.login-btn {
  width: 100%;
  margin-top: 12px;
}

.login-container {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  max-width: 480px;
  margin: 20px auto;
  border-radius: 8px;
  padding: 20px;
}

.login-container .title {
  margin-bottom: 30px;
}

.form-wrap {
  margin-bottom: 12px;
}
</style>
