<script setup>
import AppHeaderAuth from '@/components/common/AppHeaderAuth.vue'
import InputText from '@/components/forms/InputText.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import { Form } from 'vee-validate'
import AuthService from '@/services/AuthService'
import * as yup from 'yup'
import { reactive } from 'vue'

const errorBag = {
  UserName: undefined,
  Password: undefined,
}

const validationError = reactive({
  ...errorBag,
})

const handleSubmit = async () => {
  resetValidationError()
  const result = await AuthService.Login(formValues)
  if (result.err != null) {
    handleError(result.err)
  }
}

const resetValidationError = () => {
  validationError.Password = ''
  validationError.UserName = ''
}

const handleError = (err) => {
  //handle server side validation errors
  if (err?.response && err?.response?.data?.errors) {
    // this is validation error
    console.log('here', err.response.data.errors)
    const serverValidationError = err.response.data.errors
    validationError.Password = serverValidationError.Password[0]
    validationError.UserName = serverValidationError.UserName[0]
  }

  // handle other bad requests
}

/*const schema = yup.object({
  username: yup.string().required('Email is required').email('Please provide valid email'),
  //name: yup.string().required(),
  password: yup.string().required('Password is required').min(8, 'Password must be 8 char long'),
})*/

const formValues = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <AppHeaderAuth />
  <div class="container">
    <div class="login-container">
      <h2 class="title">Welcome ! Please Login To Continue</h2>
      <ValidationMessages
        v-if="!Object.values(validationError).includes(undefined)"
        :messages="Object.values(validationError)"
      />
      <Form @submit="handleSubmit">
        <div class="flex flex-col md-12 form-wrap">
          <InputText name="username" label="Email" type="email" v-model="formValues.username" />
        </div>
        <div class="flex flex-col md-12 form-wrap">
          <InputText
            name="password"
            label="Password"
            type="password"
            v-model="formValues.password"
          />
        </div>
        <VaButton class="login-btn" type="submit">Login</VaButton>
      </Form>

      <div class="auth-help flx x-between">
        <a href="" class="forget-pwd">I forgot my password</a>
        <a href="" class="do-signup">I don't have account</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
