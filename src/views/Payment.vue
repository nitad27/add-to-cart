<template>
  <v-card class="mx-auto" width="100%" style="box-shadow: none">
    <div class="text-h4 font-weight-bold">ชำระเงิน</div>
    <v-row>
      <div class="mt-8" style="width: 70%; padding-left: 16px">
        <div class="text-h7 font-weight-bold">ที่อยู่ในการจัดส่ง</div>
        <v-divider></v-divider>
        <v-form v-model="valid">
          <v-row class="mt-3">
            <v-col cols="12" md="6">
              <label>ชื่อ</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="firstname"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label>นามสกุล</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="lastname"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -40px">
            <v-col cols="12" md="12">
              <label>ประเทศ</label>
              <v-select
                v-model="country"
                :items="items"
                filled
                rounded
                dense
                required
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row style="margin-top: -40px">
            <v-col cols="12" md="12">
              <label
                >ที่อยู่
                <label style="color: red"
                  >(บ้านเลขที่/ หมู่บ้าน/ หมู่ที่/ ซอย/ ถนน)</label
                ></label
              >
              <v-text-field
                v-model="address"
                filled
                rounded
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -40px">
            <v-col cols="12" md="6">
              <label>แขวง/ตำบล</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="district"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label>เขต/อำเภอ</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="county"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -40px">
            <v-col cols="12" md="6">
              <label>จังหวัด</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="province"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label>รหัสไปรษณีย์</label>
              <v-text-field
                filled
                rounded
                dense
                v-model="postalCode"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -40px">
            <v-col cols="12" md="12">
              <label
                >เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)
              </label>
              <v-text-field
                v-model="tel"
                filled
                rounded
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-h7 font-weight-bold mt-3">เลือกขนส่ง</div>
          <v-divider></v-divider>
          <v-radio-group v-model="transportRadios" :mandatory="false">
            <v-radio value="radio-1" class="border-grey">
              <template slot="label">
                <v-card-actions style="width: 100%">
                  <v-list-item class="grow">
                    <div class="text--primary">Free Shippping</div>
                    <v-row align="center" justify="end">
                      <div class="text--primary font-weight-bold text-h7">
                        THB0.00
                      </div>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </template>
            </v-radio>
            <v-radio value="radio-2" class="border-grey">
              <template slot="label">
                <v-card-actions style="width: 100%">
                  <v-list-item class="grow">
                    <div class="text--primary">
                      <v-img
                        max-height="150px"
                        max-width="200px"
                        src="../assets/kerry-express.png"
                        style="margin-left: -25px"
                      ></v-img>
                    </div>
                    <v-row align="center" justify="end">
                      <div class="text--primary font-weight-bold text-h7">
                        THB40.00
                      </div>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </template>
            </v-radio>
          </v-radio-group>
          <div class="text-h7 font-weight-bold mt-3">วิธีชำระเงิน</div>
          <v-divider></v-divider>
          <v-radio-group v-model="paymentRadios" :mandatory="false">
            <v-radio value="radio-1" class="border-grey">
              <template slot="label">
                <v-card-actions style="width: 100%">
                  <v-list-item class="grow">
                    <div class="text--primary">
                      <v-btn class="mx-2" x-small fab outlined color="black">
                        <v-icon class="dark--text font-14">
                          mdi-currency-usd
                        </v-icon> </v-btn
                      >Cash
                    </div>
                  </v-list-item>
                </v-card-actions>
              </template>
            </v-radio>
            <v-radio value="radio-2" class="border-grey">
              <template slot="label">
                <v-card-actions style="width: 100%">
                  <v-list-item class="grow">
                    <div class="text--primary">
                      <v-icon class="dark--text mr-3">
                        mdi-credit-card-multiple </v-icon
                      >Credit/Debit
                    </div>
                  </v-list-item>
                </v-card-actions>
              </template>
            </v-radio>
          </v-radio-group>
        </v-form>
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
                    THB{{ $store.getters.getTotal }}.00
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
                    THB{{ $store.getters.getTotal }}.00
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
                <v-icon class="mr-2 font-14"> mdi-lock </v-icon> ชำระเงิน
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
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    country: "",
    items: ["ไทย", "รัสเซีย", "แคนาดา", "สหรัฐ", "จีน", "อินเดีย"],
    address: "",
    district: "",
    county: "",
    province: "",
    postalCode: "",
    tel: "",
    transportRadios: "radio-1",
    paymentRadios: "radio-1",
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
.border-blue {
  border: 1px solid #2b2bf1;
  border-radius: 4px;
  padding: 4px 16px;
  height: 100px;
}
.border-grey {
  border: 1px solid #9e9ea2;
  border-radius: 4px;
  padding: 4px 16px;
  height: 100px;
}
.v-item--active {
  border: 1px solid #2b2bf1;
  border-radius: 4px;
  padding: 4px 16px;
  height: 100px;
}
</style>
