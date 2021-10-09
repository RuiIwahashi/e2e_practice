const Helper = require('@codeceptjs/helper');
const puppeteer = require('puppeteer');
const iPadMiniLandscape = puppeteer.devices['iPad Pro landscape'];
const iPhone = puppeteer.devices['iPhone X'];
const Locator = codeceptjs.locator;
//const puppeteer = codeceptjs.helper.puppeteer;

async function findElements(matcher, locator) {
  if (locator.react) return findReact(matcher, locator);
  locator = new Locator(locator, 'css');
  console.log(locator.simplify());
  if (!locator.isXPath()) return matcher.$$(locator.simplify());
  return matcher.$x(locator.value);
}

class PuppeteerHelper extends Helper {
  async typeOnKeyboard(text) {
    const { page } = this.helpers.Puppeteer;
    page.keyboard.type(text);
  }

  async amOnAnIPadInLandscapeModus(text) {
    const { page } = this.helpers.Puppeteer;
    page.emulate(iPadMiniLandscape);
  }

  async amOnAnIPhone(text) {
    const { page } = this.helpers.Puppeteer;
    page.emulate(iPhone);
  }
}

module.exports = PuppeteerHelper;
