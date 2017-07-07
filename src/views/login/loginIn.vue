<style>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        margin-bottom: 20px;
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 .signUp{
        margin-right: 30px;
        color: #00cc66;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
    .index .signIn {
        display: inline;
        color: #3399ff;
        cursor: pointer;
    }
		.loginModel .ivu-modal-footer {
			text-align: center;
			color: red;
		}
</style>
<template>
  <div class="index">
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <h1>
    	    <img src="src/assets/owl.png">
  	    </h1>
        <h2>
          <p>Welcome to OwlChat app!</p>
          <router-link :to="{name: 'signUp'}" class="signUp">注册</router-link>
      	  <p class="signIn" @click="handleStart()">登录</p>
          <Modal v-model="loginModel" class="loginModel" title="对话框标题" :loading="loading" @on-ok="loginIn">
        	  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
							<Form-item label="邮箱" prop="mail">
               <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
           		</Form-item>
							<Form-item label="密码" prop="password">
								<Input type="password" v-model="formValidate.password" placeholder="请输入密码"></Input>
							</Form-item>
						</Form>
          </Modal>
        </h2>
      </Col>
  	</Row>      
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loginModel: false,
				loading: false,
				formValidate: {
					mail: '',
					password: ''
				},
				ruleValidate: {
  				password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, message: '密码最少6位'},
            { max: 12, message: '密码最多12位'},
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]          
        }				
      }
    },
  	methods: {
      handleStart() {
        this.loginModel = !this.loginModel;
      },
			loginIn() {
				this.$router.push({path: '/home'})
			}
    },
    computed: {

    }
  };
</script>