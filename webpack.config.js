const path = require('path');

module.exports ={
    
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
       // publicPath:'dist',
    },
    devServer:{
        publicPath:'/dist/'
    },  
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve: {
       // root: path.resolve(__dirname,'dist'),
        extensions: ['.ts','.js']
    }
}