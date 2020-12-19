<template>
    <div class="login">
        <div class="l_content">
            <div class="loginname">
                登录
                <span></span>
            </div>
            <p class="registergo">
                还没有账号，
                <a href>立即注册</a>
            </p>
            <div class="logininfo">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        clearable
                        placeholder="请输入您的账号"
                        :error-message="errorAccound"
                    />
                    <van-field
                        v-model="password"
                        :type="passwordType"
                        placeholder="请输入您的密码"
                        :error-message="errorPassword"
                        right-icon="eye-o"
                        @click-right-icon="showPassword"
                    />
                </van-cell-group>
            </div>
            <div class="lgbtn">
                <van-button type="info" @click="login">登陆</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";

export default {
    data() {
        return {
            username: "",
            password: "",
            passwordType: "password",
            errorAccound: "",
            errorPassword: ""
        };
    },
    computed: {},

    methods: {
        ...mapMutations({

        }),
        login() {

        },
        showPassword() {
            this.passwordType === "text"
                ? (this.passwordType = "password")
                : (this.passwordType = "text");
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    position: relative;
    background: #ffffff url(../../assets/images/login.png) no-repeat right top;
    background-size: 246px 340px;
    .l_content {
        padding: 135px 80px 0 80px;
        .loginname {
            font-size: 46px;
            font-weight: 400;
            height: 60px;
            position: relative;
            letter-spacing: 5px;
            span {
                position: absolute;
                width: 90px;
                height: 10px;
                bottom: 0;
                left: 0;
                background: #5c7ce6;
                border-radius: 5px;
            }
        }
        .registergo {
            font-size: 26px;
            line-height: 60px;
            color: #babdc6;
            a {
                color: #5c7ce6;
            }
        }
        .logininfo {
            font-size: 26px;
            margin-top: 150px;
            .van-cell-group {
                .van-cell {
                    border-bottom: 1px solid #eeeeee;
                    height: 60px;
                    margin-bottom: 55px;
                    /deep/.van-field__right-icon .van-icon {
                        font-size: 40px;
                    }
                }
            }
        }
        .lgbtn {
            text-align: center;
            margin-top: 38px;
            button {
                width: 100%;
                height: 80px;
                background: #5c7ce6;
                border-radius: 50px;
                font-size: 28px;
            }
        }
    }
}
</style>
