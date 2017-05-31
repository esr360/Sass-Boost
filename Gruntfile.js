/******************************************************************
 * Sass-Boost
 * Grunt Setup
 * @uthor [@esr360](http://twitter.com/esr360)
 ******************************************************************/

module.exports = function(grunt) {
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
        
        /**
         * Clean
         * @see https://github.com/gruntjs/grunt-contrib-clean
         */
        clean: {
            default: {
                src: 'dist'
            }
        },
             
        /**
         * Concat
         * @see https://github.com/gruntjs/grunt-contrib-concat
         */   
        concat: {
            default: {
                src: ['src/functions/*.scss'],
                dest: 'dist/_sass-boost.scss'
            }
        },

        /**
         * Scss Lint
         * @see https://github.com/ahmednuaman/grunt-scss-lint
         */
        scsslint: {
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: false
            },
            default: [
                'src/**/*.scss'
            ]
        },

        /**
         * Mocha Cli
         * @note used for Scss unit testing
         * @see https://github.com/Rowno/grunt-mocha-cli
         */
        mochacli: {
            default: ['unit-testing/tests.js']
        },

        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        sassdoc: {
            default: {
                src: ['src/**/*.scss'],
                options: {
                    dest: 'docs'
                }
            }
        },

        /**
         * Watch
         * @see https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                spawn: false,
            },
            default: {
                files: ['src/**/*.scss'],
                tasks: [ 
                    'scsslint',
                    'mochacli:scss',
                    'sassdoc',
                    'notify:css'
                ]
            }
        },

        /**
         * Notify
         * @see https://github.com/dylang/grunt-notify
         */
        notify: {
            default: {
                options: {
                    title: 'Success',
                    message: 'There were no errors running the compile tasks'
                }
            }
        }

    });
    
    /**************************************************************
     * Load NPM Tasks
     *************************************************************/

    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-concat')
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
        'scsslint',
        'mochacli',
        'clean',
        'concat',
        'sassdoc'
    ]);

};