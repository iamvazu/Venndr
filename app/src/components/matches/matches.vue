<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex lg6>
                <v-container>
                    This is venndr
                </v-container>
            </v-flex>
            <v-flex lg6>
                <v-container class="job-view">
                    <jobCard></jobCard>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import jobCard from '@/components/matches/card';

export default {
    name: 'matches',
    component: jobCard
}
</script>

<style scoped>
.job-view {
    height: 100vh;
    overflow-y: auto;
    background-color: #233237;
}
</style>
