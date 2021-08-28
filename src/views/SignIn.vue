<template>
    <div>
        <v-container>
            <v-row class="justify-center mb-5">
                <div class="d-flex flex-column">
                    <h1 class="text-sm-h1" >QUIZ++</h1>
                </div>
            </v-row>
            <v-row class="justify-center">
                <v-card width="500px">

                <v-card-title class="lime accent-2 black--text">Sign In</v-card-title>

                <v-row class="justify-center mt-2">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"
                    >
                    <v-text-field
                        label="Email"
                        autofocus
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
                <v-row class="justify-center mt-4 mb-4">
                    <v-col
                    cols="10"
                    sm="10"
                    md="10"

                    >
                    <v-btn title="signin" color="secondary">Sign in</v-btn>
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
            password: "",
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
}
</script>
<style>
    
</style>