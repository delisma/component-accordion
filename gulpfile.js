// Hydrogen / Components / Accordion / Gulpfile

"use strict";

// Requirements
const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const gzip = require('gulp-gzip');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

sass.compiler = require('sass');

// Version
const version = "0-0-6";

// Test Scripts

    // Concatenate and Move Scripts
    function concatTestScripts() {
        return src([
            // Core
            'node_modules/@hydrogen-design-system/core/dist/scripts/h2-core.min.js',
            // Component
            'dev/scripts/h2-component-accordion.js'
        ])
        .pipe(concat('h2-component-accordion.js'))
        .pipe(replace('$H2ENV', "versioned"))
        .pipe(replace('$H2VER', version))
        .pipe(dest('tests/cache/scripts'));
    }

    // Compile and Move Sass
    function moveCoreTestSass() {
        return src('node_modules/@hydrogen-design-system/core/dist/styles/*.scss')
        .pipe(dest('tests/cache/styles/core'));
    }
    function moveVersionedComponentStyleTestSass() {
        return src('dev/styles/_component-accordion.scss')
        .pipe(dest('tests/cache/styles'));
    }
    function moveVersionedComponentTestSass() {
        return src('dev/styles/h2-versioned-component-accordion.scss')
        .pipe(replace('$H2VER', version))
        .pipe(rename(function(path) {
            path.basename = "h2-component-accordion";
        }))
        .pipe(dest('tests/cache/styles'));
    }
    function compileTestSass() {
        return src('tests/cache/styles/h2-component-accordion.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('tests/cache/styles'));
    }

    // Move HTML
    function moveTestHTML() {
        return src('tests/index.html')
        .pipe(replace('$H2VER', version))
        .pipe(dest('tests/cache'));
    }

    // Clean Cache
    function cleanCache() {
        return del('tests/cache/**/*')
    }

    // Watch
    function watchTestFiles() {
        watch(['dev/**/*', 'tests/*.html'], series(cleanCache, concatTestScripts, moveCoreTestSass, moveVersionedComponentStyleTestSass, moveVersionedComponentTestSass, compileTestSass, moveTestHTML, browserSyncReload));
    }

    // Browsersync
    function browserSync(done) {
        browsersync.init({
            server: {
                baseDir: 'tests/cache'
            },
        });
        done();
    }
    function browserSyncReload(done) {
        return src('tests/cache/*.html')
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Default Task
    exports.default = series(cleanCache, concatTestScripts, moveCoreTestSass, moveVersionedComponentStyleTestSass, moveVersionedComponentTestSass, compileTestSass, moveTestHTML, parallel(browserSync, watchTestFiles));

// Development Scripts

    // Concatenate and Compress Scripts

        // System: Concatenated, Raw
        function concatSystemScripts() {
            return src([
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "system"))
            .pipe(replace('$H2VER', version))
            .pipe(dest('dist/system/scripts'));
        }

        // System: Concatenated, Uglified
        function uglifySystemScripts() {
            return src([
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "system"))
            .pipe(replace('$H2VER', version))
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(dest('dist/system/scripts'));
        }

        // System: Concatenated, Uglified, GZipped
        function gzipSystemScripts() {
            return src([
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "system"))
            .pipe(replace('$H2VER', version))
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(gzip())
            .pipe(dest('dist/system/scripts'));
        }

        // Versioned: Concatenated, Raw
        function concatVersionedScripts() {
            return src([
                // Core
                'node_modules/@hydrogen-design-system/core/dist/scripts/h2-core.min.js',
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "versioned"))
            .pipe(replace('$H2VER', version))
            .pipe(dest('dist/versioned/scripts'));
        }

        // Versioned: Concatenated, Uglified
        function uglifyVersionedScripts() {
            return src([
                // Core
                'node_modules/@hydrogen-design-system/core/dist/scripts/h2-core.min.js',
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "versioned"))
            .pipe(replace('$H2VER', version))
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(dest('dist/versioned/scripts'));
        }

        // Versioned: Concatenated, Uglified, GZipped
        function gzipVersionedScripts() {
            return src([
                // Core
                'node_modules/@hydrogen-design-system/core/dist/scripts/h2-core.min.js',
                // Component
                'dev/scripts/h2-component-accordion.js'
            ])
            .pipe(concat('h2-component-accordion.js'))
            .pipe(replace('$H2ENV', "versioned"))
            .pipe(replace('$H2VER', version))
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(gzip())
            .pipe(dest('dist/versioned/scripts'));
        }

    // Move and Compile Sass

        // Move Sass for Production
        function moveSystemComponentStyleSass() {
            return src('dev/styles/_component-accordion.scss')
            .pipe(dest('dist/system/styles'));
        }
        function moveSystemComponentSass() {
            return src('dev/styles/h2-system-component-accordion.scss')
            .pipe(rename(function(path) {
                path.basename = "h2-component-accordion";
            }))
            .pipe(dest('dist/system/styles'));
        }
        function moveCoreSass() {
            return src('node_modules/@hydrogen-design-system/core/dist/styles/*.scss')
            .pipe(dest('dist/versioned/styles/core'));
        }
        function moveVersionedComponentStyleSass() {
            return src('dev/styles/_component-accordion.scss')
            .pipe(dest('dist/versioned/styles'));
        }
        function moveVersionedComponentSass() {
            return src('dev/styles/h2-versioned-component-accordion.scss')
            .pipe(replace('$H2VER', version))
            .pipe(rename(function(path) {
                path.basename = "h2-component-accordion";
            }))
            .pipe(dest('dist/versioned/styles'));
        }

        // Compiled, Raw
        function compileSass() {
            return src('dist/versioned/styles/h2-component-accordion.scss')
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            .pipe(rename(function(path) {
                path.basename = "h2-component-accordion";
            }))
            .pipe(dest('dist/versioned/styles'));
        }

        // Compiled, Nanoed
        function nanoSass() {
            return src('dist/versioned/styles/h2-component-accordion.scss')
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            .pipe(postcss([cssnano()]))
            .pipe(rename(function(path) {
                path.basename = "h2-component-accordion";
                path.extname = ".min.css";
            }))
            .pipe(dest('dist/versioned/styles'));
        }

        // Compiled, Nanoed, GZipped
        function gzipSass() {
            return src('dist/versioned/styles/h2-component-accordion.scss')
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            .pipe(postcss([cssnano()]))
            .pipe(rename(function(path) {
                path.basename = "h2-component-accordion";
                path.extname = ".min.css";
            }))
            .pipe(gzip())
            .pipe(dest('dist/versioned/styles'));
        }

    // Clean Dist
    function cleanDist() {
        return del('dist/**/*')
    }

    // Exports

        // gulp build
        exports.build = series(cleanDist, concatSystemScripts, uglifySystemScripts, gzipSystemScripts, concatVersionedScripts, uglifyVersionedScripts, gzipVersionedScripts, moveSystemComponentStyleSass, moveSystemComponentSass, moveCoreSass, moveVersionedComponentStyleSass, moveVersionedComponentSass, compileSass, nanoSass, gzipSass);