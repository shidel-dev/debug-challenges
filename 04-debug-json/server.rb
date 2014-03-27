# encoding: utf-8

class Server < Sinatra::Base
  configure do
    enable :logging
    set :app_file, __FILE__
    set :root, File.expand_path('../', __FILE__)
    set :public_folder, File.expand_path('../public', __FILE__)
  end

  get '/products' do
    content_type :json
    File.read(File.join(settings.root, 'data/data.json'))
  end
end
