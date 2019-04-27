<template>
    <div class="login">
        <div class="login_box">
            <div class="c_name">
                <div class="c_img">
                    <!--<img>-->
                    logo
                </div>
                <h2>愿景集团工程巡检管理系统</h2>
            </div>
            <div class="login_con">
                <div class="c_pic">
                    <img src="../assets/login_pic.png"/>
                </div>
                <form class="layui-form login_form">
                    <h2>登录</h2>
                    <div class="login_form_item">
                        <div class="form_item_label">
                            <i class="layui-icon layui-icon-username"></i>
                            <span>账户</span>
                        </div>
                        <div class="form_item_input">
                            <input type="text" id="username" name="username" autofocus="on" placeholder="请输入用户名" >
                        </div>
                    </div>
                    <div class="login_form_item">
                        <div class="form_item_label">
                            <i class="layui-icon layui-icon-password"></i>
                            <span>密码</span>
                        </div>
                        <div class="form_item_input">
                            <input type="password" id="password" name="password" autofocus="off" placeholder="请输入密码" >
                        </div>
                    </div>

                    <div class="login_form_item">
                        <div class="form_item_label">
                            <i class="layui-icon layui-icon-vercode"></i>
                            <span>验证码</span>
                        </div>
                        <div class="form_item_input">
                            <input type="text" id="verify" name="verify" autofocus="off" placeholder="验证码" >
                            <div class="verify_img">
                                <img id="verify_img" src="../assets/logo.png">
                            </div>
                        </div>
                    </div>

                    <!--<div class="layui-form-item" pane="">-->
                    <!--<input type="checkbox" name="remember" lay-skin="primary" title="记住账户" checked="">-->
                    <!--</div>-->
                    <div id="login_btn">
                        <div class="jy-btn jy-btn-sure layui-unselect" @click="login" id="login">登录</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    const { dialog } = require('electron').remote;

    // console.log(dialog)
    // dialog.showMessageBox({title:"fdfdsfdsf",message:"fdwfdsfdsfdsfdsf"})
    export default {
        name: "Login",
        methods:{
            login:function () {
                this.$router.replace({name:'Usermanage',});
            }
        }
    }
</script>

<style scoped>

    .login{
        height: 100%;
        width: 100%;
        background: #0086b3;
    }
    .login_box {
        width: 100%;
        min-width: 1300px;
        margin: 0 auto;
    }

    .c_name {
        overflow: hidden;
    }

    .c_img {
        float: left;
        font-size: 20px;
        color: #ffffff;

    }

    .c_name h2 {
        float: left;
        height: 50px;
        font-size: 36px;
        line-height: 50px;
        color: #ffffff;
    }

    .login_con {
        overflow: hidden;
        background: #f1f1f1;
        padding: 100px;
    }

    .c_pic {
        float: left;
        font-size: 0;
    }

    .c_pic img {

    }

    .login_form {
        width: 320px;
        background: #ffffff;
        float: right;
        padding: 5px 10px;
        -moz-box-shadow: -10px 10px 13px #1490c7;
        -webkit-box-shadow: -10px 10px 13px #1490c7;
        box-shadow: -10px 10px 13px #1490c7;
    }

    .login_form h2 {
        font-size: 16px;
        /*line-height: 50px;*/
        border-bottom: 1px solid #e5e5e5;
        padding: 20px 0 10px 0;
        color: #0a8bc5;
    }

    .login_form_item {
        border: 1px solid #e5e5e5;
        overflow: hidden;
        margin: 20px 0;
    }

    .form_item_label {
        float: left;
        height: 42px;
        /*line-height: 42px;*/
        padding: 0 4px;
        width: 80px;
    }

    .form_item_label i {
        color: #0a8bc5;
        font-size: 30px;
        line-height: 42px;
        float: left;
    }

    .form_item_label span {
        color: #c4c4c4;
        line-height: 42px;
        float: left;
    }

    .form_item_input {
        float: right;
        width: 215px;
        position: relative;
    }
    .verify_img{
        height: 42px;
        width: 100px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .verify_img>img{
        height: 100%;
        width: 100%;
    }
    .form_item_input input {
        border: none;
        outline: none;
        height: 42px;
        line-height: 42px;
        width: 100%;
        padding: 0 8px;
    }

    #login_btn {
        margin: 55px 0;
    }

    #login {
        height: 46px;
        line-height: 46px;
        width: 100%;
    }
    #login.disable{
        background: #cccccc;
        cursor: not-allowed;
    }

    /*layui改写*/
    .layui-form-checked[lay-skin=primary] i {
        border-color: #0a8bc5;
        background-color: #0a8bc5;
        color: #fff;
    }

    .layui-form-checkbox[lay-skin=primary]:hover i {
        border-color: #0a8bc5;
        color: #fff;
    }



    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #cccccc;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #cccccc;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #cccccc;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:    #cccccc;
    }

</style>
