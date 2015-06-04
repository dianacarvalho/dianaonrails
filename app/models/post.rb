# == Schema Information
#
# Table name: posts
#
#  id                   :integer          not null, primary key
#  title                :string(255)
#  content              :text(65535)
#  field                :string(255)
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  picture_file_name    :string(255)
#  picture_content_type :string(255)
#  picture_file_size    :integer
#  picture_updated_at   :datetime
#

class Post < ActiveRecord::Base
	has_attached_file :picture, :styles => { :medium => "400x400>", :thumb => "100x100>" }
  	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
end
