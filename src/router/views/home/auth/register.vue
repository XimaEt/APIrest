<template>
<div>
  <NavBar></NavBar>
  <div>
    <section class="vh-100" style="background-color: #eee;">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input id="username"  type="text"  class="form-control" v-model="user_form.username"/>
                          <label class="form-label" >Your Name</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input id="email" type="email"  class="form-control" v-model="user_form.email"/>
                          <label class="form-label" >Your Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input id="password" type="password"  class="form-control" v-model="user_form.password"/>
                          <label class="form-label">Password</label>
                        </div>
                      </div>

<!--                      <div class="d-flex flex-row align-items-center mb-4">-->
<!--                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>-->
<!--                        <div class="form-outline flex-fill mb-0">-->
<!--                          <input id="rpassword" type="password" class="form-control" />-->
<!--                          <label class="form-label" >Repeat your password</label>-->
<!--                        </div>-->
<!--                      </div>-->



                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button  type="button" class="btn btn-primary btn-lg" @click="addUser()">Register</button>
                      </div>

                    </form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <bas></bas>
</div>
</template>

<script>

// import axios from 'axios'
import NavBar from "@/components/navbar"
import bas from "@/components/footer"
import { required, email } from "vuelidate/lib/validators"
import { User } from '@/requete/app'


// const API = 'http://localhost:5500/users'
export default {
  name: "register",


  components: {
    NavBar,
    bas
  },
  data() {
    return {
      user_form: User.get_form_user(),
      // user_list: User.get_user(),
    }
  },
  async mounted() {
    this.getUser()

  },
  validations: {
    form: {
      username: {required },
      email: {required, email},
      password: {required},
    },
  },

  methods : {
    async getUser(){
      this.user = await User.get_user()
      console.log(this.user)
    },

    async addUser(){
      let useradd = await User.Add_user(this.user_form)
      useradd.username = this.user_form.username
      useradd.password = this.user_form.password
      useradd.email = this.user_form.email
      this.user_form = []
    }
  },
}

</script>

<style scoped>

</style>