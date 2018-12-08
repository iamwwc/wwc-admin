<template>
    <div id="app">
        <el-container>
            <el-header></el-header>
            <el-container>
                <el-aside>
                    <Sidebar></Sidebar>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
    name: "App",
    components: {
        Sidebar
    }
};
</script>

<style lang="scss">
@import "@/assets/css/global.scss";
#app {
    height: 100%;
    width: 100%;
}

.el-row {
    height: 100%;
}
.el-header{
    background-color: #6d6d6d;
}
.el-container{
    height: 100%;
}
</style>


