<template>
    <div class="sidebar">
        <el-menu :router="true">
            <el-submenu index="1">
                <template slot="title">
                    <span>文章管理</span>
                </template>
                <el-menu-item index="/post/list">
                    文章列表
                </el-menu-item>
                <el-menu-item index="/post/edit">创建文章</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <span>标签管理</span>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
.sidebar {
    width: 100%;
    height: 100%;
}
</style>
