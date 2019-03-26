<template>
    <div>
        <divider> 2019NBA巨星麦迪中国表演赛 </divider>    

        <group :title="value[0] + ' ' + value[1] + ':' + value[2]">
            <datetime-range title="购票" start-date="2019-01-01" end-date="2019-02-02" :format="'YYYY年MM月DD日'" v-model="value" @on-change="onChange"></datetime-range>
        </group>
    </div>   
</template>

<script>
import { Divider , Group, DatetimeRange } from 'vux'

export default {
    name : 'wechat',
    components : {
        Divider,
        Group,
        DatetimeRange
    },
    data() {
        return {
            value: ['2019-01-15', '03', '05']
        }
    },
    methods : {
        onChange (val) {
            console.log('change', val)
        }
    }
}
</script>

<style scoped>

</style>
