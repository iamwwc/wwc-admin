<template>
    <div class="post-view">
        <div class="post-meta">
            <div class="post-title">
                <span>标题</span>
                <div class="title">{{title}}</div>
            </div>
            <div class="post-path">{{path}}</div>   
        </div>
        <div class="post-editor-container">
            <div class="post-editor"
                 id="post-editor">
            </div>
        </div>
    </div>
</template>


<script>
import * as monaco from "monaco-editor";
import { mapState } from "vuex";
import debounce from '@/utility/debounce'

export default {
    name:'posts-edit',
    data () {
        return {
            editor: Object
        }
    },
    computed: {},
    props: ["title", "path", "matter", "raw", "excerpt"],
    mounted(){
        this.editor = monaco.editor.create(document.getElementById('post-editor'),{
            
        })
        window.addEventListener('resize',debounce(() => {
            this.editor.layout()
        }))
    }
};
</script>

<style lang="scss" scoped>
.post-view{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.post-editor-container{
    flex: 1;
    .post-editor{
        height: 100%;
    }
}
</style>    
