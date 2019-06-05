<template>
    <v-container fluid grid-list-md>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-list two-line>
                        <template v-for="(item, index) in posts">
                            <!-- <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            >
                                {{ item.header }}
                            </v-subheader> -->

                            <!-- <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            :inset="item.inset"s
                            ></v-divider> -->

                            <v-list-tile
                            
                            :key="index"
                            avatar
                            > 
                            <!-- <v-list-tile-avatar>
                                <img :src="item.avatar">
                            </v-list-tile-avatar> -->

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.text"></v-list-tile-title>
                                <!-- <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title> -->
                            </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import PostService from '../PostService';
  export default {
    data: () => ({
        posts:[],
        error:'',
        text:''
    }),
    async created(){
        try {
            this.posts=await PostService.getPosts();
        } catch (error) {
            this.error=error.message;
        }
    }
  }
</script>