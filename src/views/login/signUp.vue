<style lang="less" scoped>
  .sign-up {
    margin: -225px auto;
    width: 600px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;	 
  }
</style>
<template>
  <div class="sign-up">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
			<Row>
				<Col span='12'>
					<Form-item label="姓名" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
					</Form-item>
				</Col>
			</Row>
			<Row>
				<Col span='12'>
					<Form-item label="密码" prop="password">
						<Input type="password" v-model="formValidate.password" placeholder="请输入密码"></Input>
					</Form-item>
				</Col>
				<Col span='12'>
            <Form-item label="确认密码" prop="passwdCheck">
               <Input type="password" v-model="formValidate.passwdCheck" placeholder="请再输入密码"></Input>
           </Form-item>
				</Col>
			</Row>
			<Row>
				<Col span='12'>
          <Form-item label="邮箱" prop="mail">
          	<Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
          </Form-item>
				</Col>
				<Col span='12'>
		  		<Form-item label="选择生日" prop="date">   
						<Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker> 
					</Form-item>
				</Col>
			</Row>
      <Form-item label="性别" prop="gender">
        <Radio-group v-model="formValidate.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="介绍" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
    export default {
        data () {
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formValidate.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                formValidate: {
                    name: '',
                    password: '',
                    passwdCheck: '',
                    mail: '',
                    gender: '',
                    date: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' },
												{ min: 2, message: '用户名至少两个字符'}
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { min: 6, message: '密码最少6位'},
                        { max: 12, message: '密码最多12位'},
                    ],
                    passwdCheck: [
                        { required: true, validator: validatePassCheck, trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 10, message: '介绍不能少于10字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
						trimStr(str){
							return str.replace(/(^\s*)|(\s*$)/g,"");
						},
            handleSubmit (name) {
              this.$refs[name].validate((valid) => {
								 this.$http.ajax.post('/users/bar', this.formValidate)
									.then((data)=>{
                    this.$refs[name].resetFields();
										this.$Message.success('提交成功!');
										// location.href = '/';
                  });
                if (valid) {
									this.formValidate.name = this.trimStr(this.formValidate.name);
									this.formValidate.password = this.trimStr(this.formValidate.password);
                  this.$http.ajax.post('/users/bar', this.formValidate)
									.then((data)=>{
                    this.$refs[name].resetFields();
										this.$Message.success('提交成功!');
										location.href = '/';
                  });
              	} else {
                  this.$Message.error('请正确填写信息!');
                }
              })
            },
            handleReset (name) {
            	this.$refs[name].resetFields();
            }
        },
        created() {
            console.log();
        }
    }
</script>