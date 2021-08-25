FROM keymetrics/pm2:latest-alpine
RUN ls
# Bundle APP files
ENV TZ=Asia/Seoul
WORKDIR /usr/src/app
COPY ./backend/src src/
COPY ./backend/package.json .
COPY ./backend/pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn

# devDependencies를 제외하고 설치
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json", "--env", "production"]