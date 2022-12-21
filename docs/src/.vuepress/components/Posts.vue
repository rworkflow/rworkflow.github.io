<template>
<v-container>
    <v-row>
        <v-col v-for="page in pages" :key="page.title" sm="6">
            <v-card height=180>
                <router-link :to="page.path">
                    <v-card-title>{{ page.title }}</v-card-title>
                </router-link>
                <v-card-text>{{ page.frontmatter.description | truncate(250) }}</v-card-text>
                <v-card-text style="position: absolute; bottom: 0;">Author: {{ page.frontmatter.Author }}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            pages: []
        }
    },
    mounted() {
        this.$site.pages.forEach(page => {
            if (page.frontmatter.type === 'article') {
                this.pages.push(page)
            }
        })
    },
    filters: {
    	truncate: function(text, stop, clamp){
	    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
	}
    }
}
</script>
