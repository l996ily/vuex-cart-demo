<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <template v-slot:header>
          <el-checkbox size="mini" v-model="isCheckAll">
          </el-checkbox>
        </template>
        <template v-slot="scope">
          <el-checkbox
            size="mini"
            :value="scope.row.isChecked"
            @change="updateProductChecked({productId: scope.row.id, isChecked: $event})"
          >
          </el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <template slot-scope="scope">
          <el-input-number size="mini" :min="1" :value="scope.row.count" @change="updateProductCount({productId: scope.row.id, count: $event})"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="小计">
        <template slot-scope="scope">
          <span>{{scope.row.total}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="delcartProducts(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>{{ isCheckedTotalCount }}</span> 件商品，总价：<span>{{ isCheckedTotalPrice }}</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('carts', ['cartProducts']),
    ...mapGetters('carts', ['isCheckedTotalCount', 'isCheckedTotalPrice']),
    isCheckAll: {
      get () {
        return this.cartProducts.length && this.cartProducts.every(item => item.isChecked)
      },
      set (val) {
        this.updateAllProductChecked(val)
      }
    }
  },
  methods: {
    ...mapMutations('carts', ['delcartProducts', 'updateProductCount', 'updateProductChecked', 'updateAllProductChecked'])
  }
}
</script>

<style></style>
