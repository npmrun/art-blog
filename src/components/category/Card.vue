<template>
    <a :href="`../category/${category.name}/1`"
        class="card w-80 h-30 bg-base-100 shadow-xl image-full cursor-pointer dark:bg-white">
        <figure><img :src="computedImage" /></figure>
        <div class="card-body">
            <h2 class="card-title flex">
                <span class="flex-1 w-0 inline-block over1line">{{ category.name }}</span>
                <button class="btn btn-primary btn-sm">{{ category.count }}</button>
            </h2>
            <p>{{ category.desc }}</p>
        </div>
    </a>
</template>


<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = withDefaults(defineProps<{
    category: {
        name: string,
        desc?: string,
        count?: number,
        image: string,
        order?: number,
    }
}>(), {})

const computedImage = computed(() => {
    // https://tva4.sinaimg.cn/large/9bd9b167gy1fwsihj5dtjj21hc0u0u0y.jpg
    return props.category.image ?? ""
})

</script>