// implement api call to huggingface summarization model
// https://huggingface.co/facebook/bart-large-cnn?text=Good+morning%2C+everyone.+Today%2C+we%27re+delving+into+Object-Oriented+Programming+%28OOP%29.+OOP+is+a+programming+approach+that+revolves+around+the+concept+of+objects.%0A%0AIn+OOP%2C+everything+is+an+object.+These+objects+have+attributes+%28or+properties%29+and+methods+%28or+functions%29.+We+define+a+blueprint+for+these+objects+called+a+class.+So%2C+if+we+have+a+class+%22Car%22%2C+it+might+have+attributes+like+%22color%22+and+%22speed%22%2C+and+methods+like+%22accelerate%22+and+%22brake%22.%0A%0AEncapsulation+is+a+key+principle+in+OOP.+It+involves+bundling+data+and+methods+together+within+a+class%2C+promoting+information+hiding+and+modularity.%0A%0AInheritance+allows+us+to+create+new+classes+based+on+existing+ones.+For+instance%2C+a+%22SUV%22+class+can+inherit+attributes+and+methods+from+the+%22Car%22+class%2C+while+adding+its+own+specific+features.%0A%0APolymorphism+enables+objects+of+different+classes+to+be+treated+uniformly+through+a+common+interface.+It+promotes+flexibility+and+extensibility+in+software+design.%0A%0ASo%2C+why+should+we+care+about+OOP%3F+Well%2C+it+offers+several+benefits%3A&inference_api=true
// probably with a get request and return the json so that the component that calls the api can use it, the component
// being NoteSummarize.js

import React from "react";

export default function handler(req, res) {
	const data = {
		message: "example response",
	};
	res.status(200).json(data);
}
