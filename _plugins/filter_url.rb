module Jekyll
	module CustomFilterUrl
		def guides_url(input)
			dictUrl = "/guides/#{input}"
			url = Liquid::Template.parse("{{ '#{dictUrl}' | relative_url }}").render!(@context)
			"#{url}"
		end
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