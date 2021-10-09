Feature('PC Delete Tweet');

Scenario('PC ', async ({ I }) => {
  const { CREDENTIALS, PcPage: PageObject } = inject();
  // ログインする
  await PageObject.SignInAction(CREDENTIALS.USERS['user01']);

}).tag('@delete').tag('@tweet');
