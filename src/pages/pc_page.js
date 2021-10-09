const { I, CREDENTIALS, ENVIRONMENTS, TEST_CARDS } = inject();

module.exports = {
  async openFujiyaTopPage() {
    await I.amOnPage('');
    await I.waitForText('こだわり検索', 10);
  },

  async openUsedHeadphones() {
    await I.waitForElement('//div[1]/div[1]/div/div/nav[1]/ul/li[3]/div[1]/e[contains(text(), "中古品")]', 10);
    await I.click('//div[1]/div[1]/div/div/nav[1]/ul/li[3]/div[1]/e[contains(text(), "中古品")]');
    await I.waitForElement('//*[@id="block-globalnav-layer-2nd-used"]/div/ul/a[1]/li[contains(text(), "ヘッドホン")]', 10);
    await I.click('//*[@id="block-globalnav-layer-2nd-used"]/div/ul/a[1]/li[contains(text(), "ヘッドホン")]');
    await I.waitForText('検索結果', 10);
  },

  async sortBy(SortType) {
    await I.moveCursorTo('//div[1]/div[2]/div/main/div/div[3]/dl/dd/span[1]/a');
    await I.waitForText(SortType, 10);
    await I.click(SortType);
    await I.waitForText(SortType, 10);
  },
};
