<template>
    <div>
        <div v-for="item in itemArrs" :key="item.index">
            <form-preview header-label="NBA All Star" :body-items="item" ></form-preview>
            <br>
        </div>
        <!-- <load-more tip="正在加载"></load-more> -->
    </div>
</template>

<script>
import { FormPreview , LoadMore  } from 'vux'
import { getMsg } from "@/api/http.js";
export default {
    name : 'message',
    components : {
        FormPreview,
        LoadMore
    },
    data() {
        return {
            // list: [{
            //     label: 'Name',
            //     value: '电动打蛋机'
            // }, {
            //     label: 'Content',
            //     value: '名字名字名字'
            // }],
            // itemArrs : [[{}], [{}]]
            itemArrs : []
        }
    },
    methods : {
        getData() {
            getMsg().then(res => {
                res.records.forEach(item => {
                    this.itemArrs.push(Array(item))
                })
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style scoped>

</style>
