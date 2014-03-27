# encoding: utf-8

# environment
ENV['RACK_ENV'] ||= 'development'
require 'bundler'
Bundler.require(:default)
require './server'
run Server
