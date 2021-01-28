<template>
  <div>
    <van-field
      readonly
      clickable
      :disabled="readonly ? true : false"
      input-align="right"
      v-model="fullAreaName"
      :label="labelName"
      placeholder="请选择地区"
      @click="!readonly ? (isCityPickShow = true) : ''"
    />
    <van-popup v-model="isCityPickShow" position="bottom">
      <van-picker
        v-if="isCityPickShow"
        show-toolbar
        :columns="areaList"
        @cancel="onCancel"
        @confirm="onConfirm"
        @change="onAreaChange"
        :item-height="35"
      />
    </van-popup>
  </div>
</template>

<script>
import { Picker, Cell, Field, popup, Toast } from 'vant'
import areaData from '../../util/areaList.json'
export default {
  data() {
    return {
      list: {},
      areaList: [{ values: [] }, { values: [] }, { values: [] }],
      isCityPickShow: false
    }
  },
  props: {
    labelName: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: true
    },
    province: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullAreaName() {
      return this.province + this.city + this.area || ''
    }
  },
  components: {
    [Picker.name]: Picker,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [popup.name]: popup,
    [Toast.name]: Toast
  },
  created() {
    this.list = areaData
    this.getArea('', 0)
  },
  methods: {
    onAreaChange(picker, values, index) {
      if (index < 2) {
        this.getArea(values[index].value, index + 1) // 传参 参数为上层选择的地区的code
      }
    },
    onConfirm(v) {
      if (!v[0].value || !v[1].value || !v[2].value) {
        Toast.fail('请选择完整')
        return false
      }
      this.$emit('cityConfirm', v)
      this.isCityPickShow = false
    },
    onCancel() {
      this.isCityPickShow = false
    },
    getArea(ParentId, index) {
      if (index === 0) {
        this.areaList[1].values = []
        this.areaList[2].values = []
        this.areaList[0].values = [{ text: '请选择' }].concat(this.list[0])
      } else if (index === 1) {
        this.areaList[1].values = []
        this.areaList[2].values = []
        this.areaList[1].values = [{ text: '请选择' }].concat(
          this.list[ParentId]
        )
      } else if (index === 2) {
        this.areaList[2].values = []
        this.areaList[2].values = [{ text: '请选择' }].concat(
          this.list[ParentId]
        )
      }
    }
  }
}
</script>
