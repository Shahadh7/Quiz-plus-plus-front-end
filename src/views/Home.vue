<template>
<v-container>
  
    <kinesis-container >
      <v-row class="justify-center">
          <h1>
             <kinesis-element :strength="5" style="display:inline-block;">
                <span class="letter">
                  Q
                </span>
             </kinesis-element>
             <kinesis-element :strength="15" style="display:inline-block;">
                <span class="letter">
                  U
                </span>
             </kinesis-element>
             <kinesis-element :strength="5" style="display:inline-block;">
                <span class="letter">
                  I
                </span>
             </kinesis-element>
             <kinesis-element :strength="15" style="display:inline-block;">
                <span class="letter">
                  Z
                </span>
             </kinesis-element>
             <kinesis-element :strength="5" style="display:inline-block;">
                <span class="letter">
                  +
                </span>
             </kinesis-element>
              <kinesis-element :strength="15" style="display:inline-block;">
                <span class="letter">
                  +
                </span>
             </kinesis-element>
          </h1> 
        </v-row>
    </kinesis-container>
    <p class="white--text text-h5 text-center pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius in tenetur sint cupiditate quam facere, blanditiis non ut quia a, suscipit, asperiores similique earum deleniti excepturi quis consectetur iusto cumque laudantium deserunt sapiente quibusdam. Voluptatum esse vitae iure quibusdam ipsam nemo hic tenetur quia, eum illum deserunt dolorem, ex consequatur numquam animi quas in totam rerum distinctio, minima cumque deleniti. A, tempore adipisci minima ullam maxime provident esse quod.</p>
  
</v-container>
</template>

<script>
  import { KinesisContainer, KinesisElement} from 'vue-kinesis'
  export default {
    name: 'Home',

    components: {
      KinesisContainer,
      KinesisElement
    },
  
}
</script>
<style scoped>
.letter{
  font-size: 5rem;
  color: white;
  letter-spacing: 5px;
}
</style>
