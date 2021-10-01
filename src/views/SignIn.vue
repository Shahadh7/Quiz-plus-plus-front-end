<template>
    <div>
        <v-container>
            <v-row class="justify-center pt-4">
                <v-card width="500px">

                <v-card-title class="black accent-2 white--text">Sign In</v-card-title>

                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        label="Email"
                        autofocus
                        v-model="user.email"
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
                        v-model="user.password"
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
                <v-row class="justify-center mt-4 mb-4">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"

                    >
                    <v-btn title="signin" color="secondary" @click="login">Sign in</v-btn>
                    <a class="ml-3" @click="$router.push('/sign-up')">Need account? Click Here</a>    
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
            user: {
                email: "",
                password: "",
            },
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 4 || 'Min 4 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
    methods: {
        login: function () {
            this.$store.dispatch('login', this.user )
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
            }
    },
}
</script>
<style>
    
</style>