<template>
  <v-card class="mx-auto" width="100%" style="box-shadow: none">
    <!-- HTML No 1.1 -->
    <v-container>
      <v-form v-model="valid">
        <div class="text-h6 font-weight-bold">ข้อ 1 - Basic Javascript</div>
        <div class="text--primary mt-3">
          1.1 ) เขียน function แสดงค่าทาง console โดย function รับ parameter 2
          ตัว
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="20"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-if="firstname !== 'Shippop'"
              v-model="lastname"
              :rules="nameRules"
              :counter="20"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="mt-8">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit(firstname, lastname)"
          >
            Submit
          </v-btn>
        </div>
        <div v-if="firstname !== 'Shippop'" class="mt-10">
          Hello Shippop, My name is {{ firstname }} {{ lastname }}
        </div>
        <div v-if="firstname === 'Shippop'" class="mt-10">
          Best Online Shipping Platform
        </div>
      </v-form>
    </v-container>
    <!-- HTML No 1.2 -->
    <v-container>
      <!-- <v-divider class="mt-10"></v-divider> -->
      <div class="text--primary mt-5">
        1.2 ) ถ้าหากต้องการ copy “array of object” ใน Nodejs
      </div>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(obj, i) in objArray" :key="i">
              <td>
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-content>
                      <v-list-item-title
                        >{{ obj.name }} {{ obj.lastname }}</v-list-item-title
                      >
                    </v-list-item-content>

                    <v-row align="center" justify="end">
                      <v-btn
                        class="ma-2 no-background-hover"
                        x-small
                        outlined
                        fab
                        color="teal"
                        @click="add(obj)"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="ma-2 no-background-hover"
                        x-small
                        outlined
                        fab
                        color="teal"
                        @click="del(i)"
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    // Data No 1.1
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    // Data No 1.2
    objArray: [
      { name: "nana", lastname: "momo" },
      { name: "mark", lastname: "marky" },
    ],
  }),
  methods: {
    // Code function No 1.1
    submit(firstname, lastname) {
      if (firstname === "Shippop") {
        console.log("Best Online Shipping Platform");
      } else {
        console.log("Hello Shippop, My name is " + firstname + " " + lastname);
      }
    },
    // Code function No 1.2
    add(obj) {
      this.objArray.push(obj);
    },
    del(i) {
      this.objArray.splice(i, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.no-background-hover::before {
  background-color: transparent !important;
}
</style>
