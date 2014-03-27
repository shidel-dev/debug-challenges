require 'spec_helper'

describe MyObject do

  before do
    @my_object = MyObject.new(2)
  end

  it "can add two numbers" do
    @my_object.add(2).must_equal 4
  end
  
  it "can subtract two numbers" do
    @my_object.subtract(-2).must_equal 4
  end

  it "can multiply two numbers" do
    @my_object.multiply(2).must_equal 4
  end
end
