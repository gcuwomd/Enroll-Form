<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { FormInst, SelectOption } from "naive-ui";
import { IApply } from "../types/index";
import { collegeOptions, sectionOptions } from "../assets/ts/options";
import { formRules } from "../assets/ts/rules";
import { baseAxios } from "../const";
const formRef = ref<FormInst | null>(null);
const backToTop = ref();
const applyModel: IApply = reactive({
    id: null,
    name: null,
    college: null,
    major: null,
    firstIntention: null,
    secondIntention: null,
    phone: null,
    introduction: null,
    picture: null,
});

const firstSectionOption = reactive(sectionOptions); //第一意向选项卡
const secondSectionOption = reactive(sectionOptions); //第二意向选项卡
const currentSelectSection: Array<number> = reactive([]); //当前第一、二意向
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
            baseAxios.post("sys/submit", applyModel);
        }
    });
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
                ></n-select>
            </n-form-item>
            <n-form-item label="第二意向部门" path="secondIntention">
                <n-select
                    v-model:value="applyModel.secondIntention"
                    :options="secondSectionOption"
                    placeholder="请选择第二意向部门"
                ></n-select>
            </n-form-item>
            <n-form-item label="联系电话" path="phone">
                <n-input
                    v-model:value="applyModel.phone"
                    placeholder="请输入联系电话"
                ></n-input>
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
                    <n-upload>
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
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
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