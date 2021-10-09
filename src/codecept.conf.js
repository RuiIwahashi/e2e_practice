exports.config = {
  tests: './tests/**/*_test.js',  //テストファイル名の最後は `_test.js` とする
  output: './reports', // カレントディレクトリのoutputディレクトリ以下に試験結果を出力する
  helpers: {
    Puppeteer: {   // テストドライバーはPuppeteerを使用
      get url() {
        const ENVIRONMENTS = require('./conf/environments.js');
        return ENVIRONMENTS.URL
      },
      show: true,
      "chrome":{
        "args": [
          "--disable-web-security",
          // iframe 内の Element を操作するには、ブラウザの持つセキュリティ機能を Off にする必要がある。
          // See also: https://www.chromium.org/Home/chromium-security/site-isolation
          "--disable-features=IsolateOrigins,site-per-process",
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
          "--full-memory-crash-report",
        ],
        defaultViewport: {
          width: 1440,
          height: 960
        }
      },
    },
    PuppeteerHelper: {
      require: './helpers/puppeteer_helper.js'
    },
    EmailGenerator: {
      require: './helpers/customer_generator.js'
    },
  },
  include: {
    I: './steps_file.js',
    PcPage: './pages/pc_page.js',
    // SpPage: './pages/sp_page.js',
    PcLoadTest: './pages/pc_load_test.js',
    ENVIRONMENTS: './conf/environments.js',
    CREDENTIALS: './conf/credentials.js',
  },
  plugins: {
    stepByStepReport: {
      enabled: true,  // step毎のスクリーンショットを取得する
      deleteSuccessful: false,  // テスト成功時もスクリーンショットを残す
      // フルページスクリーンショット。
      // true にするとフルページスクリーンショットを撮れるがテストが遅くなる。
      fullPageScreenshots: false,
      // screenshotsForAllureReport: true,
      output: './reports',
      // レポートを残さないメソッド。
      // 画面に変化がないようなものは省略した方がテストが速くなる。
      ignoreSteps: [
        "seeInPopup*",
        // "wait*",
        "grab*",
        // "fill*", // text入力系。fullPageScreenshots: true にするなら テスト時間との兼ね合いで調整した方がよいかもしれない。
      ],
    },
    retryFailedStep: {
       enabled: true  // アクション失敗時は自動リトライする
    },
  },
  multiple: {
    parallel: {
      chunks: "4"
    }
  },
}
