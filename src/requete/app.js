import axios from 'axios'

export class User {
    constructor() {
    }
    static get_form_user() {
        return {
            id: null,
            username: null,
            email: null,
            password: null
        }
    }

      static async get_user(){
            let user
            await axios({
                method: "get",
                url:
                process.env.VUE_APP_API + "users/"
            })
                .then((response)=> {
                    user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            return user;
        }

        static async Add_user(form_user) {
            let user_form
            await axios({
                method: "post",
                url:
                    process.env.VUE_APP_API + "users/add",
                data: form_user,

            })
                .then((response) => {
                    user_form = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
            return user_form
        }



}