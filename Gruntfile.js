module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.read('package.json'),

        clean: {
            build: {
                src: ['bin/']
            },
            tmp: {
                src: ['bin/tmp']
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
        }

    });

    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'transpile', 'requirejs', 'clean:tmp', 'copy']);
    //grunt.registerTask('build', ['clean', 'transpile', 'requirejs']);

}