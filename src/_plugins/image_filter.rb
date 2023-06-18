module Jekyll
    module ImageFilter
      def process_image_url(image_url, base_url)
        if image_url.start_with?('http')
          image_url
        elsif image_url.start_with?('/src/')
          base_url + image_url.sub('/src', '')
        else
          base_url + image_url
        end
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::ImageFilter)