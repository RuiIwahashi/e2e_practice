ARG CODECEPTJS_VERSION
FROM codeceptjs/codeceptjs:${CODECEPTJS_VERSION}

RUN apt-get update \
    && apt-get -y install locales locales-all \
    && locale-gen ja_JP.UTF-8 \
    && apt-get install -y fonts-noto-cjk \
    && rm -rf /var/lib/apt/lists/*

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

ENV LANG="ja_JP.UTF-8" \
    LANGUAGE="ja_JP:ja" \
    LC_ALL="ja_JP.UTF-8"

ENV NODE_PATH /usr/lib/node_modules:/codecept/node_modules

RUN npm install -g iconv-lite --unsafe-perm=true
