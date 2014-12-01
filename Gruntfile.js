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
                        dest: 'bin/tmp/'
                    }
                ]
            }
        },

        requirejs: {
            build: {
                options: {
                    paths: {
                        'lib': '../../lib'
                    },
                    baseUrl: './bin/tmp',
                    name: 'lib/almond',
                    include: ['client'],
                    insertRequire: ['client'],
                    out: './bin/public/client.min.js',
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
        }

    });

    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'transpile', 'requirejs', 'clean:tmp', 'copy']);
    //grunt.registerTask('build', ['clean', 'transpile', 'requirejs']);

}