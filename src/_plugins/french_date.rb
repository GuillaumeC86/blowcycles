require 'date'

module FrenchDateFilter
  MONTH_NAMES_FR = {
    'January'   => 'janvier',
    'February'  => 'février',
    'March'     => 'mars',
    'April'     => 'avril',
    'May'       => 'mai',
    'June'      => 'juin',
    'July'      => 'juillet',
    'August'    => 'août',
    'September' => 'septembre',
    'October'   => 'octobre',
    'November'  => 'novembre',
    'December'  => 'décembre'
  }.freeze

  def french_date(date)
    month_name_en = Date.parse(date).strftime('%B')
    month_name_fr = MONTH_NAMES_FR[month_name_en] || month_name_en
    Date.parse(date).strftime("%-d #{month_name_fr} %Y")
  end
end

Liquid::Template.register_filter(FrenchDateFilter)
