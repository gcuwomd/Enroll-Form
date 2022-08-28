<script setup lang="ts">
import { reactive, ref } from "vue";
import { IApply, IOption } from "../types/index";
const formRef = ref();
const applyModel: IApply = reactive({
    id: null,
    name: null,
    college: null,
    firstIntention: null,
    secondIntention: null,
    phone: null,
    introduction: null,
    picture: null,
});
const formRules = {};
const collegeOptions: Array<IOption> = [
    {
        label: "计算机工程学院",
        value: 1,
    },
    {
        label: "电气工程学院",
        value: 2,
    },
    {
        label: "外国语学院",
        value: 3,
    },
    {
        label: "大数据学院",
        value: 4,
    },
    {
        label: "管理学院",
        value: 5,
    },
    {
        label: "通信工程学院",
        value: 6,
    },
    {
        label: "国际商学院",
        value: 7,
    },
    {
        label: "电子信息工程学院",
        value: 8,
    },
    {
        label: "土木工程学院",
        value: 9,
    },
];
const sectionOptions: Array<IOption> = [
    {
        label: "网站运维部",
        value: 11,
    },
    {
        label: "行政秘书部",
        value: 12,
    },
    {
        label: "网络运维部",
        value: 13,
    },
    {
        label: "信息化运维部",
        value: 14,
    },
];
</script>
<template>
    <n-card class="form-card">
        <!-- <template #cover>
            <div class="form-card-logo">
                <img src="../assets/logo.png" alt="" />
            </div>
        </template> -->
        <!-- <n-divider /> -->
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
            <n-form-item label="学院" path="college">
                <n-select
                    v-model:value="applyModel.college"
                    :options="collegeOptions"
                    placeholder="请选择学院"
                ></n-select>
            </n-form-item>
            <n-form-item label="第一意向部门" path="firstIntention">
                <n-select
                    v-model:value="applyModel.firstIntention"
                    :options="sectionOptions"
                    placeholder="请选择第一意向部门"
                ></n-select>
            </n-form-item>
            <n-form-item label="第二意向部门" path="secondIntention">
                <n-select
                    v-model:value="applyModel.secondIntention"
                    :options="sectionOptions"
                    placeholder="请选择第二意向部门"
                ></n-select>
            </n-form-item>
            <n-form-item label="联系电话" path="phone">
                <n-input v-model:value="applyModel.phone" placeholder="请输入联系电话"></n-input>
            </n-form-item>
            <n-form-item label="自我介绍" path="introduction">
                <n-input
                    v-model:value="applyModel.introduction"
                    type="textarea"
                    minlength="10"
                    placeholder="用不少于10个字符的一段话介绍一下自己吧~"
                ></n-input>
            </n-form-item>
            <n-form-item label="上传照片">
                <n-space vertical>
                    <span>上传你的照片可以加深我们对你的印象哦~</span>
                    <n-upload>
                        <n-button>上传文件</n-button>
                    </n-upload>
                </n-space>
            </n-form-item>
            <n-form-item>
                <n-button style="width: 100%">提交</n-button>
            </n-form-item>
        </n-form>
    </n-card>
</template>
<style lang="scss" scoped>
.form-card {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    .form-card-logo {
        display: flex;
        justify-content: center;
        img {
            width: 50vw !important;
            height: 50vw !important;
        }
    }
}
</style>