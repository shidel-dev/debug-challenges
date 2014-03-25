class MyObject
  attr_reader :number
  def initialize(number)
    @number = number
  end

  def add(other_number)
    number + other_number
  end

  def subtract(other_number)
    number - other_number
  end

  def multiply(other_number)
    number * other_number
  end
end
