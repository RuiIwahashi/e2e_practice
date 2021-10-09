const { PcPage } = inject();
const PageObjects = {
  PC: PcPage,
};

module.exports = () => {
  return actor({
    async loginAs(user, pageType) {
      await PageObjects[pageType].loginAs(user);
    },
    async checkLogin(user, pageType) {
      await PageObjects[pageType].checkLogin(user);
    },
  });
}
