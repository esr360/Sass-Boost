/******************************************************************
 * Sass-Boost
 * Grunt Setup
 * @uthor [@esr360](http://twitter.com/esr360)
 ******************************************************************/

module.exports = function(grunt) {
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Scss Lint
         * @see https://github.com/ahmednuaman/grunt-scss-lint
         */
        scsslint: {
            allFiles: [
                'src/**/*.scss',
                'unit-testing/functions/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: false
            },
        },

        /**
         * Mocha Cli
         * @note used for Scss unit testing
         * @see https://github.com/Rowno/grunt-mocha-cli
         */
        mochacli: {
            scss: ['unit-testing/tests.js']
        },

        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        sassdoc: {
            default: {
                src: ['src/functions/**/*.scss'],
                options: {
                    dest: 'docs'
                }
            },
        },

        /**
         * Watch
         * @see https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                spawn: false,
            },
            scss: {
                files: ['src/**/*.scss'],
                tasks: [ 
                    'scsslint',
                    'mochacli:scss',
                    'sassdoc',
                    'notify:css'
                ],
            },
        },

        /**
         * Notify
         * @see https://github.com/dylang/grunt-notify
         */
        notify: {
            css: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
                }
            }
        }

    });
    
    /**************************************************************
     * Load NPM Tasks
     *************************************************************/
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');
    
    /**************************************************************
     * Tasks
     *************************************************************/
    
    // Default Grunt task
    grunt.registerTask('default', [
        'compile',
        'watch'
    ]);
      
    // Compile the app
    grunt.registerTask('compile', [
        'lint',
        'test',
        'docs'
    ]);
        
    // Lint
    grunt.registerTask('lint', [
        'scsslint'
    ]);
        
    // Test
    grunt.registerTask('test', [
        'mochacli'
    ]);

    // Docs
    grunt.registerTask('docs', [
        'sassdoc'
    ]);

};