<style lang="less" scoped>
    .chat {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 300px;
        height: 300px; 
        box-shadow: -1px -1px 20px #9ea7b4;
        border-radius: 1em 0 0 0;
        overflow: hidden;
        transition: 1s all;
        .chat-head {
            position: relative;
            height: 30px;
            .chat-head-toggle {
                height: 30px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
                transition: .5s all;
                &:hover {
                    color: #FFF;
                    background: #3399ff;
                }
            }
            .chat-head-close {
                height: 30px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
                font-style: normal;
                transition: 0.5s all;
                &:hover {
                    background: #ff3300;
                    color: #FFF;
                }
            }
            .chat-head-title {
                font-size: 16px;
                text-align: center;
                line-height: 30px;
            }
        }
        .chat-msge {
            padding: 0.5em;
            position: absolute;
            top: 30px;
            bottom: 32px;
            width: 100%;
            overflow-x: hidden;
            overflow-y: scroll; 
            border-top: 1px solid #d7dde4;           
        }
        .chat-box {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 32px;
        }
    }
</style>
<template>
    <div class="chat" v-if="isChatOpen">
        <div class="chat-head">
            <Row>
                <Col span="3" class="chat-head-toggle">
                    <div @click="toggleChat()" ref="div">
                        <Icon type="navicon-round"></Icon>
                    </div>
                </Col>
                <Col span="18" class="chat-head-title" @click="hiddenChat()">hello chat</Col>
                <Col span="3" class="chat-head-close">
                    <div @click="closeChat()">
                        <Icon type="close-round" @on-click="hiddenChat()"></Icon>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="chat-msge">
            <p v-for="message in messages">
                {{message.name}}: {{message.content}}
            </p>
        </div>
        <div class="chat-box">
            <Input v-model="chatValue" icon="paper-airplane"  @on-click="setMessage()" @on-enter="setMessage()" placeholder="请开始你的表演"></Input>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return{
                chatValue: "",
                user: '二狗子',
                messages: [],
                isChatToggle: true,
                isChatOpen: true

            }
        },
        created(){
            this.$http.ajax({
                url: '/hello/userlist',
            }).then((data)=> {
                console.log(data.data)
            }).catch((error)=> {
                console.log(error)
            })
            this.$Message.success('登录成功');
        },
        methods: {
            toggleChat(){
                this.$refs.div.children[0].className = this.isChatToggle ? 'ivu-icon ivu-icon-plus-round' : 'ivu-icon ivu-icon-navicon-round';
                this.$el.style.bottom = this.isChatToggle ? "-270px" : "0";
                this.isChatToggle = !this.isChatToggle; 
            },
            closeChat(){
                this.isChatOpen = false;
            },
            setMessage(){
                if(this.chatValue == '') {
                    this.$Message.error('这条嘈，战斗力为零，再想想吧！');
                    return false;
                }
                this.messages.push({"name": this.user, "content": this.chatValue});
                this.chatValue = '';
                this.$Message.success('嘈已经扔给对方了~');
            }
        },
        components: {

        },
        computed:{

        }
    };
</script>