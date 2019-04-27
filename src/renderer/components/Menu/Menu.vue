<template>
    <div class="menu" v-if="$route.meta.shownav">
        <span @click="login">这是一个menu</span>

        <div class="jy_manager_list" v-for="item in menuList">
            <div class="jy_list_title" @click="showChildren(item)"><a>{{item.name}}</a></div>
            <el-collapse-transition>
                <ul class="level-two" v-if="item.children.length>0" v-show="item.showChildren">
                    <div class="jy_manager_list" v-for="el in item.children">
                        <div class="jy_list_title"><a>{{el.name}}</a></div>
                    </div>
                </ul>
            </el-collapse-transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data: function () {
            return {
                menuList: [
                    {
                        name: "用户及权限管理",
                        path: "",
                        showChildren: true,
                        children: [
                            {
                                name: "人员管理",
                                path: "/user_manage"

                            },
                            {
                                name: "集团管理",
                                path: "/user_manage"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            login: function () {
                this.$router.replace({name: 'Login',});
            },
            showChildren: function (item) {
                console.log(item);
                item.showChildren=!item.showChildren
            }
        }
    }
</script>

<style scoped>
    .menu a {
        color: #ffffff;
        text-decoration: none;
        display: block;
    }

    .menu a:hover {
        color: #ffffff;
        text-decoration: none;
    }

    .menu {
        width: 260px;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .jy_manager_list {
        border-top: 1px solid #79838e;
        border-bottom: 1px solid #263749;
    }

    .jy_manager_list ul {
        /*display: none;*/
    }

    .jy_list_title {
        position: relative;
    }

    .jy_list_title a {
        height: 70px;
        line-height: 70px;
        cursor: pointer;
        padding-left: 30px;
        transition: all 0.2s ease;
        font-size: 16px;
        position: relative;
        z-index: 1;
    }

    .jy_list_title img {
        position: absolute;
        height: 16px;
        width: 16px;
        top: 27px;
        left: 10px;
        z-index: 2;
    }

    .jy_list_title a i {
        float: right;
        margin-right: 20px;
        display: block;
        transition: all 0.15s ease;
        color: #c0c0c0;
        font-weight: 600;
        font-size: 15px;
    }

    .jy_list_title.active a i {
        transform: rotate(90deg);
        color: #ffffff;
    }

    .jy_list_title:hover {
        opacity: 0.8;
        filter: alpha(opacity=80);
    }

    .jy_manager_list > .jy_list_title {
        background: #5b6c7d;
    }

    ul .jy_manager_list > .jy_list_title a {
        background: #384a5d;
        padding-left: 40px;
        font-size: 14px;

    }

    .jy_manager_list ul .jy_manager_list ul .jy_manager_list .jy_list_title a {
        background: #263749;
        padding-left: 40px;
    }

    .jy_list_title a.active {
        background: #46b0e2 !important;
    }

    .jy_list_title a.active.noactive {
        background: #5b6c7d !important;
    }

</style>
