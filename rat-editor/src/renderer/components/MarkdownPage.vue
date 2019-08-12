<template>
    <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked';
import DOMPurify from 'DOMPurify';

export default {
    data() {
        return {
            input: '',
        };
    },
    computed: {
        compiledMarkdown() {
            return DOMPurify.sanitize(marked(this.input));
        },
    },
    methods: {
        update(e) {
            this.input = e.target.value;
        },
    },
};
</script>