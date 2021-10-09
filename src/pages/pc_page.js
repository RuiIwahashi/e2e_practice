const { I, CREDENTIALS, ENVIRONMENTS, TEST_CARDS } = inject();

module.exports = {
  /**
   * ログイン関連
   */
  async SignInAction(user) {
    await I.amOnPage('');
    await I.see(' Log in ');

  },

};
