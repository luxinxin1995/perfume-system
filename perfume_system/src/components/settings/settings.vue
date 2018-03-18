<template>
    <div class="fillcontain">
        <header class="admin_title">个人信息设置</header>
        <div class="admin_set">
            <ul>
                <li>
                    <span>用户名：</span>
                    <span>{{userinfo.username}}</span>
                </li>
                <li>
                    <span>邮箱：</span>
                    <span>{{userinfo.email}}</span>
                </li>
                <li>
                    <span>手机号码：</span>
                    <span>{{userinfo.phone}}</span>
                </li>
                <li>
                    <span>更换头像：</span>
                    <el-upload class="avatar-uploader" action="http://localhost:3000/photo" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="userinfo.avatar" :src="userinfo.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from '../../Api/api'
export default {
    data() {
        return {
            userinfo: {
                username: '',
                email: '',
                phone: '',
                avatar: ''
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.userinfo.avatar = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        getData() {
            var self = this;
            axios.getId(sessionStorage.getItem('username'), res => {
                //获取表中id
                self.id = res.id;
                sessionStorage.setItem('id', res.id);
                axios.getInfo(res.id, data => {
                    //获取个人信息
                    console.log('data', data)
                    var result = data.data;
                    sessionStorage.setItem('userInfo', JSON.stringify(result));
                    self.userinfo = result
                });
            });
        }
    },
    watch: {
        $route: function() {
            this.getData();
        }
    }
}
</script>

<style scoped>
.explain_text {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #333;
}

.admin_set {
    width: 60%;
    background-color: #F9FAFC;
    min-height: 400px;
    margin: 20px auto 0;
    border-radius: 10px;
}

ul>li {
    padding: 40px;
    text-align: left
}

ul>li span:nth-child(1) {
    font-weight: 700
}

ul>li span {
    color: #666;
}

.admin_title {
    margin-top: 20px;
    font-size: 24px;
    color: #666;
    text-align: center;
}
.avatar-uploader{
    margin: -15px 0 0 100px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}

.avatar {
    width: 120px;
    height: 120px;
    display: block;
}

</style>
