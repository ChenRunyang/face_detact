<template>
  <div class="container">
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <h3 class="title">用户注册</h3>
        <el-form-item label="账户名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select
            v-model="form.sex"
            placeholder="请选择您的性别"
          >
            <el-option
              label="男"
              value="male"
            ></el-option>
            <el-option
              label="女"
              value="female"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.recheckPassword"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="上传头像">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
          >
            <el-button
              size="small"
              style="background-color:#eee;margin-right:10px"
              round
            >点击上传</el-button>
            <span class="el-upload__tip">请上传jpg/png文件，且不超过1M</span>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button
            type="danger"
            @click="onSubmit"
            class="btn-1"
          >提交</el-button>
          <el-button
            type="primary"
            class="btn-2"
          >取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        password: "",
        recheckPassword: "",
        email: "",
        tel: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~scss_vars";
.container {
  background-image: url("../assets/bg1.jpg");
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
  .form {
    position: absolute;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    left: 550px;
    top: 80px;
    width: 350px;
    height: 520PX;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .btn-1 {
      border: none;
      margin: 20px 30px;
    }
    .btn-2 {
      background-color: gray;
      border: none;
    }
  }
}
</style>