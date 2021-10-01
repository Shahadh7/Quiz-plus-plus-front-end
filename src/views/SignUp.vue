<template>
    <div>
        <v-container>
            <v-row class="justify-center pt-4">
                <v-card width="500px">

                <v-card-title class="black accent-2 white--text">Sign up</v-card-title>

                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        label="Name"
                        autofocus
                        v-model="name"
                    ></v-text-field>
                    </v-col>

                </v-row>
                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-combobox :items="items" label="User type" v-model="user_type"></v-combobox>
                    </v-col>

                </v-row>
                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        label="Email"
                        v-model="email"
                    ></v-text-field>
                    </v-col>

                </v-row>
                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col>  
                </v-row>
                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        v-model="password_confirmation"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Confirm Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col>  
                </v-row>
                <v-row class="justify-center mt-4 mb-4">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"

                    >
                    <v-btn title="signin" color="secondary" @click="register">Sign up</v-btn>   
                    </v-col>
                </v-row>
            </v-card>
            </v-row>
            
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show1: false,
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            user_type: "",           
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            items: [
                { header: 'Select a type' },
                {
                text: 'Instructor',
                id: 1,
                },
                {
                text: 'Student',
                id: 2,
                },
            ],
        }
    },
    methods: {
        itemselected(e) {
            console.log(e)
        },
        register: function () {
            let user = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                role: this.user_type.text,
            }
            this.$store.dispatch('register', user)
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    },
}
</script>
<style lang="">
    
</style>