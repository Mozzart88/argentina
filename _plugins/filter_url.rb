module Jekyll
	module CustomFilterUrl
		def dict_url(input)
			dictUrl = "/guides/dictionary/#{input}"
			url = Liquid::Template.parse("{{ '#{dictUrl}' | relative_url }}").render!(@context)
			"#{url}"
		end
		def img_url(input)
			path = "/assets/img/#{input}"
			url = Liquid::Template.parse("{{ '#{path}' | relative_url }}").render!(@context)
			"#{url}"
		end
	end
end
Liquid::Template.register_filter(Jekyll::CustomFilterUrl)