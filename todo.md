Implement api calls to huggingface, more information in /api/route.js
In NoteTranscription.js we are passing the variable transcript to the component notesummarize, the variable represents
the transcribed text, so you would pass that as a input query to the api on huggingface
In order to see how to implement the api go to the bart-large-cnn summarizer and click on deploy > inference API and follow the javascript version
