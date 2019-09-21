/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
// Alternative version of the study guide for project - https://drive.google.com/file/d/1nbC_QYE70LsdPXqotrK0zT24Py2BJKL6/view

/***
  15 inspirational array of quotes including: source, citation and year.
***/
var quotes = [
{ quote: 'LESSON ONE: DITCH THE DREAM. BE A DOER, NOT A DREAMER.',
  source: 'Shonda Rhimes',
  citation: '‘Year of Yes: How to Dance It Out, Stand In the Sun and Be Your Own Person’',
  year: 2015
},

{ quote: 'Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.',
  source: 'Oprah Winfrey',
  citation: 'BrainyQuote',
  year: "Unknown"
},

{ quote: 'Being aware of your crap, and actually overcoming your crap are two very different things.',
  source: 'Dr. Christina Yang',
  citation: 'Grey\'s Anatomy',
  year: 2007
},

{ quote: 'We can push ourselves further. We always have more to give.',
  source: 'Simone Biles',
  citation: 'Huffington Post (UK) 8 Quotes That Prove Olympic Gymnast Simone Biles Is A Total Badass',
  year: 2016
},

{ quote: 'The only thing that separates women of color from anyone else is opportunity.',
  source: 'Viola Davis',
  citation: 'Time Magazine',
  year: 2015
},

{ quote: 'Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself.',
  source: 'Kamina',
  citation: 'Gurren Lagann',
  year: 2007
},

{ quote: 'There are millions of possibilities for the future! But it\’s up to you to choose which becomes reality.',
  source: 'Garnet',
  citation: 'Steven Universe',
  year: 2015
},

{ quote: 'I really think a champion is defined not by their wins, but by how they can recover when they fall.',
  source: 'Serena Williams',
  citation: 'Time Magazine: 8 Serena Williams Quotes That Deserve Their Own Trophies',
  year: 2016
},

{ quote: 'Always stay true to yourself and never let what somebody says distract you from your goals.',
  source: 'Michelle Obama',
  citation: 'Michelle Obama: In Her Own Words',
  year: 2009
},

{ quote: 'If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.',
  source: 'President Barack Obama',
  citation: 'The Best Barack Obama Quotes on the President’s 55th Birthday',
  year: 2008
},


{ quote: 'I’m tryna learn something new. I’m tryna surround myself with people that inspire me or at least inquire similar desires.',
  source: 'Kendrick Lamar',
  citation: 'Everyday Power: 50 Kendrick Lamar Quotes That Will Uplift and Inspire',

},

{ quote: 'Sharing tea with a fascinating stranger is one of life’s true delights.',
  source: 'Iroh',
  citation: 'Avatar the Last Airbender',
  year: 2006
},

{ quote: 'Nothing will work unless you do.',
  source: 'Maya Angelou',
  citation: 'Maya Angelou Quotes: 15 of the Best',

},

{ quote: 'Confused? At a loss for what to do? Wow, sounds like you\'re human. Good Luck.',
  source: '@NightValeRadio',
  citation: 'Night Vale podcast',
  year: 2013
},

{ quote: 'I am Iron Man.',
  source: 'Tony Stark',
  citation: 'Avengers: Endgame',
  year: 2019
}
];


/***
getRandomQuote has been got!
***/

function getRandomQuote()
{
  var randoNum = Math.floor(Math.random() * (quotes.length) );
  return quotes [randoNum];
}



/***
printQuote variable using printPress to getRandomQuote and concat the htmlString and link the innerHTML with the div id "quote-box"
***/

function printQuote() {
  getRandomQuote();
  var printPress = getRandomQuote();
  let htmlString = ' ';

  htmlString += '<p class="quote">' + printPress.quote + '</p>';
  htmlString += '<p class="source">' + printPress.source;
  if (printPress.citation === true ) {
    htmlString += '<span class+="citation">' + printPress.citation + '</span>';
  }
  if (printPress.year === true) {
  htmlString += '<span class+="year">' + printPress.year + '</span>';
}

  htmlString += '</p>';

document.getElementById("quote-box").innerHTML = htmlString;
return htmlString;
}


/***
  When the button is clicked, the event listener
  below will "Show another quote," and "invoke" the function printQuote
  No changes to the line of code below.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember this is only the beginning;
