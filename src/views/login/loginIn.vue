<style scoped>
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
                    <router-link :to="{name: 'home'}">登录</router-link>
                </h2>
            </Col>
        </Row>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            handleStart() {
                
            }
        },
        computed: {

        }
    };
</script>