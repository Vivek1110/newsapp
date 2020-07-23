<template>
      <div style="width:100%">
      <v-row>
       <v-col cols='8'>
          <v-text-field
            label="Title"
            class="mx-4"
            v-model.lazy='searchTxt'
            outlined
          ></v-text-field>
         
       </v-col>
       <v-col class="cols-4">
           <v-row justify="end">
            <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="teal"
                dark
                v-bind="attrs"
                v-on="on"
                class="float-right"
                >
                Filter
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Select Source</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 500px;">
                    <v-checkbox label="Test" value="test"></v-checkbox>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog=false">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
       </v-col>
    </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    },

}
</script>

<style scoped>
.comp-width {
    width: '100%';
}
</style>