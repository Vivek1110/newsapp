<template>
    <div>
      
       <v-row>
            <v-col cols='12'>
                <v-toolbar height="20" flat>
                <v-spacer></v-spacer>
                 <app-title-change-dialog :index='index'/>
                <v-btn @click="moveToDetails" icon>
                    <v-icon>{{ icons.mdiArrowRightBoldCircle }}</v-icon>
                </v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
        </div>
</template>

<script>
import {
    mdiArrowRightBoldCircle,
  } from '@mdi/js'
  import TitleChangeDialog from '../dialogs/TitleChangeDialog'
export default {
    props:['index'],
    components: {
        'app-title-change-dialog': TitleChangeDialog
    },
    data() {
        return {
        icons: {
                mdiArrowRightBoldCircle,
            }
        }
    },
    methods: {
        moveToDetails: function(){
            this.$router.push(`details/${this.index}`)
        }
    }
}
</script>