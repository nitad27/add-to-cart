<template>
  <v-card class="mx-auto" width="100%" style="box-shadow: none">
    <div class="text-h4 font-weight-bold">ตระกร้าสินค้า</div>
    <v-row>
      <div class="mt-3" style="width: 70%; padding-left: 16px">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left text--primary font-weight-bold ma-0 pa-0">
                  สินค้า
                </th>
                <th class="text-left text--primary font-weight-bold">ราคา</th>
                <th class="text-left text--primary font-weight-bold">จำนวน</th>
                <th class="text-left text--primary font-weight-bold">ยอดรวม</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(book, i) in books" :key="i" style="height: 120px">
                <td>
                  <v-row
                    ><v-img
                      max-height="100px"
                      max-width="70px"
                      src="https://api.lorem.space/image/book?w=100&h=150"
                    ></v-img>
                    <div
                      class="text--primary"
                      style="padding: 10px 0px 0px 20px"
                    >
                      {{ book.data.title }}
                    </div></v-row
                  >
                </td>
                <td>
                  <div
                    class="text--primary font-weight-bold"
                    style="margin-top: -25px"
                  >
                    THB{{ book.data.sell }}.00
                  </div>
                </td>
                <td>
                  <div
                    class="text--primary font-weight-bold"
                    style="margin-top: -25px"
                  >
                    <v-flex xs12 sm6 md4>
                      <div class="text--primary font-weight-bold">
                        {{ book.count }}
                      </div>
                    </v-flex>
                  </div>
                </td>
                <td>
                  <v-row>
                    <div
                      class="text--primary font-weight-bold"
                      style="margin-top: 20px"
                    >
                      THB{{ book.total }}.00
                    </div>
                    <div class="text-center" style="padding-top: 10px">
                      <div class="my-2">
                        <v-btn
                          class="mx-2 xx-small"
                          fab
                          outlined
                          color="grey"
                          @click="delOrder(i, book)"
                        >
                          <v-icon class="grey--text font-14">
                            mdi-window-close
                          </v-icon>
                        </v-btn>
                      </div>
                      <div class="my-2">
                        <v-btn
                          class="mx-2 xx-small"
                          fab
                          outlined
                          color="grey"
                          :to="`/view/${book.data.id}`"
                        >
                          <v-icon class="grey--text font-14">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <div class="mt-7">
          <v-btn
            outlined
            rounded
            width="150"
            color="dark"
            class="mr-5"
            :to="`/`"
          >
            ซื้อสินค้าต่อไป
          </v-btn>
          <v-btn
            depressed
            rounded
            width="150"
            class="text-white"
            color="black"
            @click="clearOrder()"
          >
            ล้างตระกร้าสินค้า
          </v-btn>
        </div>
      </div>
      <div class="mt-3" style="width: 30%; padding: 16px">
        <div style="background: aliceblue; padding: 14px 0px 0px 14px">
          <div class="text-h6 font-weight-bold">สรุปคำสั่งซื้อ</div>
          <div>
            <v-card-actions>
              <v-list-item class="grow">
                <div
                  class="text--primary font-weight-bold font-12"
                  style="margin-left: -21px"
                >
                  ยอดรวม
                </div>

                <v-row align="center" justify="end">
                  <div class="text--primary font-weight-bold font-12">
                    THB{{ total }}.00
                  </div>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <v-card-actions style="margin-top: -30px">
              <v-list-item class="grow">
                <div
                  class="text--primary font-weight-bold font-12"
                  style="margin-left: -21px"
                >
                  ค่าส่ง
                </div>

                <v-row align="center" justify="end">
                  <div class="text--primary font-weight-bold font-12">
                    THB0.00
                  </div>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions class="mt-1">
              <v-list-item class="grow">
                <div
                  class="text--primary font-weight-bold font-12"
                  style="margin-left: -21px"
                >
                  ยอดสุทธิ
                </div>

                <v-row align="center" justify="end">
                  <div class="text--primary font-weight-bold text-h7">
                    THB{{ total }}.00
                  </div>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <div class="text-center">
              <v-btn
                depressed
                rounded
                width="100%"
                class="text-white"
                color="primary"
                :to="`/payment`"
              >
                ไปชำระเงิน
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    total: 0,
    tab: null,
    id: "",
    numberRule: (val) => {
      if (val < 0) return "Please enter a positive number";
      return true;
    },
    books: [],
  }),
  mounted() {
    this.books = this.$store.getters.getOrder;
    this.books.forEach((element) => {
      this.total = this.total + parseInt(element.total);
    });
    this.$store.dispatch("addTotal", this.total);
  },
  methods: {
    delOrder(i, book) {
      this.$store.dispatch("delOrder", i);
      this.total = this.total - parseInt(book.total);
      this.$store.dispatch("addTotal", this.total);
    },
    clearOrder() {
      this.$store.state.order = [];
      this.$store.state.total = 0;
      this.total = 0;
      this.books = [];
    },
  },
};
</script>
<style lang="scss" scoped>
.text-white {
  text-transform: none;
  color: white;
}
.font-14 {
  font-size: 14px !important;
}
.xx-small {
  height: 26px !important;
  width: 26px !important;
}
.font-12 {
  font-size: 12px !important;
}
</style>
