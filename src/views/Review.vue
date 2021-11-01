<template>
  <v-card class="mx-auto" width="100%" style="box-shadow: none">
    <v-row>
      <v-col cols="5">
        <v-img
          max-height="500px"
          max-width="400px"
          :src="book.image"
          class="mr-auto"
        ></v-img>
      </v-col>
      <v-col cols="7">
        <v-card style="box-shadow: none">
          <v-card-title class="text-h4 font-weight-bold">
            {{ book.title }}
          </v-card-title>
          <div class="text--primary font-weight-bold padding-16">
            ผู้เขียน : {{ book.author }}<br />
            สำนักพิมพ์: {{ book.publisher }}<br />
            หมวดหมู่: {{ book.category }}<br />
            ประเภทสินค้า: {{ book.productType }}<br />
            บาร์โค้ด: {{ book.barcode }}<br />
          </div>
          <div class="text--primary font-weight-bold padding-16">
            ราคาสินค้า
            <div class="text-h5 font-weight-bold style-sell">THB499.00</div>
            <div
              class="
                text-h7
                grey--text
                text-decoration-line-through
                style-price
              "
            >
              THB599.00
            </div>
          </div>
          <v-flex xs12 sm6 md2 class="ml-4">
            <v-text-field
              v-if="!checked"
              type="number"
              min="1"
              v-model.number="book.count"
            ></v-text-field>
            <v-text-field
              v-if="checked"
              type="number"
              step="any"
              min="0"
              ref="input"
              :rules="[numberRule]"
              v-model.number="book.count"
            ></v-text-field>
          </v-flex>
          <div class="stlye-add-too-cart">
            <v-btn
              v-if="!checked"
              depressed
              rounded
              width="150"
              color="primary"
              class="mr-5"
              @click="add"
            >
              Add
            </v-btn>
            <v-btn
              v-if="checked"
              depressed
              rounded
              width="150"
              color="primary"
              class="mr-5"
              @click="update"
            >
              Add
            </v-btn>
            <v-btn depressed rounded width="150" color="orend">
              <v-icon class="mr-2">mdi-heart</v-icon> Wishlist
            </v-btn>
          </div>
          <div class="text--primary font-weight-bold padding-16 mt-8">
            แชร์ :
            <v-btn class="mx-2" fab dark x-small color="success">
              <v-icon dark> mdi-email </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="blue-grey">
              <v-icon dark> mdi-twitter </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="primary">
              <v-icon dark> mdi-facebook </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="red">
              <v-icon dark> mdi-google-plus </v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-img
      max-height="125px"
      max-width="100px"
      :src="book.image"
      class="mt-2"
    ></v-img>
    <v-img
      max-height="125px"
      max-width="100px"
      src="../assets/book-page.jpg"
      style="margin-top: -125px; margin-left: 110px"
    ></v-img>
    <v-tabs class="mt-8" v-model="tab">
      <v-tab href="#tab-1">เกี่ยวกับวินค้า</v-tab>
      <v-tab href="#tab-2">รายละเอียด</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-1'">
        <v-card flat>
          <div class="text--primary font-weight-bold mt-10">รายละเอียด :</div>
          <div class="grey--text font-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim<br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div class="grey--text font-14 mt-10">
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac
            felis. Etiam feugiat lorem non metus. Sed a libero.<br />
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.<br />
            Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet
            velit hendrerit rutrum.
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <v-card flat>
          <v-card-text>รายละเอียด</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-sheet class="mx-auto mt-10">
      <v-card-actions class="ma-0 pa-0" s>
        <v-list-item class="ma-0 pa-1">
          <div class="text-h6 font-weight-bold">สินค้าที่เกี่ยวข้อง</div>
          <v-row align="center" justify="end">
            <span class="text-decoration-underline mr-2 dark--text font-12"
              >ดูสินค้าขายดีทั้งหมด</span
            >
          </v-row>
        </v-list-item>
      </v-card-actions>
      <v-slide-group mobile-break-point="1000" show-arrows center-active>
        <v-slide-item v-for="(book, i) in books" :key="i">
          <v-hover>
            <v-card
              v-if="book.type === 'หนังสือแนะนำ'"
              slot-scope="{ hover }"
              width="200"
              class="ma-4"
              style="box-shadow: none"
            >
              <v-row class="mx-0">
                <v-icon class="green--text font-8"> mdi-check-circle </v-icon>
                <span class="subheading mr-2 green--text font-8">มีสินค้า</span>
              </v-row>
              <v-card-title class="mt-3">
                <v-row class="mx-0">
                  <div style="position: relative">
                    <v-img
                      class="ml-5"
                      height="150px"
                      contain
                      :src="book.image"
                      style="width: 100%; height: auto"
                    ></v-img>
                    <v-btn
                      v-if="hover"
                      class="mx-2 xx-small"
                      fab
                      outlined
                      color="grey"
                      style="
                        position: absolute;
                        left: 115%;
                        top: 0%;
                        width: 10%;
                        height: auto;
                      "
                    >
                      <v-icon class="grey--text font-14">
                        mdi-heart-outline
                      </v-icon>
                    </v-btn>
                    <v-btn
                      v-if="hover"
                      class="mx-2 xx-small"
                      fab
                      outlined
                      color="grey"
                      style="
                        position: absolute;
                        left: 115%;
                        top: 18%;
                        width: 10%;
                        height: auto;
                      "
                    >
                      <v-icon class="grey--text font-14">
                        mdi-chart-bar
                      </v-icon>
                    </v-btn>
                  </div>
                </v-row>
                <div v-if="hover" class="text-center ml-2 mt-3">
                  <v-btn
                    rounded
                    outlined
                    color="primary"
                    :to="`/view/${book.id}`"
                  >
                    <v-icon>mdi-cart-outline</v-icon> Add To Cart
                  </v-btn>
                </div>
              </v-card-title>
              <v-row align="center" class="mx-0 mt-1">
                <v-rating
                  :value="book.review"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4 font-12">
                  Reviews ({{ book.review }})
                </div>
              </v-row>
              <v-row class="mx-0">
                <div class="text-h7 font-weight-bold">{{ book.title }}</div>
              </v-row>
              <v-row class="mx-0 mt-5">
                <div class="grey--text text-decoration-line-through font-12">
                  THB{{ book.price }}.00
                </div>
              </v-row>
              <v-row class="mx-0">
                <div class="text-h7 font-weight-bold">
                  THB{{ book.sell }}.00
                </div>
              </v-row>
              <v-card-text> </v-card-text>
            </v-card>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    checked: false,
    tab: null,
    id: "",
    numberRule: (val) => {
      if (val < 0) return "Please enter a positive number";
      return true;
    },
    books: [
      {
        id: 1,
        type: "หนังสือขายดี",
        title: "BOOK 1",
        image: "https://api.lorem.space/image/book?w=100&h=150&t1",
        price: 599,
        sell: 499,
        review: 5,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 2,
        type: "หนังสือขายดี",
        title: "BOOK 2",
        image: "https://api.lorem.space/image/book?w=100&h=150&t2",
        price: 699,
        sell: 599,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 3,
        type: "หนังสือขายดี",
        title: "BOOK 3",
        image: "https://api.lorem.space/image/book?w=100&h=150&t3",
        price: 699,
        sell: 599,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
        review: 4.5,
      },
      {
        id: 4,
        type: "หนังสือขายดี",
        title: "BOOK 4",
        image: "https://api.lorem.space/image/book?w=100&h=150&t4",
        price: 799,
        sell: 699,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 5,
        type: "หนังสือขายดี",
        title: "BOOK 5",
        image: "https://api.lorem.space/image/book?w=100&h=150&t5",
        price: 399,
        sell: 299,
        review: 3,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 6,
        type: "หนังสือขายดี",
        title: "BOOK 6",
        image: "https://api.lorem.space/image/book?w=100&h=150&t6",
        price: 899,
        sell: 799,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 7,
        type: "หนังสือขายดี",
        title: "BOOK 7",
        image: "https://api.lorem.space/image/book?w=100&h=150&t7",
        price: 999,
        sell: 899,
        review: 5,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 8,
        type: "หนังสือขายดี",
        title: "BOOK 8",
        image: "https://api.lorem.space/image/book?w=100&h=150&t8",
        price: 399,
        sell: 299,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
        review: 4.5,
      },
      {
        id: 9,
        type: "หนังสือขายดี",
        title: "BOOK 9",
        image: "https://api.lorem.space/image/book?w=100&h=150&t9",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 10,
        type: "หนังสือแนะนำ",
        title: "BOOK 10",
        image: "https://api.lorem.space/image/book?w=100&h=150&t10",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 11,
        type: "หนังสือแนะนำ",
        title: "BOOK 11",
        image: "https://api.lorem.space/image/book?w=100&h=150&t11",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 12,
        type: "หนังสือแนะนำ",
        title: "BOOK 12",
        image: "https://api.lorem.space/image/book?w=100&h=150&t12",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 13,
        type: "หนังสือแนะนำ",
        title: "BOOK 13",
        image: "https://api.lorem.space/image/book?w=100&h=150&t13",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 14,
        type: "หนังสือแนะนำ",
        title: "BOOK 14",
        image: "https://api.lorem.space/image/book?w=100&h=150&t14",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 15,
        type: "หนังสือแนะนำ",
        title: "BOOK 15",
        image: "https://api.lorem.space/image/book?w=100&h=150&t15",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 16,
        type: "หนังสือแนะนำ",
        title: "BOOK 16",
        image: "https://api.lorem.space/image/book?w=100&h=150&t16",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 17,
        type: "หนังสือแนะนำ",
        title: "BOOK 17",
        image: "https://api.lorem.space/image/book?w=100&h=150&t17",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 18,
        type: "หนังสือแนะนำ",
        title: "BOOK 18",
        image: "https://api.lorem.space/image/book?w=100&h=150&t18",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 19,
        type: "หนังสือแนะนำ",
        title: "BOOK 19",
        image: "https://api.lorem.space/image/book?w=100&h=150&t19",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
      {
        id: 20,
        type: "หนังสือแนะนำ",
        title: "BOOK 20",
        image: "https://api.lorem.space/image/book?w=100&h=150&t20",
        price: 299,
        sell: 199,
        review: 4,
        author: "โซจู",
        publisher: "Humada",
        category: "วรรณกรรม เรื่องสั้น",
        productType: "Book",
        barcode: 1231231212121,
      },
    ],
    book: {},
  }),
  mounted() {
    this.getBook();
    if (this.$store.getters.getOrder.length !== 0) {
      const id = parseInt(this.$route.params.id);
      for (const element of this.$store.getters.getOrder) {
        if (element.data.id === id) {
          this.book = {
            id: element.data.id,
            type: element.data.type,
            title: element.data.title,
            image: element.data.image,
            price: element.data.price,
            sell: element.data.sell,
            review: element.data.review,
            author: element.data.author,
            publisher: element.data.publisher,
            category: element.data.category,
            productType: element.data.productType,
            barcode: element.data.barcode,
            count: element.count,
          };
          this.checked = true;
          break;
        }
      }
    } else {
      this.getBook();
      this.checked = false;
    }
  },
  methods: {
    add() {
      const total = parseInt(this.book.sell) * parseInt(this.book.count);
      const data = { count: this.book.count, data: this.book, total: total };
      this.$store.dispatch("addToCart", data);
      this.$router.replace("/cart");
    },
    update() {
      const total = parseInt(this.book.sell) * parseInt(this.book.count);
      const data = { count: this.book.count, data: this.book, total: total };
      this.$store.dispatch("updateToCart", data);
      this.$router.replace("/cart");
    },
    getBook() {
      const id = parseInt(this.$route.params.id);
      this.books.find((element) => {
        if (element.id === id) {
          this.book = {
            id: element.id,
            type: element.type,
            title: element.title,
            image: element.image,
            price: element.price,
            sell: element.sell,
            review: element.review,
            author: element.author,
            publisher: element.publisher,
            category: element.category,
            productType: element.productType,
            barcode: element.barcode,
            count: 1,
          };
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.padding-16 {
  padding: 16px !important;
}
.style-sell {
  margin-top: -28px !important;
  margin-left: 100px !important;
}
.style-price {
  margin-top: -26px !important;
  margin-left: 235px !important;
}
.v-btn {
  text-transform: none;
  color: white;
}
.orend {
  background-color: #ffaa52 !important;
  border-color: #ffaa52 !important;
}
.stlye-add-too-cart {
  margin-top: -52px;
  margin-left: 170px;
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
.font-10 {
  font-size: 10px !important;
}
.font-8 {
  font-size: 8px !important;
}
</style>
