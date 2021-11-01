<template>
  <v-card class="mx-auto" width="100%" style="box-shadow: none">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      class="mt-2"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-sheet class="mx-auto">
      <v-card-actions class="ma-0 pa-0">
        <v-list-item class="ma-0 pa-1">
          <div class="text-h6 font-weight-bold">สินค้าขายดี</div>
          <v-row align="center" justify="end">
            <span class="text-decoration-underline mr-2 dark--text font-12"
              >ดูสินค้าขายดีทั้งหมด</span
            >
          </v-row>
        </v-list-item>
      </v-card-actions>
      <v-slide-group
        class="elevation-1"
        mobile-breakpoint="0"
        show-arrows
        center-active
      >
        <v-slide-item v-for="(book, i) in books" :key="i">
          <v-hover>
            <v-card
              v-if="book.type === 'หนังสือขายดี'"
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
                <div class="text-h7 font-weight-bold">THB{{ book.sell }}00</div>
              </v-row>
              <v-card-text> </v-card-text>
            </v-card>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-sheet class="mx-auto">
      <v-card-actions class="ma-0 pa-0">
        <v-list-item class="ma-0 pa-1">
          <div class="text-h6 font-weight-bold">สินค้าแนะนำ</div>
          <v-row align="center" justify="end">
            <span class="text-decoration-underline mr-2 dark--text font-12"
              >ดูสินค้าขายดีทั้งหมด</span
            >
          </v-row>
        </v-list-item>
      </v-card-actions>
      <v-slide-group
        class="elevation-1"
        mobile-breakpoint="0"
        show-arrows
        center-active
      >
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
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
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
  }),
};
</script>

<style lang="scss" scoped>
.font-14 {
  font-size: 14px !important;
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
.v-btn {
  text-transform: none;
}
.xx-small {
  height: 26px !important;
  width: 26px !important;
}
.v-application .elevation-1 {
  box-shadow: none !important;
}
</style>
