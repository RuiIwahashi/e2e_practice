const Helper = require('@codeceptjs/helper');

class CustomerGenerator extends Helper {
  async amAFirstOrderCustomer(override_info = {}) {
    const { CUSTOMER_INFO } = inject();
    return Object.assign(
             {},
             CUSTOMER_INFO.DEFAULT,
             { order_email: await this.haveNewEmailAddress() },
             override_info
           );
  }

  async haveNewEmailAddress() {
    const now = new Date();
    var tmp_time_str = new Date().getFullYear() +
      ("00" + (now.getMonth() + 1)).slice(-2) +
      ("00" + (now.getDate())).slice(-2) +
      ("00" + (now.getHours())).slice(-2) +
      ("00" + (now.getMinutes())).slice(-2) +
      ("00" + (now.getSeconds())).slice(-2) +
      ("000" + (now.getMilliseconds())).slice(-3) +
      `.${process.pid}`;
    return `e2e_test+${tmp_time_str}@example.com`;
  }
}

module.exports = CustomerGenerator;
