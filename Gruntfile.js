/*jshint browser: true, devel: true, jquery: true*/
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'css/bootstrap.min.css': 'sass/app.scss'
            }
        } 
    },
      
    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
            options: {
                spawn: false,
            }
        }
        }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

    
  grunt.registerTask('default', ['sass']);

};