class Task < ActiveRecord::Base
  has_attached_file :photo,
                    :styles => { small: "64x64>", med: "100x100>", large: "360x360>" },
                    :url => "/assets/images/:task/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/images/:task/:style/:basename.:extension"

  validates_attachment :photo, content_type: { content_type: /\Aimage\/.*\Z/ }
  # Paperclip.options[:image_magick_path] = "/opt/ImageMagick/bin"
  # Paperclip.options[:command_path] = "/opt/ImageMagick/bin"
end
