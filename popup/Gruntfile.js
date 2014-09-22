module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 5 version', '> 5%', 'ie 8', 'ie 9']
                },
            dist: {
                files: {
                    'main.css': 'build/main.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['build/main.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
