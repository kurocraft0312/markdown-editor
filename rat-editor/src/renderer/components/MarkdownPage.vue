<template>
    <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked';

export default {
    data() {
        return {
            input: '# hello',
        };
    },
    computed: {
        compiledMarkdown() {
            return marked(this.input, { sanitize: true });
        },
    },
    methods: {
        update(e) {
            this.input = e.target.value;
        },
    },
};
</script>