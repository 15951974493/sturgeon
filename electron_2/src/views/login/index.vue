<template>
  <div class="home_container">
    <div style="margin-top: 100px;">
      <el-row type="flex" justify="center">
        <el-col :md="7">

          <!-- 登录模块 -->
          <div style="padding: 20px 30px;" v-show="show_login">
            <h2 class="text-center">用户登录</h2>
            <el-tabs v-model="activeName">
              <el-tab-pane label="账号密码登录" name="账号密码登录">
                <el-form ref="form" :model="form" class="mt-4">
                  <el-form-item>
                    <el-input
                      v-model="form.username"
                      prefix-icon="el-icon-user"
                      clearable>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="form.password"
                      prefix-icon="el-icon-lock"
                      clearable
                      @keyup.enter.native="login()"
                      show-password>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      prefix-icon="el-icon-s-promotion"
                      placeholder="验证码"
                      v-model="form.seccode" style="width: 80%;float: left">
                    </el-input>
                    <span class="checkCode" @click="createCode" style="color: #409EFF;font-size: 20px">{{ checkCode}}</span>
                  </el-form-item>
                  <el-form-item>
                    <!-- `checked` 为 true 或 false -->
                    <el-checkbox v-model="checked1" style="float: left;">自动登录</el-checkbox>
                    <!--<span type="primary" :underline="false">验证码</span>-->
                  </el-form-item>
                  <el-form-item class="text-center">
                    <el-button type="primary" style="width: 100%" @click="login()">登录</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <!--<el-tab-pane label="手机号登录" name="手机号登录">-->
                <!--<el-form ref="form" :model="form2" class="mt-4">-->
                  <!--<el-form-item>-->
                    <!--<el-input-->
                      <!--v-model="form2.phone"-->
                      <!--prefix-icon="el-icon-user"-->
                      <!--clearable>-->
                    <!--</el-input>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item>-->
                    <!--<el-input-->
                      <!--v-model="form2.verification"-->
                      <!--prefix-icon="el-icon-message"-->
                      <!--style="width: 260px;"-->
                      <!--clearable>-->
                    <!--</el-input>-->
                    <!--<el-button style="float: right;">获取验证码</el-button>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item>-->
                    <!--&lt;!&ndash; `checked` 为 true 或 false &ndash;&gt;-->
                    <!--<el-checkbox v-model="checked2">自动登录</el-checkbox>-->
                    <!--<el-link type="primary" :underline="false" style="float: right;">忘记密码？</el-link>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item class="text-center">-->
                    <!--<el-button type="primary" style="width: 100%" @click="login2()">登录</el-button>-->
                  <!--</el-form-item>-->
                <!--</el-form>-->
              <!--</el-tab-pane>-->
            </el-tabs>
            <div>
              <!--<span style="float: left;">其它登录方式</span>-->
              <!--<div class="ml-3" style="float: left;">-->
                <!--<img src="https://s1.ax1x.com/2020/06/06/t6TeoD.png" alt="" class="ml-1 mr-1" style="width: 20px; height: 20px;" />-->
                <!--<img src="https://s1.ax1x.com/2020/06/06/t6TZdO.png" alt="" class="ml-1 mr-1" style="width: 20px; height: 20px;" />-->
                <!--<img src="https://s1.ax1x.com/2020/06/06/t6TVeK.png" alt="" class="ml-1 mr-1" style="width: 20px; height: 20px;" />-->
              <!--</div>-->
              <el-link type="primary" :underline="false" style="float: left;">忘记密码？</el-link>
              <el-link type="primary" :underline="false" style="float: right;" @click="show_login = false">注册账号</el-link>
            </div>
          </div>

          <!-- 注册模块 -->
          <div style="padding: 20px 30px;" v-show="!show_login">
            <h2 class="text-center">会员注册</h2>
            <el-form ref="form" :model="form3" class="mt-4">
              <el-form-item>
                <el-input
                  v-model="form3.username"
                  placeholder="用户名"
                  type="username"
                  clearable>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form3.password"
                  placeholder="6~16位密码，区分大小写"
                  clearable
                  show-password>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form3.password2"
                  placeholder="确认密码"
                  clearable
                  show-password>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="11位手机号" v-model="form3.phone">
                  <template slot="prepend">+86</template>
                </el-input>
              </el-form-item>
              <!--<el-form-item>-->
                <!--<el-input-->
                  <!--v-model="form3.verification"-->
                  <!--style="width: 260px;"-->
                  <!--clearable>-->
                <!--</el-input>-->
                <!--<el-button style="float: right;">获取验证码</el-button>-->
              <!--</el-form-item>-->
              <el-form-item>
                <el-checkbox v-model="checked1" style="float: left">自动登录</el-checkbox>
                <el-link type="primary" :underline="false" style="float: right;">忘记密码？</el-link>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 50%;float: left" @click="registered()">注册</el-button>
                <el-link type="primary" :underline="false" style="float: right;" @click="show_login = true">使用已有账号登录</el-link>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mt-5" style="padding:50px 0; color: #666;">
      <div class="text-center">
        <span>©2020 ChenXun. All rights reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        form: {
          username: '',
          password: '',
          seccode:''
        },
        // form2: {
        //   phone: '',
        //   verification: ''
        // },
        activeName: '账号密码登录',
        checked1: '',
        checked2: '',
        form3: {
          username: '',
          password: '',
          password2: '',
          phone: '',
          verification: '',
        },
        show_login: true,
        checkCode:''
      }
    },
    mounted () {
      this.createCode();
    },
    methods: {
      /*
      * 登陆
      * */
      login() {
        var flag = true;
        if (this.form.username !== "") {
          if (this.form.password !== "") {
            if (this.form.seccode != this.checkCode) {
              this.$message({
                message: "验证码错误！注意大小写",
                type: "warning"
              });
              this.createCode();
              flag = false;
            }
          } else {
            flag = false;
            this.$message({
              message: "请输入账号！",
              type: "warning"
            });
          }

        } else {
          flag = false;
          this.$message({
            message: "请输入账号！",
            type: "warning"
          });
        }

        if (flag) {
          this.$http.post('/worker/login', {
            username: this.form.username,
            password: this.form.password,
          }).then(
            response => {
              this.info = response.data;
              console.log(this.info);

              if (this.info !== "") {
                this.$router.push({path:'/manage'});//登录成功进入管理界面
              }

            }
          )
        }
      },
      //   if(this.form.seccode != this.checkCode){
      //     this.$message({
      //       message:"验证码错误！",
      //       type:"warning"
      //     });
      //     // this.createCode();
      //     return false;
      //   }
      // },
      // login2() {
      //   if ((this.form2.phone === '10086') && (this.form2.verification === '1111')) {
      //     let userInfo = {
      //       'name': '员工',
      //     };
      //     this.$cookie.setCookie('user', JSON.stringify(userInfo));
      //     // this.$router.push({path:'/tourism'});
      //   } else {
      //     this.warning('账号或密码错误！');
      //   }
      // },
      registered() {
        if (this.form3.username !== '') {
          if (this.form3.password !== '') {
            if (this.form3.password === this.form3.password2) {
              if (this.form3.phone !== '') {
                  this.$http.post('/worker/register', {
                    username: this.form3.username,
                    password: this.form3.password,
                    phone:this.form3.phone,
                  }).then(
                    response => {
                      this.info = response.data;
                      console.log(this.info);//验证正确

                      if (this.info !== "") {
                        let userInfo = {
                          'name': this.form3.username,
                          'password' : this.form3.password,
                          'phone' : this.form3.phone
                        }
                        this.$message.success('注册成功');
                        this.$cookie.setCookie('username', JSON.stringify(userInfo));
                        this.$router.push({path:'/login'});//登录成功进入管理界面
                      }
                    }
                  );
              } else {
                this.warning('手机号不能为空！');
              }
            } else {
              this.warning('两次密码不匹配！');
            }
          } else {
            this.warning('密码不能为空！');
          }
        } else {
          this.warning('用户名不能为空！');
        }
      },
      createCode() {
        let code = "";
        const codeLength = 4; //验证码的长度
        const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
        for(let i = 0; i < codeLength; i++) { //循环操作
          let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
          code += random[index]; //根据索引取得随机数加到code上
        }
        this.checkCode = code; //把code值赋给验证码
      },
      warning(text) {
        this.$notify({
          title: '警告',
          message: text,
          type: 'warning'
        });
      },
    }
  }
</script>

<style scoped>
</style>
