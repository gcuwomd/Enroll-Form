<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { FormInst, SelectOption, UploadFileInfo, useMessage } from "naive-ui";
import { IApply } from "../types/index";
import { collegeOptions, sectionOptions } from "../assets/ts/options";
import { formRules } from "../assets/ts/rules";
import { baseAxios, toBase64 } from "../const";
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const applyModel: IApply = reactive({
  id: null,
  name: null,
  sex: null,
  college: null,
  major: null,
  firstIntention: null,
  secondIntention: null,
  phone: null,
  adjust: false,
  introduction: null,
  picture: "-1",
});
const sexs: Array<string> = ["男", "女"];

const firstSectionOption = reactive(sectionOptions); //第一意向选项卡
const secondSectionOption = reactive(sectionOptions); //第二意向选项卡
const currentSelectSection: Array<string> = reactive([]); //当前第一、二意向
/**
 * @description 两个watch分别监听第一、二意向两个选项卡，不可选择两个相同的意向
 */
watch(
  () => applyModel.firstIntention,
  (val) => {
    if (val) {
      currentSelectSection[0] = val;
    }
    secondSectionOption.forEach((item) => {
      if (item.value === val || item.value === currentSelectSection[1]) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }
    });
  }
);
watch(
  () => applyModel.secondIntention,
  (val) => {
    if (val) {
      currentSelectSection[1] = val;
    }
    firstSectionOption.forEach((item) => {
      if (item.value === val || item.value === currentSelectSection[0]) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }
    });
  }
);
function onSubmit(evt: MouseEvent) {
  evt.preventDefault();
  formRef.value?.validate((err) => {
    if (!err) {
      let { name, sex, major, phone, adjust, picture } = applyModel;
      let params = {
        id: 123456,
        stu_id: applyModel.id,
        name,
        sex,
        department: applyModel.college,
        major,
        phone,
        intention1: applyModel.firstIntention,
        intention2: applyModel.secondIntention,
        isAdjust: adjust,
        introduce: applyModel.introduction,
        picture,
      };
      baseAxios
        .post("add", params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
  });
}
/**
 * @description
 * 监听上传组件的状态，上传图片=>将图片转换为base64字符串并更新applyModel.picture;
 * 删除已上传图片=>更新applyModel.picture = '-1'
 */
function onChange(options: {
  file: UploadFileInfo;
  fileList: Array<UploadFileInfo>;
}) {
  if (options.fileList.length !== 0) {
    const srcFile: any = options.fileList[0].file;
    const base64File = toBase64(srcFile).then((res: any) => {
      applyModel.picture = res;
    });
  } else {
    applyModel.picture = "-1";
  }
}
/**
 * @description 检查上传照片的格式
 */
function checkFileType(data: {
  file: UploadFileInfo;
  fileList: Array<UploadFileInfo>;
}) {
  const fileType: string | undefined = data.file.file?.type;
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    message.error("只支持上传jpg或者png格式的照片哦~");
    return false;
  }
  return true;
}
</script>
<template>
  <n-card class="form-card">
    <n-form
      size="medium"
      label-placement="top"
      ref="formRef"
      :model="applyModel"
      :rules="formRules"
    >
      <n-form-item label="学号" path="id">
        <n-input
          v-model:value="applyModel.id"
          placeholder="请输入学号"
        ></n-input>
      </n-form-item>
      <n-form-item label="姓名" path="name">
        <n-input
          v-model:value="applyModel.name"
          placeholder="请输入姓名"
        ></n-input>
      </n-form-item>
      <n-form-item path="sex" :show-label="false">
        <n-space>
          <span>性别</span>

          <n-radio-group v-model:value="applyModel.sex" name="sexGroup">
            <n-space>
              <n-radio v-for="(sex, index) in sexs" :key="index" :value="sex">{{
                sex
              }}</n-radio>
            </n-space>
          </n-radio-group>
        </n-space>
      </n-form-item>
      <n-form-item label="学院" path="college">
        <n-select
          v-model:value="applyModel.college"
          :options="collegeOptions"
          placeholder="请选择学院"
        ></n-select>
      </n-form-item>
      <n-form-item label="专业" path="major">
        <n-input
          v-model:value="applyModel.major"
          placeholder="请输入专业"
        ></n-input>
      </n-form-item>
      <n-form-item label="第一意向部门" path="firstIntention">
        <n-select
          v-model:value="applyModel.firstIntention"
          :options="firstSectionOption"
          placeholder="请选择第一意向部门"
        >
        </n-select>
      </n-form-item>
      <n-form-item label="第二意向部门" path="secondIntention">
        <n-select
          v-model:value="applyModel.secondIntention"
          :options="secondSectionOption"
          placeholder="请选择第二意向部门"
        >
        </n-select>
      </n-form-item>
      <n-form-item label="联系电话" path="phone">
        <n-input
          v-model:value="applyModel.phone"
          placeholder="请输入联系电话"
        ></n-input>
      </n-form-item>
      <n-form-item label="是否服从调剂">
        <n-space align="center">
          <n-switch v-model:value="applyModel.adjust" />
          <span>服从部门调剂被录取的概率更大哦~</span>
        </n-space>
      </n-form-item>
      <n-form-item label="自我介绍" path="introduction">
        <n-input
          v-model:value="applyModel.introduction"
          type="textarea"
          minlength="10"
          placeholder="用不少于10个字符的一段话介绍一下自己吧~"
        ></n-input>
      </n-form-item>
      <n-form-item label="上传照片" :show-label="false">
        <n-space vertical>
          <span>上传你的照片可以加深我们对你的印象哦~</span>
          <n-upload @change="onChange" @before-upload="checkFileType" :max="1">
            <n-button>上传文件</n-button>
          </n-upload>
        </n-space>
      </n-form-item>
      <n-form-item>
        <n-button style="width: 100%" @click="onSubmit" type="primary"
          >提交</n-button
        >
      </n-form-item>
    </n-form>
  </n-card>
</template>
<style lang="scss" scoped>
.form-card {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  .form-card-logo {
    display: flex;
    justify-content: center;

    img {
      width: 50vw;
      height: 50vw;
    }
  }
}
</style>
