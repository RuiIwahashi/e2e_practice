Feature('PC Fujiya Avic');

Scenario('Fujiya Avic の中古ヘッドホン(価格の高い順)で商品名と価格を取得する', async ({ I }) => {
  const { PcPage: PageObject, ENVIRONMENTS } = inject();
  // 取得する商品数
  let count = ENVIRONMENTS.GET_PRODUCT_COUNT;

  // TOPを開く
  await PageObject.openFujiyaTopPage();

  // 中古・ヘッドホンを選択する
  await PageObject.openUsedHeadphones();

  // 価格の高い順にソートする
  await PageObject.sortBy('価格(高い順)')

  // 中古ヘッドホンの機種名と価格を指定のカウント数取得する(取得順序は上から順番)
  for (let i = 1; i <= count; i++) {
    let data = []
    // 機種名
    data.push(await I.grabTextFrom(`//div[1]/div[2]/div/main/div/ul/li/dl[${i}]/dd/a/div[2]`));
    // 価格
    data.push(await I.grabTextFrom(`//div[1]/div[2]/div/main/div/ul/li/dl[${i}]/dd/div[3]/div[2]/div`));

    // 登録するデータ
    console.log(data);
    // DBに登録する
    PageObject.insertData(data);
  }

}).tag('@fujiya').tag('@get_product');
