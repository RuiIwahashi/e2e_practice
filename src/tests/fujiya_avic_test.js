Feature('PC Fujiya Avic');

Scenario('Fujiya Avic の中古ヘッドホン(価格の高い順)で商品名と価格を取得する', async ({ I }) => {
  const { PcPage: PageObject, ENVIRONMENTS } = inject();
  let count = ENVIRONMENTS.GET_PRODUCT_COUNT;

  await I.amOnPage('');
  await I.waitForText('こだわり検索', 10);

  // 中古・ヘッドホンを選択する
  await I.waitForElement('//div[1]/div[1]/div/div/nav[1]/ul/li[3]/div[1]/e[contains(text(), "中古品")]', 10);
  await I.click('//div[1]/div[1]/div/div/nav[1]/ul/li[3]/div[1]/e[contains(text(), "中古品")]');
  await I.waitForElement('//*[@id="block-globalnav-layer-2nd-used"]/div/ul/a[1]/li[contains(text(), "ヘッドホン")]', 10);
  await I.click('//*[@id="block-globalnav-layer-2nd-used"]/div/ul/a[1]/li[contains(text(), "ヘッドホン")]');
  await I.waitForText('検索結果', 10);

  // 価格の高い順にソートする
  await I.moveCursorTo('//div[1]/div[2]/div/main/div/div[3]/dl/dd/span[1]/a');
  await I.waitForText('価格(高い順)', 10);
  await I.click('価格(高い順)');
  await I.waitForText('価格(高い順)', 10);

  // 中古ヘッドホンの機種名と価格を指定のカウント数取得する(取得順序は上から順番)
  for (let i = 1; i <= count; i++) {
    // 機種名
    console.log(await I.grabTextFrom(`//div[1]/div[2]/div/main/div/ul/li/dl[${i}]/dd/a/div[2]`));
    // 価格
    console.log(await I.grabTextFrom(`//div[1]/div[2]/div/main/div/ul/li/dl[${i}]/dd/div[3]/div[2]/div`));
  }

}).tag('@fujiya').tag('@get_product');
