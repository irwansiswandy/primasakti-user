module.exports = {
    chainWebpack: config => {
        config
            .module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type("javascript/auto")
            .use("i18n")
            .loader("@kazupon/vue-i18n-loader")
            .end();
        config
            .plugin('html')
            .tap(args => {
                args[0].meta = { viewport: 'width=device-width,initial-scale=1,user-scalable=no' };
                return args;
            })        
    }
}