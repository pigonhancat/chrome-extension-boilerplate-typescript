# Chrome Extension Boilerplate With TypeScript and Webpack

## Install

```bash
$ git clone https://github.com/pigonhancat/chrome-extension-boilerplate-typescript.git .

$ npm install
```

## Development

- Chrome API 기능을 사용할 경우
    
    1. Hot-Reloading 기능을 사용할 경우, 에러 발생

        - 물론, UI는 Hot-Reloading을 이용해서 개발 가능

    1. 
        ```bash
        $ npm run build
        ```

        - 처음
            * [확장프로그램](chrome://extensions/)에 간 후, '압축해제된 확장 프로그램을 로드합니다' 클릭한 후 dist 폴더를 선택

        - 이후
            * [확장프로그램](chrome://extensions/)에 간 후, '업데이트' 클릭
        
- Chrome API 기능을 사용하지 않을 경우

    1.
        ```bash
        $ npm start
        ```

    1. Hot-Reloading 기능을 사용해서 개발