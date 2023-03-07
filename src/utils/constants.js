const NUMBER_OF_ARTICLES = 12;

const CLIMATE_CHANGE_KEYWORDS = [
  "Climate change",
  "Global warming",
  "Greenhouse gases",
  "Carbon footprint",
  "Renewable energy",
  "Sustainability",
  "Carbon emissions",
  "Climate action",
  "Paris Agreement",
  "Clean energy",
  "Carbon neutral",
  "Climate science",
  "Climate policy",
  "Climate crisis",
  "Climate adaptation",
  "Climate mitigation",
  "Climate solutions",
  "Climate justice",
  "Environmentalism",
  "Natural disasters",
];

const GREEN_TECH_KEYWORDS = [
  "Green technology",
  "Renewable energy",
  "Sustainability",
  "Clean energy",
  "Energy efficiency",
  "Solar power",
  "Wind power",
  "Green building",
  "Electric vehicles",
  "Carbon footprint",
  "Energy conservation",
  "Sustainable design",
  "Smart grids",
  "Eco-friendly",
  "Green living",
  "Green jobs",
  "Energy storage",
  "Geothermal energy",
  "Biomass energy",
  "Hydrogen fuel cells",
];

const CLIMATE_CHANGE_TOPICS_PROMPT = `Write a list of ${NUMBER_OF_ARTICLES} blog article
topics that focus on Climate Change. Each item in the list should
be formatted as a short, clear, and concise statement, and include a single topic
category as a separate string. 

Formatting: "The Role of Renewable Energy in Combating Climate Change", "Energy". 
Additionally, please try use one the following SEO keywords in each category: ${CLIMATE_CHANGE_KEYWORDS}. 
Ensure that there is a variety of different topics.`;

const GREEN_TECH_TOPICS_PROMPT = `Write a list of ${NUMBER_OF_ARTICLES} blog article
topics that focus on Green Technology. Each item in the list should
be formatted as a short, clear, and concise statement, and include a single topic
category as a separate string. 

Formatting: "The Role of Renewable Energy in Combating Climate Change", "Energy". 
Additionally, please try use one the following SEO keywords in each category: ${GREEN_TECH_KEYWORDS}. 
Ensure that there is a variety of different topics`;

const CLIMATE_CHANGE_ARTICLE_PROMPT = `I would like a comprehensive article on {}. The article should be written in 
an informative and engaging tone, with a friendly and approachable style. Please include an 
introduction and conclusion paragraph, and at least two additional paragraphs that cover topics 
such as the environmental benefits of renewable energy, the cost savings it can provide, 
and the different types of renewable energy sources available.

Please aim for a minimum of 4 paragraphs, with each paragraph being at least 300 words 
in length. If possible, please include some statistics or studies to support the points 
made in the article. Additionally, please include the following SEO keywords throughout 
the article: ${CLIMATE_CHANGE_KEYWORDS}.

For formatting, please add "title:title" in front of every title and "paragraph:paragraph" 
in front of every paragraph and on the same line. For example, ["Title: The Benefits of 
Renewable Energy", "Paragraph: Renewable energy sources such as solar, wind, and 
hydroelectric power offer many benefits over traditional energy sources like coal and oil."].`;

const GREEN_TECH_ARTICLE_PROMPT = `I would like a comprehensive article on {}. The article should be written in 
an informative and engaging tone, with a friendly and approachable style. Please include an 
introduction and conclusion paragraph, and at least two additional paragraphs that cover topics 
such as the environmental benefits of renewable energy, the cost savings it can provide, 
and the different types of renewable energy sources available.

Please aim for a minimum of 4 paragraphs, with each paragraph being at least 300 words 
in length. If possible, please include some statistics or studies to support the points 
made in the article. Additionally, please include the following SEO keywords throughout 
the article: ${GREEN_TECH_KEYWORDS}.

For formatting, please add "title:title" in front of every title and "paragraph:paragraph" 
in front of every paragraph and on the same line. For example, ["Title: The Benefits of 
Renewable Energy", "Paragraph: Renewable energy sources such as solar, wind, and 
hydroelectric power offer many benefits over traditional energy sources like coal and oil."].`;

const AUTHOR_PROMPT = `Please generate ${NUMBER_OF_ARTICLES} fictional blog post author names.`;

const constants = {
  NUMBER_OF_ARTICLES,
  CLIMATE_CHANGE_TOPICS_PROMPT,
  GREEN_TECH_TOPICS_PROMPT,
  CLIMATE_CHANGE_ARTICLE_PROMPT,
  GREEN_TECH_ARTICLE_PROMPT,
  AUTHOR_PROMPT,
};

export default constants;
