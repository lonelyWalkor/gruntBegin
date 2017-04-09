module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		copy: {
			module_target: {
				files: [{
					expand: true,
					cwd: "modules",
					src: "**/*",
					dest: "dist",
					// dest: "modules",
					filter: "isFile"
				}]
			}
		},
		cssmin: {
			module_target: {
				files: [{
					expand: true,
					cwd: "modules/css",
					src: "**/*.css",
					dest: "dist/css",
					// dest: "modules/css",
					ext: ".css"
				}]
			}
		},
		uglify: {
			options: {
				banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n",
				mangle: true,
				compress: {
					drop_console: true
				}
			},
			module_target: {
				files: [{
					expand: true,
					cwd: "modules/js",
					src: "**/*.js",
					dest: "dist/js",
					// dest: "modules/js",
					ext: ".js"
				}]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["copy:module_target", "uglify:module_target", "cssmin:module_target"]);
};