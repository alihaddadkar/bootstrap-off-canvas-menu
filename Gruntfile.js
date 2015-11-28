module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          './dist/css/bootstrap.offcanvas.css': './bootstrap.offcanvas.scss',       // 'destination': 'source'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },

  });
 
  // Load the Grunt plugins.
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
 
  // Register the default tasks.
  grunt.registerTask('default', ['watch']);

};
