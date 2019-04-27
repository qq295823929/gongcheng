<template>
    <div class="usermanage">
        <div class="section_title">
            <div class="roll_search">
                <div class="now_address">
                    <i class="iconfont icon-renyuanguanli"></i>
                    <span>人员管理</span>
                    <i class="layui-icon layui-icon-right"></i>
                    <span>角色管理</span>
                </div>
                <div class="search_form layui-form">
                    <div class="help jy-btn jy-btn-cancle"><i class="iconfont icon-help" style="color: red"></i>帮助</div>
                </div>
            </div>
        </div>
        <div class="school_info">
            <div class="set_grade">
                <el-tree :data="data" :props="defaultProps" @node-click="nodeClick"></el-tree>
            </div>
            <div class="form_con">

                <div class="form_tips">
                    <div class="from_tips_obj">
                        <i class="iconfont icon-shuju"></i>
                        <span>组织aaa</span>
                        <i class="iconfont icon-youjiantou"></i>
                        <span>组织aaa</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                    <div class="form_tips_btn">
                        <div class="jy-btn jy-btn-sure" id="import"><i class="iconfont icon-shangchuanjianli" style="color: #0bb20c"></i>批量导入</div>
                        <div class="jy-btn jy-btn-cancle" id="new_person"><i class="iconfont icon-shangchuanjianli" style="color: #0bb20c"></i>手动新增</div>
                    </div>
                </div>

                <div class="person_table">
                    <table id="person_table" lay-filter="person_table"></table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Usermanage",
        data:function () {
            return{
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods:{
            nodeClick:function (data) {
                console.log(data);
            }
        }
    }
</script>

<style scoped>
    .usermanage{
        height: 100%;
    }
    .section_title {
        border-bottom: 1px solid #e5e5e5;
        height: 70px;
        background: #ffffff;
        padding: 0 20px;
    }

    .now_address {
        float: left;
        padding-top: 25px;
    }

    .roll_search .search_form {
        float: right;
        margin-top: 15px;
    }

    .search_form .search_form_item {
        float: left;
        margin-left: 60px;
        line-height: 69px;
        height: 100%;
        position: relative;
    }

    .search_form_item span {
        line-height: 60px;
        float: left;
        font-size: 16px;
    }

    #search_con {
        height: 38px;
        line-height: 38px;
        border-radius: 3px;
        border: 1px solid #e5e5e5;
        padding: 0 8px;
    }

    .search_form_item .to_search {
        position: absolute;
        right: 0;
        top: 13px;
        font-size: 24px;
        cursor: pointer;
        width: 36px;
        height: 36px;
        padding: 0;
        text-align: center;
        line-height: 36px;
    }

    .search_form_item > div {
        line-height: normal;
        display: inline-block;
        width: 160px;
        float: left;
        padding: 13px 0;
    }

    .help {

    }

    .form_tips {
        overflow: hidden;
    }

    .from_tips_obj {
        /*line-height: 30px;*/
        font-size: 16px;
        overflow: hidden;
        float: left;
        max-width: 60%;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 5px 0;
    }

    .from_tips_obj i {
        font-size: 20px;
        line-height: 30px;
        float: left;
    }

    .from_tips_obj span {
        line-height: 30px;
        float: left;
    }

    .form_tips_btn {
        float: right;
        overflow: hidden;
        padding: 2px 0;
    }

    .person_table {
        height: calc(100% - 40px);
    }

    .school_info {
        overflow: hidden;
        /* min-height: 762px; */
        /* max-height: 775px; */
        height: calc(100% - 70px);
        padding: 10px 10px;
    }

    .set_grade {
        width: 260px;
        /* min-height: 100%; */
        height: 100%;
        background: #ffffff;
        float: left;
        margin-left: 10px;
        border: 1px solid #e5e5e5;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .form_con {
        width: calc(100% - 280px);
        background: #ffffff;
        float: left;
        margin-left: 10px;
        border: 1px solid #e5e5e5;
        height: 100%;
        position: relative;
        overflow-y: scroll;
    }

    .new_person_box .form_tips {
        border-bottom: 1px solid #e5e5e5;
    }

</style>
