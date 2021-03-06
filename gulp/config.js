var dest = './web';
var src = './src';

module.exports = {
    clean: {
      dest: [dest + '/js', dest + '/css']
    },
    browserSync: {
        server: {
            baseDir: dest
        }
    },
    sass: {
        src: src + '/sass/style.scss',
        dest: dest + '/css',
        settings: {
            sourcemap: true
        },
        support: {
            browsers: ['last 2 versions']
        }
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/js/app.js',
            dest: dest + '/js',
            outputName: 'scripts.js'
        }]
    }
};
