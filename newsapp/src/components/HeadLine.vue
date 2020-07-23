<template>
    <v-container>
        <v-row>
            <app-toppanel />
        </v-row>
    </v-container>
</template>

<script>
import TopPanel from '../components/header/TopPanel'
export default {
    components: {
        'app-toppanel': TopPanel
    }
}
</script>