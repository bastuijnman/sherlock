module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.read('package.json'),

        clean: {
            build: {
                src: ['bin/']
            },
            tmp: {
                src: ['bin/tmp']
            },
            doc: {
                src: ['doc/']
            }
        },

        transpile: {
            build: {
                type: 'amd',
                files: [
                    {
                        expand: true,
                        cwd: 'src/client/',
                        src: ['**/*.js'],
                        dest: 'bin/tmp/client'
                    },
                    {
                        expand: true,
                        cwd: 'src/debugger/',
                        src: ['**/*.js'],
                        dest: 'bin/tmp/debugger'
                    }
                ]
            }
        },

        requirejs: {
            buildClient: {
                options: {
                    paths: {
                        'lib': '../../../lib'
                    },
                    baseUrl: './bin/tmp/client',
                    name: 'lib/almond',
                    include: ['client'],
                    insertRequire: ['client'],
                    out: './bin/public/client.min.js',
                    wrap: true
                }
            },
            buildDebugger: {
                options: {
                    paths: {
                        'lib': '../../../lib'
                    },
                    baseUrl: './bin/tmp/debugger',
                    name: 'lib/almond',
                    include: ['debugger'],
                    insertRequire: ['debugger'],
                    out: './bin/public/debugger.min.js',
                    optimize: 'none',
                    wrap: true
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/server/',
                        src: '**',
                        dest: 'bin'
                    }
                ]
            }
        },

        jsdoc: {
            build: {
                src: ['src/**/*.js'],
                options: {
                    destination: 'doc/',
                    configure: 'jsdoc.json'
                }
            }
        },

        less: {
            build: {
                files: {
                    'src/server/public/assets/debugger.css': 'src/debugger/assets/base.less'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('build', ['clean', 'less', 'transpile', 'requirejs', 'clean:tmp', 'copy']);
    grunt.registerTask('doc', ['jsdoc']);
    //grunt.registerTask('build', ['clean', 'transpile', 'requirejs']);

}